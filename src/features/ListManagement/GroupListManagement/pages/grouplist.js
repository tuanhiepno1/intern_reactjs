import { LeftOutlined, RightOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Col, Row, Select, Table, Typography, Modal } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Filter from '../../filter';
import './style.css';

const { Text } = Typography;
const { Option } = Select;

GroupList.propTypes = {
    data: PropTypes.array.isRequired,
    onStatusChange: PropTypes.func,
    onContractChange: PropTypes.func,
};

function GroupList(props) {
    const { data, onStatusChange, onContractChange } = props;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalComments, setModalComments] = useState([]);

    const showCommentsModal = (comments) => {
        setModalComments(comments);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        {
            title: '',
            dataIndex: 'select',
            key: 'select',
            render: (_, record) => (
                <input type="checkbox" />
            ),
        },
        { title: 'Intern ID', dataIndex: 'internId', key: 'internId' },
        { title: 'Date Interview', dataIndex: 'dateInterview', key: 'dateInterview' },
        { title: 'Time Interview', dataIndex: 'timeInterview', key: 'timeInterview' },
        { title: 'Full Name', dataIndex: 'fullName', key: 'fullName' },
        { title: 'Date Of Birth', dataIndex: 'dateOfBirth', key: 'dateOfBirth' },
        { title: 'Phone Number', dataIndex: 'phoneNumber', key: 'phoneNumber' },
        { title: 'Position', dataIndex: 'position', key: 'position' },
        { title: 'School', dataIndex: 'school', key: 'school' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'CV', dataIndex: 'cv', key: 'cv', render: (text) => <a href={text} target="_blank" rel="noopener noreferrer">Link</a> },
        {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
            render: (comments) => {
                if (Array.isArray(comments) && comments.length > 0) {
                    return (
                        <Button onClick={() => showCommentsModal(comments)}>
                            {`${comments.length} comment${comments.length > 1 ? 's' : ''}`}
                            <EyeOutlined style={{ marginLeft: '5px' }} />
                        </Button>
                    );
                } else if (typeof comments === 'string') {
                    return (
                        <span>
                            {comments}
                            <EyeOutlined style={{ marginLeft: '5px' }} />
                        </span>
                    );
                } else {
                    return (
                        <span>
                            No comments
                            <EyeOutlined style={{ marginLeft: '5px' }} />
                        </span>
                    );
                }
            }
        },
        { title: 'Role', dataIndex: 'role', key: 'role' },
        { title: 'Project', dataIndex: 'project', key: 'project' },
        { title: 'Group Zalo', dataIndex: 'groupZalo', key: 'groupZalo' },
        { title: 'Mentor', dataIndex: 'mentor', key: 'mentor' },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status, record) => (
                <Select
                    value={status}
                    onChange={(value) => onStatusChange(record.key, value)}
                    style={{ width: 130 }}
                >
                    <Option value="In process">In process</Option>
                    <Option value="Out">Out</Option>
                    <Option value="Completed OJT">Completed OJT</Option>
                </Select>
            )
        },
        {
            title: 'Internship Contract',
            dataIndex: 'internshipContract',
            key: 'internshipContract',
            render: (contractStatus, record) => (
                <Select
                    value={contractStatus}
                    onChange={(value) => onContractChange(record.key, value)}
                    style={{ width: 130 }}
                >
                    <Option value="Signed" contractStatus={contractStatus === "Signed"}>Signed</Option>
                    <Option value="Not signed" contractStatus={contractStatus === "Not signed"}>Not signed</Option>
                </Select>
            )
        },
        {
            title: 'Button', key: 'button', render: () => (
                <div className="action-buttons">
                    <Button >View</Button>
                    <Button >Update File</Button>
                </div >
            )
        },
    ];

    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 5;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="group-list-container">
            <Filter data={data} />
            <Table
                dataSource={data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
                columns={columns}
                pagination={false}
                style={{ marginTop: '20px' }}
            />

            <Row style={{
                background: '#f5f5f5',
                padding: '10px 20px',
                borderRadius: '20px',
                width: '100%',
                marginTop: '20px',
                height: '60px'
            }}
                justify="space-between"
                align="middle"
            >
                <Col>
                    <Text>
                        {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
                    </Text>
                </Col>
                <Col>
                    <Row align="middle">
                        <Text style={{ marginRight: 8 }}>The page you're on</Text>
                        <Select
                            value={currentPage}
                            style={{ width: 60, marginRight: 16 }}
                            onChange={handlePageChange}
                        >
                            {[...Array(totalPages)].map((_, i) => (
                                <Option key={i + 1} value={i + 1}>{i + 1}</Option>
                            ))}
                        </Select>
                        <Button
                            icon={<LeftOutlined />}
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        />
                        <Button
                            icon={<RightOutlined />}
                            style={{ marginLeft: 8 }}
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        />
                    </Row>
                </Col>
            </Row>

            <Modal
                title="Comments"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {modalComments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))}
            </Modal>
        </div>
    );
}

export default GroupList;