import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Input, Modal } from "antd";
import { postName } from "../server/names-calls";

interface NameModalProps {
    onClose: () => void;
    onOk: () => void;
    isModalOpen: boolean;
}

function NameModal({onClose, isModalOpen, onOk}: NameModalProps) {
    const queryClient = useQueryClient();
    const [form] = Form.useForm();

    const postNameMutation = useMutation({
        mutationFn: postName,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['names'] })
        },
    });

    const handleOk = async () => {
        const values = await form.validateFields();

        postNameMutation.mutate(values);
        
        onOk();
        form.resetFields();
    };
    
    const handleCancel = () => {
        onClose();
        form.resetFields();
    };

    return (
        <Modal title="Add Name" okText="Add" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form form={form}>
                <Form.Item
                    label="First Name"
                    name="firstName"
                    required
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastName"
                    required
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default NameModal;