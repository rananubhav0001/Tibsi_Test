import React, { useState } from 'react';
import {  Row, Col, Table, InputNumber } from 'antd';
import ReactApexChart from 'react-apexcharts';

const Test = () => {


  const [wordCounts, setWordCounts] = useState({
    hello: 0,
    hi: 0,
    word1: 0,
    word2: 0,
    word3: 0,
  });

  const [chartCategories, setChartCategories] = useState([]);

  const columns = [
    {
      title: 'Word',
      dataIndex: 'word',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      render: (text, record) => (
        <InputNumber
          value={text}
          onChange={(value) => handleCountChange(record.word, value)}
        />
      ),
    },
  ];

  const data = [
    { key: 'hello', word: 'hello', count: wordCounts.hello },
    { key: 'hi', word: 'hi', count: wordCounts.hi },
    { key: 'word1', word: 'word1', count: wordCounts.word1 },
    { key: 'word2', word: 'word2', count: wordCounts.word2 },
    { key: 'word3', word: 'word3', count: wordCounts.word3 },
  ];

  const handleCountChange = (word, value) => {
    setWordCounts((prevCounts) => ({
      ...prevCounts,
      [word]: value || 0,
    }));

    // Update chart categories when a number is added
    if (value > 0 && !chartCategories.includes(word)) {
      setChartCategories((prevCategories) => [...prevCategories, word]);
    }
  };

  const options = {
    chart: {
      type: 'bar',
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
    },
  };

  const series = [
    {
      name: 'Word Count',
      data: [
        wordCounts.hello,
        wordCounts.hi,
        wordCounts.word1,
        wordCounts.word2,
        wordCounts.word3,
      ],
    },
  ];

  return (
    <div>
      <Row>
        <Col span={12}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Col>
        <Col span={12}>
          <ReactApexChart options={options} series={series} type="bar" height={350} />
        </Col>
      </Row>
    </div>
  );
};

export default Test;
