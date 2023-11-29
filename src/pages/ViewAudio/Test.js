
import React, { useState } from "react";
import { Button, Space, Modal, Dropdown, Menu, Upload, Form, Input, Select } from "antd";
import {  DownOutlined, UploadOutlined } from "@ant-design/icons";
// import Chart from "react-apexcharts";
import { Option } from "antd/es/mentions";

// const data = [
//   {
//     key: "1",
//     name: "Ecology",
//     age: "12/12/2023",
//     address: "90 Kb",
//     tags: "Uploaded Successfully",
//   },
//   {
//     key: "2",
//     name: "Neuroscience",
//     age: "08/12/2023",
//     address: "30 Kb",
//     tags: "Uploaded Successfully",
//   },
// ];

const ViewTest = () => {
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
  // const columns = [
  //   {
  //     title: "Audio File Category",
  //     dataIndex: "name",
  //     key: "name",
  //     render: (text) => <div>{text}</div>,
  //   },
  //   {
  //     title: "Upload Date",
  //     dataIndex: "age",
  //     key: "age",
  //   },
  //   {
  //     title: "Size",
  //     dataIndex: "address",
  //     key: "address",
  //   },
  //   {
  //     title: "Status",
  //     key: "tags",
  //     dataIndex: "tags",
  //   },
  //   {
  //     title: "Action",
  //     key: "action",
  //     render: (_, record) => (
  //       <Space size="middle">
  //         <Button
  //           style={{ background: "green", color: "white" }}
  //           onClick={() => handleStartAnalysis(record)}
  //         >
  //           Start Analysing
  //         </Button>
  //         {/* <Button>
  //           <EyeOutlined />
  //         </Button> */}

  //         <Button>
  //           <CloseOutlined />
  //         </Button>
  //       </Space>
  //     ),
  //   },
  // ];



  const options1 =[
      {
        label: "Environment",
        key: "0",
      },
      {
        label: "Water scarcity",
        key: "1",
      },
  
      {
        label: "Biodiversity",
        key: "3",
      },
      {
        label: "Ecosystem dynamics",
        key: "4",
      },
      {
        label: "Rainwater Harvesting",
        key: "5",
      },
      {
        label: "Psychological well-being",
        key: "6",
      },
    ];

  // Dropdown options for the second dropdown
  const options2 = [
      {
        label: "Professor of energy transformation",
        key: "0",
      },
      {
        label: "Professor of digital technology",
        key: "1",
      },
  
      {
        label: "Professor of ecology",
        key: "3",
      },
      {
        label: "Professor of urbanism",
        key: "4",
      },
      {
        label: "Professor of neuroscience",
        key: "5",
      },
      {
        label: "Professor of Economics",
        key: "6",
      },
      {
        label: "Professor of human geography",
        key: "7",
      },
    ];

  return (
    <>
      {/* <Table columns={columns} dataSource={data} /> */}
      
      
      <div className="flex ">

      <div>
      {/* First Dropdown */}
      <Dropdown
      
      className="mr-10"
        overlay={
          <Menu>
            {options1.map((option) => (
              <Menu.Item key={option.key}>{option.label}</Menu.Item>
            ))}
          </Menu>
        }
        trigger={["click"]}
      >
        <span style={{color:"blue"}} className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <Space>
             TOPICS <DownOutlined />
          </Space>
        </span>
      </Dropdown>

      {/* Second Dropdown */}
      <Dropdown
      className="mr-10"
        overlay={
          <Menu>
            {options2.map((option) => (
              <Menu.Item key={option.key}>{option.label}</Menu.Item>
            ))}
          </Menu>
        }
        trigger={["click"]}
      >
        <span  className="ant-dropdown-link" style={{color:"blue"}} onClick={(e) => e.preventDefault()}>
          <Space>
            PARTICIPANTS <DownOutlined />
          </Space>
        </span>
      </Dropdown>
      <Button onClick={(record) => handleStartAnalysis(record)} >
          <UploadOutlined /> Upload Audio
        </Button>

        <Button type="primary" style={{marginLeft:"42rem"}}>
          Live
        </Button>
      
    </div>
      </div>
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

export default ViewTest;
