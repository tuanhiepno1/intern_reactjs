import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

Filter.propTypes = {
    data: PropTypes.array.isRequired,
};

function Filter({ data }) {
    // Extract unique values for dropdowns
    const uniqueValues = (key) => [...new Set(data.map(item => item[key]))];

    return (
        <div className="input-check" style={{ width: "1500px" }}>
            <div className="input-fields">
                <Row gutter={12}>
                    <Col span={8}>
                        <Form.Item name="internId">
                            <Input placeholder="Enter intern's ID" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="fullName">
                            <Input placeholder="Enter intern's Full name" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="dob">
                            <DatePicker placeholder="Enter intern's D.O.B" style={{ width: "100%" }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={12}>
                    <Col span={8}>
                        <Form.Item name="phoneNumber">
                            <Input placeholder="Enter intern's Phone number" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="address">
                            <Input placeholder="Enter intern's Address" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="email">
                            <Input placeholder="Enter intern's Email" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={12}>
                    <Col span={8}>
                        <Form.Item name="major">
                            <Input placeholder="Enter intern's Major" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="position">
                            <Select placeholder="Select intern's Position">
                                {uniqueValues('position').map(value => (
                                    <Select.Option key={value} value={value}>{value}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="school">
                            <Select placeholder="Select intern's School">
                                {uniqueValues('school').map(value => (
                                    <Select.Option key={value} value={value}>{value}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={12}>
                    <Col span={8}>
                        <Form.Item name="title">
                            <Input placeholder="Enter intern's Title" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="project">
                            <Select placeholder="Select intern's Project">
                                {uniqueValues('project').map(value => (
                                    <Select.Option key={value} value={value}>{value}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="group">
                            <Select placeholder="Select intern's Group">
                                {uniqueValues('groupZalo').map(value => (
                                    <Select.Option key={value} value={value}>{value}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </div>

            <div
                className="action-buttons"
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "12px",
                }}
            >
                <Button
                    icon={<FilterOutlined />}
                    style={{ height: "50px", width: "150px", borderRadius: "15px" }}
                >
                    Clean Filters
                </Button>
                <Button
                    type="primary"
                    icon={<SearchOutlined />}
                    htmlType="submit"
                    style={{ height: "50px", width: "150px", borderRadius: "15px" }}
                >
                    Search
                </Button>
            </div>
        </div>
    );
}

export default Filter;


