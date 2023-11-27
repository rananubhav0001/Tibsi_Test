import React, { useState, useEffect } from "react";
import { Table, InputNumber, Row, Col, Button, Switch } from "antd";
import ReactApexChart from "react-apexcharts";
import jsonData from "./test.json";
import "./test.css";

const Test = () => {
  const [originalData, setOriginalData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [chartCategories, setChartCategories] = useState([]);
  // const [ setPieChartData] = useState([]);
  const [isBarChartVisible, setIsBarChartVisible] = useState(true);

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

    const pieChartData = transformedData.map(({ word, count }) => ({
      x: word,
      y: count,
    }));

    // setPieChartData(pieChartData);
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
          <Button
            type="primary"
            className="ml-5"
            onClick={() => handleReset(record.word)}
          >
            Reset
          </Button>
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
      type: "bar",
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
        <Col span={12}>
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={false}
            style={{ height: "550px", overflowY: "auto" }}
            className="custom-table"
          />
        </Col>
        <Col span={12}>
        <div>
        <Switch
            type="primary"
            onClick={() => setIsBarChartVisible((prev) => !prev)}
            style={{ marginTop: 10 }}
          >
            Toggle Chart
          </Switch>
        </div>
          <div >
            {isBarChartVisible ? (
              <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
              />
            ) : (
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
