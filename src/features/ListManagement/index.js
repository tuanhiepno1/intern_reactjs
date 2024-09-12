import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchProjects } from '../../services/ProjectApi_listmanagement';
import AddInternForm from './GroupListManagement/pages/addNewIntern';
import CreateGroupModal from './GroupListManagement/pages/createGroup';
import GroupList from './GroupListManagement/pages/grouplist';
import GroupListHeaderManage from './GroupListManagement/pages/header';
import InternListHeaderManage from './InternListManagement/pages/header';
import InternList from './InternListManagement/pages/internlist';

function ListManagementFeature() {
    const [data, setData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isCreateGroupModalVisible, setIsCreateGroupModalVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const loadData = async () => {
            try {
                const projectsData = await fetchProjects();
                setData(projectsData);
            } catch (error) {
                console.error('Error fetching data:', error);
                // You might want to set some error state here
            }
        };

        loadData();
    }, []);

    const containerStyle = {
        backgroundColor: '#fff',
        borderRadius: '34px',
        padding: '24px',
        margin: '20px',
    };

    const handleStatusChange = (key, newStatus) => {
        const newData = data.map(item => {
            if (item.key === key) {
                return { ...item, status: newStatus };
            }
            return item;
        });
        setData(newData);
        console.log('Update Status', newData[key]);
    };

    const handleContractChange = (key, newContractStatus) => {
        const newData = data.map(item => {
            if (item.key === key) {
                return { ...item, internshipContract: newContractStatus };
            }
            return item;
        });
        setData(newData);
        console.log('Update Contract', newData[key]);
    };

    const handleAdd = (values) => {
        const newIntern = {
            key: String(data.length + 1),
            ...values,
            comments: [],
        };
        setData([...data, newIntern]);
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showCreateGroupModal = () => {
        setIsCreateGroupModalVisible(true);
    };

    const handleCreateGroupCancel = () => {
        setIsCreateGroupModalVisible(false);
    };

    const renderContent = () => {
        if (location.pathname === '/group-list') {
            return (
                <div className="group-management">
                    <GroupListHeaderManage
                        onAddNewIntern={showModal}
                        onCreateNewGroup={showCreateGroupModal}
                    />
                    <Card style={containerStyle}>
                        <GroupList
                            data={data}
                            onStatusChange={handleStatusChange}
                            onContractChange={handleContractChange}
                        />
                        <AddInternForm
                            visible={isModalVisible}
                            onCancel={handleCancel}
                            onAdd={handleAdd}
                        />
                        <CreateGroupModal
                            visible={isCreateGroupModalVisible}
                            onCancel={handleCreateGroupCancel}
                            selectedRows={[]}
                        />
                    </Card>
                </div>
            );
        } else if (location.pathname === '/intern-list') {
            return (
                <div className="intern-management">
                    <InternListHeaderManage
                        onAddNewIntern={showModal}
                        onCreateNewGroup={showCreateGroupModal}
                    />
                    <Card style={containerStyle}>
                        <InternList
                            data={data}
                            onStatusChange={handleStatusChange}
                            onContractChange={handleContractChange}
                        />
                        <AddInternForm
                            visible={isModalVisible}
                            onCancel={handleCancel}
                            onAdd={handleAdd}
                        />
                    </Card>
                </div>
            );
        }
        return null; // Or a default view if neither path matches
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
}

export default ListManagementFeature;