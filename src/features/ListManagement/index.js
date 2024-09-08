import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { useLocation } from 'react-router-dom';
import GroupList from './GroupListManagement/pages/grouplist';
import InternList from './InternListManagement/pages/internlist';
import AddInternForm from './GroupListManagement/pages/addNewIntern';
import GroupListHeaderManage from './GroupListManagement/pages/header';
import InternListHeaderManage from './InternListManagement/pages/header';
import CreateGroupModal from './GroupListManagement/pages/createGroup';

function ListManagementFeature() {
    const [data, setData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isCreateGroupModalVisible, setIsCreateGroupModalVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const initialData = [
            {
                key: '1',
                internId: '#12345328',
                dateInterview: '2 Jan 2023',
                timeInterview: '10:15:00 AM',
                fullName: 'Esther Eden',
                dateOfBirth: '16/07/2001',
                phoneNumber: '0376782528',
                position: 'Back-End',
                school: 'FPT University',
                address: 'District 9',
                email: 'abc@gmail.com',
                cv: 'https://example.com/cv',
                comments: ['Good performance', 'Shows initiative'],
                report: ['Good performance', 'Shows initiative'],
                role: 'Leader',
                project: 'Intern System',
                groupZalo: 'FE Intern System',
                mentor: 'Esther Eden',
                status: 'In process',
                internshipContract: 'Signed',
            },
            {
                key: '2',
                internId: '#12345329',
                dateInterview: '3 Jan 2023',
                timeInterview: '11:00:00 AM',
                fullName: 'John Doe',
                dateOfBirth: '20/08/2000',
                phoneNumber: '0376782529',
                position: 'Front-End',
                school: 'RMIT University',
                address: 'District 7',
                email: 'def@gmail.com',
                cv: 'https://example.com/cv2',
                comments: ['Needs improvement', 'Willing to learn'],
                report: ['Needs improvement', 'Willing to learn'],
                role: 'Member',
                project: 'E-commerce Platform',
                groupZalo: 'BE Intern System',
                mentor: 'Jane Smith',
                status: 'Completed OJT',
                internshipContract: 'Not signed',
            },
            {
                key: '3',
                internId: '#12345330',
                dateInterview: '4 Jan 2023',
                timeInterview: '09:30:00 AM',
                fullName: 'Alice Johnson',
                dateOfBirth: '05/03/2002',
                phoneNumber: '0376782530',
                position: 'Full-Stack',
                school: 'Ho Chi Minh City University of Technology',
                address: 'District 5',
                email: 'ghi@gmail.com',
                cv: 'https://example.com/cv3',
                comments: ['Excellent work', 'Quick learner', 'Team player'],
                report: ['Excellent work', 'Quick learner', 'Team player'],
                role: 'Member',
                project: 'Mobile App Development',
                groupZalo: 'Mobile Intern System',
                mentor: 'Bob Williams',
                status: 'In process',
                internshipContract: 'Signed',
            },
            {
                key: '4',
                internId: '#12345331',
                dateInterview: '5 Jan 2023',
                timeInterview: '14:00:00 PM',
                fullName: 'Emma Wilson',
                dateOfBirth: '12/11/2001',
                phoneNumber: '0376782531',
                position: 'UI/UX Designer',
                school: 'Vietnam National University',
                address: 'District 1',
                email: 'jkl@gmail.com',
                cv: 'https://example.com/cv4',
                comments: ['Great potential', 'Creative thinker'],
                report: ['Great potential', 'Creative thinker'],
                role: 'Member',
                project: 'Website Redesign',
                groupZalo: 'Design Intern System',
                mentor: 'Charlie Brown',
                status: 'Completed OJT',
                internshipContract: 'Signed',
            },
            {
                key: '5',
                internId: '#12345332',
                dateInterview: '6 Jan 2023',
                timeInterview: '10:45:00 AM',
                fullName: 'Michael Chen',
                dateOfBirth: '28/09/2000',
                phoneNumber: '0376782532',
                position: 'Data Analyst',
                school: 'Ho Chi Minh City University of Science',
                address: 'District 3',
                email: 'mno@gmail.com',
                cv: 'https://example.com/cv5',
                comments: ['Average performance', 'Needs guidance'],
                report: ['Average performance', 'Needs guidance'],
                role: 'Member',
                project: 'Data Visualization',
                groupZalo: 'Data Intern System',
                mentor: 'Diana Lee',
                status: 'In process',
                internshipContract: 'Not signed',
            },
            {
                key: '6',
                internId: '#12345333',
                dateInterview: '7 Jan 2023',
                timeInterview: '13:30:00 PM',
                fullName: 'Sophie Taylor',
                dateOfBirth: '19/04/2002',
                phoneNumber: '0376782533',
                position: 'Mobile Developer',
                school: 'International University',
                address: 'District 2',
                email: 'pqr@gmail.com',
                cv: 'https://example.com/cv6',
                comments: ['Shows initiative', 'Good problem-solver', 'Enthusiastic'],
                report: ['Shows initiative', 'Good problem-solver', 'Enthusiastic'],
                role: 'Leader',
                project: 'IoT Mobile App',
                groupZalo: 'Mobile Intern System',
                mentor: 'Frank White',
                status: 'In process',
                internshipContract: 'Signed',
            },
            {
                key: '7',
                internId: '#12345334',
                dateInterview: '8 Jan 2023',
                timeInterview: '11:15:00 AM',
                fullName: 'Daniel Kim',
                dateOfBirth: '30/06/2001',
                phoneNumber: '0376782534',
                position: 'DevOps Engineer',
                school: 'Ho Chi Minh City University of Technology',
                address: 'District 4',
                email: 'stu@gmail.com',
                cv: 'https://example.com/cv7',
                comments: ['Quick learner', 'Adaptable'],
                report: ['Quick learner', 'Adaptable'],
                role: 'Member',
                project: 'CI/CD Pipeline',
                groupZalo: 'DevOps Intern System',
                mentor: 'Grace Park',
                status: 'Completed OJT',
                internshipContract: 'Signed',
            },
            {
                key: '8',
                internId: '#12345335',
                dateInterview: '9 Jan 2023',
                timeInterview: '15:00:00 PM',
                fullName: 'Olivia Garcia',
                dateOfBirth: '22/02/2000',
                phoneNumber: '0376782535',
                position: 'QA Tester',
                school: 'RMIT University',
                address: 'District 7',
                email: 'vwx@gmail.com',
                cv: 'https://example.com/cv8',
                comments: ['Attention to detail', 'Thorough'],
                report: ['Attention to detail', 'Thorough'],
                role: 'Member',
                project: 'Automated Testing',
                groupZalo: 'QA Intern System',
                mentor: 'Henry Davis',
                status: 'In process',
                internshipContract: 'Not signed',
            },
            {
                key: '9',
                internId: '#12345336',
                dateInterview: '10 Jan 2023',
                timeInterview: '09:45:00 AM',
                fullName: 'Liam Nguyen',
                dateOfBirth: '14/10/2002',
                phoneNumber: '0376782536',
                position: 'Machine Learning Engineer',
                school: 'Vietnam National University',
                address: 'District 10',
                email: 'yza@gmail.com',
                cv: 'https://example.com/cv9',
                comments: ['Innovative thinker', 'Strong analytical skills', 'Fast learner'],
                report: ['Innovative thinker', 'Strong analytical skills', 'Fast learner'],
                role: 'Leader',
                project: 'AI Chatbot',
                groupZalo: 'AI Intern System',
                mentor: 'Isabella Tran',
                status: 'In process',
                internshipContract: 'Signed',
            },
            {
                key: '10',
                internId: '#12345337',
                dateInterview: '11 Jan 2023',
                timeInterview: '14:30:00 PM',
                fullName: 'Ava Pham',
                dateOfBirth: '08/12/2001',
                phoneNumber: '0376782537',
                position: 'Blockchain Developer',
                school: 'FPT University',
                address: 'District 6',
                email: 'bcd@gmail.com',
                cv: 'https://example.com/cv10',
                comments: ['Strong problem-solver', 'Innovative'],
                report: ['Strong problem-solver', 'Innovative'],
                role: 'Member',
                project: 'Decentralized App',
                groupZalo: 'Blockchain Intern System',
                mentor: 'Jack Robinson',
                status: 'Completed OJT',
                internshipContract: 'Signed',
            },
            {
                key: '11',
                internId: '#12345338',
                dateInterview: '12 Jan 2023',
                timeInterview: '10:00:00 AM',
                fullName: 'Noah Le',
                dateOfBirth: '25/05/2000',
                phoneNumber: '0376782538',
                position: 'Cloud Engineer',
                school: 'Ho Chi Minh City University of Science',
                address: 'District 8',
                email: 'efg@gmail.com',
                cv: 'https://example.com/cv11',
                comments: ['Adaptable team player', 'Good communication skills'],
                report: ['Adaptable team player', 'Good communication skills'],
                role: 'Member',
                project: 'Cloud Migration',
                groupZalo: 'Cloud Intern System',
                mentor: 'Sophia Hoang',
                status: 'In process',
                internshipContract: 'Not signed',
            },
            {
                key: '12',
                internId: '#12345339',
                dateInterview: '13 Jan 2023',
                timeInterview: '13:00:00 PM',
                fullName: 'Mia Tran',
                dateOfBirth: '03/09/2002',
                phoneNumber: '0376782539',
                position: 'Cybersecurity Analyst',
                school: 'International University',
                address: 'District 11',
                email: 'hij@gmail.com',
                cv: 'https://example.com/cv12',
                comments: ['Proactive learner', 'Detail-oriented', 'Strong work ethic'],
                report: ['Proactive learner', 'Detail-oriented', 'Strong work ethic'],
                role: 'Leader',
                project: 'Security Audit',
                groupZalo: 'Security Intern System',
                mentor: 'William Vo',
                status: 'In process',
                internshipContract: 'Signed',
            },
        ];
        setData(initialData);
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