import React from 'react';
import { Modal, Row, Col, Typography } from 'antd';
import PropTypes from 'prop-types';

const { Text } = Typography;

function ViewInternModal({ visible, onClose, intern }) {
    if (!intern) return null;

    const titleStyle = {
        fontSize: '40px',
        fontWeight: 'bold'
    };

    const infoBoxStyle = {
        height: '40px',
        borderRadius: '10px',
        border: '1px solid #d9d9d9',
        padding: '8px 12px 18px',
        display: 'flex',
        alignItems: 'center',
        marginTop: '8px'
    };

    const rowStyle = {
        marginTop: '32px'  // Doubled from 16px
    };

    const modalBodyStyle = {
        paddingBottom: '32px'  // Added extra padding at the bottom
    };

    return (
        <Modal
            title={<span style={titleStyle}>View details of Intern</span>}
            visible={visible}
            onCancel={onClose}
            footer={null}
            width={800}
            bodyStyle={modalBodyStyle}
        >
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Text strong>Intern ID</Text>
                    <div style={infoBoxStyle}>{intern.internId}</div>
                </Col>
                <Col span={8}>
                    <Text strong>Full Name</Text>
                    <div style={infoBoxStyle}>{intern.fullName}</div>
                </Col>
                <Col span={8}>
                    <Text strong>Phone Number</Text>
                    <div style={infoBoxStyle}>{intern.phoneNumber}</div>
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={rowStyle}>
                <Col span={8}>
                    <Text strong>Position</Text>
                    <div style={infoBoxStyle}>{intern.position}</div>
                </Col>
                <Col span={8}>
                    <Text strong>School</Text>
                    <div style={infoBoxStyle}>{intern.school}</div>
                </Col>
                <Col span={8}>
                    <Text strong>Address</Text>
                    <div style={infoBoxStyle}>{intern.address}</div>
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={rowStyle}>
                <Col span={8}>
                    <Text strong>Email</Text>
                    <div style={infoBoxStyle}>{intern.email}</div>
                </Col>
                <Col span={8}>
                    <Text strong>Link CV</Text>
                    <div style={infoBoxStyle}>
                        <a href={intern.cv} target="_blank" rel="noopener noreferrer">Link</a>
                    </div>
                </Col>
                <Col span={8}>
                    <Text strong>Mentor</Text>
                    <div style={infoBoxStyle}>{intern.mentor}</div>
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={rowStyle}>
                <Col span={8}>
                    <Text strong>Project</Text>
                    <div style={infoBoxStyle}>{intern.project}</div>
                </Col>
                <Col span={8}>
                    <Text strong>Group Zalo</Text>
                    <div style={infoBoxStyle}>{intern.groupZalo}</div>
                </Col>
                <Col span={8}>
                    <Text strong>Role</Text>
                    <div style={infoBoxStyle}>{intern.role}</div>
                </Col>
            </Row>
        </Modal>
    );
}

ViewInternModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    intern: PropTypes.object,
};

export default ViewInternModal;
