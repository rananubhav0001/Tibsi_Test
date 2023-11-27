import { Card, Statistic, Avatar, theme } from "antd";
import {
  DollarCircleOutlined,
  SubnodeOutlined,
  LineChartOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import ReactApexChart from "react-apexcharts";
// import TestPage from "../TestPage";

const { Meta } = Card;

const HomePage = () => {
  //OPTIONS
  const options = {
    chart: {
      id: "basic-bar",
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
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
  };

  //SERIES
  const series = [
    {
      name: "Total",
      data: Array.from(
        { length: 12 },
        () => Math.floor(Math.random() * 5000) + 1000
      ),
    },
  ];

  //USERDATA
  const userData = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
      avatarSrc: "/avatars/01.png",
      fallbackText: "OM",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "+$39.00",
      avatarSrc: "/avatars/02.png",
      fallbackText: "JL",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+$299.00",
      avatarSrc: "/avatars/03.png",
      fallbackText: "IN",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      amount: "+$99.00",
      avatarSrc: "/avatars/04.png",
      fallbackText: "WK",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "+$39.00",
      avatarSrc: "/avatars/05.png",
      fallbackText: "SD",
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div style={{ height: "100%", overflowY: "auto", padding: "1rem" }}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        <Card style={{ background: "rgb(245,245,245)" }}>
          <Meta
            avatar={<DollarCircleOutlined />}
            title="Total Revenue"
            description={
              <div>
                <Statistic
                  className="text-rdt_primary"
                  value={45231.89}
                  precision={2}
                  prefix="$"
                  valueStyle={{ fontSize: "24px", fontWeight: "bold" }}
                />
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </div>
            }
          />
        </Card>
        <Card style={{ background: "rgb(245,245,245)" }}>
          <Meta
            avatar={<SubnodeOutlined />}
            title="Subscriptions"
            description={
              <div>
                <Statistic
                  value={2350}
                  valueStyle={{ fontSize: "24px", fontWeight: "bold" }}
                />
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </div>
            }
          />
        </Card>
        <Card style={{ background: "rgb(245,245,245)" }}>
          <Meta
            avatar={<LineChartOutlined />}
            title="Sales"
            description={
              <div>
                <Statistic
                  value={12234}
                  valueStyle={{ fontSize: "24px", fontWeight: "bold" }}
                />
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </div>
            }
          />
        </Card>
        <Card style={{ background: "rgb(245,245,245)" }}>
          <Meta
            avatar={<UsergroupAddOutlined />}
            title="Active Now"
            description={
              <div>
                <Statistic
                  value={573}
                  valueStyle={{ fontSize: "24px", fontWeight: "bold" }}
                />
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </div>
            }
          />
        </Card>
      </div>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-7 mt-2">
        <Card className="col-span-4">
          <Meta />
          <div>
            <Card title="Overview">
              <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
              />
            </Card>
          </div>
        </Card>
        <Card className="col-span-3">
          <Meta
            title="Recent Sales"
            description="You made 265 sales this month."
          />
          <div className="space-y-8">
            {userData.map((user, index) => (
              <div className="flex items-center" key={index}>
                <Avatar src={user.avatarSrc} size={64}>
                  {user.fallbackText}
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <div className="ml-auto font-medium">{user.amount}</div>
              </div>
            ))}
          </div>
        </Card>
        {/* <TestPage/> */}
      </div>
    </div>
  );
};

export default HomePage;
