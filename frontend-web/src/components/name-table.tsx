/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Table } from "antd";
import { deleteName, getNames } from "../server/names-calls";

interface NameTableProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const limit = 10;

function NameTable({currentPage, setCurrentPage}: NameTableProps) {
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ['names', currentPage],
        queryFn: () => getNames((currentPage - 1) * limit, limit),
    });

    const deleteNamemutation = useMutation({
        mutationFn: deleteName,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['names'] });
        },
    });

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'First name',
            dataIndex: 'firstName',
            key: 'name',
        },
        {
            title: 'Last name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_text: any, record: any) => (
                <Button onClick={() => deleteNamemutation.mutate(record.id)}>Delete</Button>
            ),
        },
    ];

    const {dataSource, totalCount} = useMemo(() => {
        const mappedData = (data?.data?.data || []).map((name: any) => ({
            key: name.id,
            id: name.id,
            firstName: name.firstName,
            lastName: name.lastName,
        }));
        
        return {
            dataSource: mappedData,
            totalCount: data?.data?.totalCount ?? 0,
        };
    }, [data]);

    const handleTableChange = (pagination: any) => {
        setCurrentPage(pagination.current);
    };

    return (
        <Table
            loading={isLoading}
            dataSource={dataSource}
            columns={columns}
            pagination={{ current: currentPage, pageSize: limit, total: totalCount }}
            onChange={handleTableChange}
        />
    );
}

export default NameTable;