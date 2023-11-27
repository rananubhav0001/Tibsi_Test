import React, { useState } from "react";
import { Button, Space, Table, Modal } from "antd";
import { CloseOutlined, EyeOutlined } from "@ant-design/icons";
import Chart from "react-apexcharts";

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
  const [chartOptions] = useState({
    options: {
      chart: {
        id: "basic-line",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 130, 150, 160],
      },
    ],
  });

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
            onClick={() => handleStartAnalysis(record)}
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
      <Table columns={columns} dataSource={data} />
      <Modal
        width={800}
        title="Analysis Modal"
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
        <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="line"
          height={350}
        />
      </Modal>
    </>
  );
};

export default ViewAudio;
