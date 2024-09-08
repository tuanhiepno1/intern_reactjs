import { Button, Input, Modal, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const { Text } = Typography;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 8px;
  }
  .ant-modal-header {
    border-bottom: none;
  }
  .ant-modal-footer {
    border-top: none;
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const ReportList = styled.div`
  margin-top: 16px;
`;

const SaveButton = styled(Button)`
  background-color: #7e3af2;
  border-color: #7e3af2;
  &:hover, &:focus {
    background-color: #6929c4;
    border-color: #6929c4;
  }
`;

const ReportProcessModal = ({ visible, onCancel, onSave, initialData }) => {
    const [formData, setFormData] = useState({
        position: '',
        project: '',
        mentor: '',
        reports: []
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                position: initialData.position || '',
                project: initialData.project || '',
                mentor: initialData.mentor || '',
                reports: Array.isArray(initialData.report) ? initialData.report : []
            });
        }
    }, [initialData]);

    const handleInputChange = (field, value) => {
        setFormData(prevData => ({ ...prevData, [field]: value }));
    };

    const handleAddReport = () => {
        setFormData(prevData => ({
            ...prevData,
            reports: [...prevData.reports, '']
        }));
    };

    const handleRemoveReport = (index) => {
        setFormData(prevData => ({
            ...prevData,
            reports: prevData.reports.filter((_, i) => i !== index)
        }));
    };

    const handleReportChange = (index, value) => {
        setFormData(prevData => ({
            ...prevData,
            reports: prevData.reports.map((report, i) => i === index ? value : report)
        }));
    };

    const handleSave = () => {
        onSave(formData);
    };

    return (
        <StyledModal
            title={<div style={{ fontSize: '24px', fontWeight: 'bold' }}>Report Process</div>}
            visible={visible}
            onCancel={onCancel}
            footer={[
                <SaveButton key="save" type="primary" onClick={handleSave}>
                    Save Changes
                </SaveButton>,
            ]}
        >

            <InputGroup>
                <div style={{ marginLeft: '50px' }}>
                    <Text strong>Position</Text>
                    <Input
                        placeholder="Position"
                        value={formData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                    />
                </div>
                <div style={{ marginLeft: '50px' }}>
                    <Text strong>Project</Text>
                    <Input
                        placeholder="Project"
                        value={formData.project}
                        onChange={(e) => handleInputChange('project', e.target.value)}
                    />
                </div>
                <div style={{ marginLeft: '50px' }}>
                    <Text strong>Mentor</Text>
                    <Input
                        placeholder="Mentor"
                        value={formData.mentor}
                        onChange={(e) => handleInputChange('mentor', e.target.value)}
                    />
                </div>
            </InputGroup>
            <h4>Reports</h4>
            <ReportList>
                <Input.TextArea
                    rows={5}
                    value={formData.reports.join('\n')}
                    onChange={(e) => {
                        const newReports = e.target.value.split('\n');
                        setFormData(prevData => ({
                            ...prevData,
                            reports: newReports
                        }));
                    }}
                    placeholder="Enter your reports here, one per line"
                />
            </ReportList>
        </StyledModal>
    );
};

export default ReportProcessModal;
