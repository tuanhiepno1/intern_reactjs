import React from 'react';
import { Modal, Form, Select, Input, Button } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
  }
  .ant-modal-header {
    border-radius: 20px 20px 0 0;
  }
  .ant-modal-body {
    padding: 24px;
  }
  .ant-modal-footer {
    border-top: none;
    padding: 0 24px 24px;
  }
`;

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px;
  }
`;

const StyledButton = styled(Button)`
  background-color: #7E3AF2;
  border-color: #7E3AF2;
  border-radius: 8px;
  height: 40px;
  width: 100%;
  &:hover, &:focus {
    background-color: #6C2BD9;
    border-color: #6C2BD9;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

function CreateGroupModal({ visible, onCancel, selectedRows }) {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields().then(values => {
            console.log('Form values:', values);
            // Xử lý logic tạo nhóm ở đây
            onCancel();
        }).catch(info => {
            console.log('Validate Failed:', info);
        });
    };

    return (
        <StyledModal
            visible={visible}
            title="Create Group"
            onCancel={onCancel}
            footer={null}
            width={1000}
        >
            <StyledForm form={form} layout="vertical">
                <FormRow>
                    <Form.Item name="role" label="Role" rules={[{ required: true }]} style={{ flex: 1 }}>
                        <Select placeholder="Mentor/Leader/Intern">
                            <Option value="mentor">Mentor</Option>
                            <Option value="leader">Leader</Option>
                            <Option value="intern">Intern</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="project" label="Project" rules={[{ required: true }]} style={{ flex: 1 }}>
                        <Select placeholder="Intern System">
                            <Option value="internSystem">Intern System</Option>
                        </Select>
                    </Form.Item>
                </FormRow>
                <FormRow>
                    <Form.Item name="groupZalo" label="Group Zalo" rules={[{ required: true }]} style={{ flex: 1 }}>
                        <Input placeholder="FE Intern System" />
                    </Form.Item>
                </FormRow>
                <Form.Item name="mentor" label="Mentor" rules={[{ required: true }]}>
                    <Input placeholder="Esther Eden" />
                </Form.Item>
                <Form.Item>
                    <StyledButton type="primary" onClick={handleOk}>
                        Create Group
                    </StyledButton>
                </Form.Item>
            </StyledForm>
        </StyledModal>
    );
}

export default CreateGroupModal;