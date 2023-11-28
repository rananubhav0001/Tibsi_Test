
import React, { useState } from "react";
import {
  AudioOutlined,
  AuditOutlined,
  // DashboardOutlined,
  // FileOutlined,
  FolderViewOutlined,
  HighlightOutlined,
  // NotificationOutlined,
  UploadOutlined,
  // UserAddOutlined,
  // UserOutlined,
} from "@ant-design/icons";
import {  Layout, Menu,  theme } from "antd";
// import HomePage from "../pages/Homepage/Homepage";
import UploadAudio from "../pages/UploadAudio/UploadAudio";
import { CustomDateFormat } from "./CustomDate";
import ViewAudio from "../pages/ViewAudio/ViewAudio";
import ViewParameter from "../pages/ViewParameter/ViewParameter";
import Test from "../pages/Visualization/test";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

//ITEMS
const items = [
  // getItem("Dashboard", "dashboard", <DashboardOutlined />),
  // getItem("Manage User", "manageUsers", <UserOutlined />, [
  //   getItem("Add New User", "addNewUser", <UserAddOutlined />),
  // ]),
  getItem("Manage Visualisation", "manageVisualisation", <HighlightOutlined />),
  getItem("View Parameters", "viewParameters", <FolderViewOutlined />),
  getItem("Manage Audio", "manageAudioFile", <AuditOutlined />, [
    getItem("View Audio ", "viewAudioList", <AudioOutlined />),
    getItem("Upload Audio ", "uploadNewAudio", <UploadOutlined />),
  ]),
  // getItem("View Notifications", "viewNotification", <NotificationOutlined />),
  // getItem("Reports", "reports", <FileOutlined />),
];

const ProtectedPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("manageVisualisation");

  //HANDLE MENU CLICK
  const handleMenuClick = ({ key }) => {
    setSelectedMenuItem(key);
  };

  //GET CONTENT COMPONENT
  const getContentComponent = () => {
    switch (selectedMenuItem) {
      // case "dashboard":
      //   return (
      //     <div>
      //       <HomePage />
      //     </div>
      //   );
      // case "manageUsers":
      //   return <div>Content for Option 2</div>;
      // case "addNewUser":
      //   return <div>Content for addNewUser</div>;
      case "manageVisualisation":
        return <div><Test/></div>;
      case "viewAudioList":
        return (
          <div>
            <ViewAudio />
          </div>
        );
      case "uploadNewAudio":
        return (
          <div>
            <UploadAudio />
          </div>
        );
      case "viewParameters":
        return (
          <div>
            <ViewParameter />
          </div>
        );
      
      // case "viewNotification":
      //   return <div>Content for viewNotification</div>;
      // case "reports":
      //   return <div>Content for reports</div>;
      default:
        return <div>Select a menu item</div>;
    }
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["manageVisualisation"]}
            mode="inline"
            items={items}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout>
          <Header style={{ background: colorBgContainer }}>
            <div className="flex justify-between items-center ">
              {/* <div>
                <IdsLogo />
              </div> */}
              {/* <div className="flex justify-between items-center"> */}
              <div className="text-black">
                <h1 style={{ color: "rgb(0,33,64)" }}>DEMO</h1>
              </div>
              <div className="flex  items-center text-black    rounded">
                {/* <Badge
                  // count={
                  //   notifications.filter((notification) => !notification.read)
                  //     .length
                  // }
                  className="cursor-pointer"
                >
                  <Avatar
                    shape="circle"
                    size="medium"
                    icon={
                      <i className="ri-notification-line text-white rounded-full"></i>
                    }
                    onClick={() => {
                      // setShowNotifications(true);
                    }}
                  />
                </Badge> */}

                <span className="text-sm  text-black-400">
                  {CustomDateFormat(new Date())}
                </span>

                {/* --------------------- SARAL PORTAL LIKE PROFILE----------------------- */}
                {/* <div style={{ borderleft: "10px solid yellow" }}>
                  <Dropdown
                    placement="bottomRight"
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a>
                      <Space className="hover:bg-gray-200 cursor-pointer p-2 uppercase ">
                         {user?.profileImage ? (
                         <img
                      src={`./profileImages/${user.profileImage}`}
                      src={user.profileImage}
                      height="30px"
                      width="30px"
                      alt="Profile"
                      className="profile-image rounded-full"
                    /> 
                        ) : (
                        <Avatar size={30} icon={<UserOutlined />} />
                     
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </div> */}
              </div>
            </div>
          </Header>
          <Content style={{ margin: "10px 10px" }}>
            <div
              style={{
                padding: 14,
                minHeight: 590,
                background: colorBgContainer,
              }}
            >
              {getContentComponent()}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default ProtectedPage;
