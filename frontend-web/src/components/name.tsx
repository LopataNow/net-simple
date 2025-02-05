import NameModal from './name-modal';
import NameTable from './name-table';
import { Button } from 'antd';
import { useState } from 'react';
import './nane.scss';

function Name() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOnOk = () => {
        setCurrentPage(1);
        setIsModalOpen(false);
    }

    return (
        <div className='name'>
            <div className='name-table-header'>
                <Button type="primary" onClick={handleOpenModal}>
                    Add name
                </Button>
            </div>
            <NameTable currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NameModal isModalOpen={isModalOpen} onClose={handleCloseModal} onOk={handleOnOk}  />
        </div>
    )
}

export default Name
