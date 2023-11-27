import React from "react";
import { Form, Input, Row, Col, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const UploadAudio = () => {
  return (
    <div className="flex justify-center ">
      <Form
        layout="vertical"
        className="flex flex-col justify-center p-5 "
        style={{
          border: "1px solid #d9d9d9",
          width: "40%",
          borderRadius: "5px",
        }}
      >
        <Row gutter={10}>
          <Col span={24}>
            <Form.Item
              name="fileCategory"
              label="Audio File Category"
              rules={[{ required: true }]}
              initialValue="Select"
            >
              <Select>
                <Option value="ecology">Ecology</Option>
                <Option value="employee">Neuroscience</Option>
                <Option value="manager">Nature</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="fileSize"
              label="Audio File Size"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="uploadNewAudio"
              label="Upload New Audio"
              rules={[{ required: true }]}
            >
              <Upload>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <div className="flex justify-center">
          <Button className="mr-5">Cancel</Button>
          <Button type="primary">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default UploadAudio;
