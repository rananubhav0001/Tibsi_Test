import React, { useState, useEffect } from "react";
import { Table, InputNumber, Row, Col } from "antd";
import ReactApexChart from "react-apexcharts";
import jsonData from "./test.json";
import "./test.css";
import { BarChartOutlined, PieChartOutlined, UndoOutlined } from "@ant-design/icons";

const Test = () => {
  const [originalData, setOriginalData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [chartCategories, setChartCategories] = useState([]);
  // const [isBarChartVisible, setIsBarChartVisible] = useState(true);
  const [selectedChartType, setSelectedChartType] = useState("bar");

  useEffect(() => {
    const transformedData = Object.entries(jsonData)
      .filter(([word, count]) => count > 0)
      .map(([word, count], index) => ({
        key: index,
        word,
        count,
      }));

    console.log(transformedData, "transformedData");

    setOriginalData(jsonData);
    setTableData(transformedData);
    setChartCategories(
      Object.keys(jsonData).filter((word) => jsonData[word] > 0)
    );
  }, []);

  const columns = [
    {
      title: "Spatial Terms",
      dataIndex: "word",
    },
    {
      title: "Token Count",
      dataIndex: "count",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <InputNumber
            value={text}
            onChange={(value) => handleCountChange(record.word, value)}
          />
          
          <UndoOutlined
            className="ml-5"
            onClick={() => handleReset(record.word)}
            title="Reset"
          />
        </div>
      ),
    },
  ];

  const handleCountChange = (word, value) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.word === word ? { ...item, count: value } : item
      )
    );

    if (value > 0 && !chartCategories.includes(word)) {
      setChartCategories((prevCategories) => [...prevCategories, word]);
    } else if (value === 0) {
      setChartCategories((prevCategories) =>
        prevCategories.filter((category) => category !== word)
      );
    }
  };

  const handleReset = (word) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.word === word ? { ...item, count: originalData[word] } : item
      )
    );
  };

  const options = {
    chart: {
      type: selectedChartType,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: chartCategories,
      labels: {
        rotate: -90,
      },
    },
  };

  const series = [
    {
      name: "Word Count",
      data: tableData.map((item) => item.count),
    },
  ];

  const pieChartOptions = {
    labels: chartCategories,
  };

  const pieChartSeries = tableData.map(({ count }) => count);

  return (
    <div>
      <Row>
        <Col span={8}>
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={false}
            style={{ height: "550px", overflowY: "auto" }}
            className="custom-table"
          />
        </Col>
        <Col span={16}>
          <div className="m-5">
            <BarChartOutlined
              className={
                selectedChartType === "bar" ? "icon-selected" : "icon-default"
              }
              onClick={() => setSelectedChartType("bar")}
              title="Bar Chart"
            />

            <PieChartOutlined
              style={{ marginLeft: "5px" }}
              className={
                selectedChartType === "donut" ? "icon-selected" : "icon-default"
              }
              onClick={() => setSelectedChartType("donut")}
              title="Pie Chart"
            />
          </div>
          <div>
            {selectedChartType === "bar" && (
              <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
              />
            )}
            {selectedChartType === "donut" && (
              <ReactApexChart
                options={pieChartOptions}
                series={pieChartSeries}
                type="donut"
                height={350}
              />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Test;
