import React, { useState } from "react";
import {
  Button,
  Space,
  Table,
  Modal,
  Upload,
  Form,
  Select,
  Input,
} from "antd";
import { CloseOutlined, EyeOutlined, UploadOutlined } from "@ant-design/icons";
import { Option } from "antd/es/mentions";

const data = [
  {
    key: "1",
    name: "Ecology",
    age: "12/12/2023",
    address: "90 Kb",
    tags: "Uploaded Successfully",
  },
  {
    key: "2",
    name: "Neuroscience",
    age: "08/12/2023",
    address: "30 Kb",
    tags: "Uploaded Successfully",
  },
];

const ViewAudio = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [chartOptions] = useState({
  //   options: {
  //     chart: {
  //       id: "basic-line",
  //     },
  //     xaxis: {
  //       categories: [
  //         "Jan",
  //         "Feb",
  //         "Mar",
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sep",
  //         "Oct",
  //         "Nov",
  //         "Dec",
  //       ],
  //     },
  //   },
  //   series: [
  //     {
  //       name: "series-1",
  //       data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 130, 150, 160],
  //     },
  //   ],
  // });

  const handleStartAnalysis = (record) => {
    // Additional logic related to starting analysis
    // For now, just open the modal
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  //column
  const columns = [
    {
      title: "Audio File Category",
      dataIndex: "name",
      key: "name",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Upload Date",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Size",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            style={{ background: "green", color: "white" }}
            // onClick={() => handleStartAnalysis(record)}
          >
            Start Analysing
          </Button>
          <Button>
            <EyeOutlined />
          </Button>
          <Button>
            <CloseOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-end">
        <Button onClick={(record) => handleStartAnalysis(record)}>
          <UploadOutlined /> Upload Audio
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
      <Modal
        width={600}
        title="Upload Audio"
        open={isModalVisible}
        onCancel={handleModalCancel}
        footer={[
          <Button key="cancel" onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleModalCancel}>
            OK
          </Button>,
        ]}
      >
        {/* Modal content goes here */}
        {/* <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="line"
          height={350}
        /> */}

        <div className="flex justify-center ">
          {/* <Form
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
          </Form> */}
          <div>
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
            <Form.Item
              name="fileSize"
              label="Audio File Size"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="uploadNewAudio"
              label="Upload New Audio"
              rules={[{ required: true }]}
            >
              <Upload>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ViewAudio;
