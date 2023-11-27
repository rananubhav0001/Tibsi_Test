// import { Layout, Menu, theme } from "antd";
// import Sider from "antd/es/layout/Sider";
// import { Content } from "antd/es/layout/layout";
// import React from "react";
// import { PieChartOutlined, ProjectOutlined } from "@ant-design/icons";

// const ProtectedPage = ({ children }) => {

//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   //SIDEBAR ITEMS
//   const sidebarItems = [
//     {
//       key: "dashboard",
//       label: "Dashboard",
//       icon: <PieChartOutlined />,
//       // onClick: () => navigate("/dashboard"),
//     },
//     {
//       key: "manageUsers",
//       label: "Manage Users",
//       icon: <ProjectOutlined />,
//       // onClick: () => navigate("/projectTab"),
//       children: [
//         {
//           key: "addNewUser",
//           label: "Add New User",
//           // onClick: () => navigate("/allprojects"),
//         },

//       ].filter(Boolean),
//     },
//     {
//       key: "audioFile",
//       label: "Audio File",
//       icon: <ProjectOutlined />,
//       // onClick: () => navigate("/projectTab"),
//       children: [
//         {
//           key: "manageAudioFileList",
//           label: "Manage Audio File List",
//           // onClick: () => navigate("/allprojects"),
//         },
//         {
//           key: "uploadNewAudioFile",
//           label: "Upload New Audio File",
//           // onClick: () => navigate("/allprojects"),
//         },

//       ].filter(Boolean),
//     },
//     {
//       key: "viewParameter",
//       label: "View Parameter",
//       icon: <PieChartOutlined />,
//       // onClick: () => navigate("/dashboard"),
//     },
//     {
//       key: "manageVisualization",
//       label: "Manage Visualization",
//       icon: <PieChartOutlined />,
//       // onClick: () => navigate("/dashboard"),
//     },
//     {
//       key: "viewNotification",
//       label: "View My Notification",
//       icon: <PieChartOutlined />,
//       // onClick: () => navigate("/dashboard"),
//     },
//     {
//       key: "reports",
//       label: "Reports",
//       icon: <PieChartOutlined />,
//       // onClick: () => navigate("/dashboard"),
//     },
//   ];

//   return (
//     <div>
//       <div>
//         <Layout className="mysidebar">
//           <Sider
//             // style={{ background: colorBgContainer }}
//             collapsible
//             // collapsed={collapsed}
//             // onCollapse={(value) => setCollapsed(value)}
//           >
//             <div className="demo-logo-vertical bg-white" />
//             <Menu
//               //   style={{ background: colorBgContainer }}
//               theme="light"
//               mode="inline"
//               defaultSelectedKeys={["2"]}
//             >
//               {sidebarItems.map((item) =>
//                 item.children ? (
//                   <Menu.SubMenu
//                     key={item.key}
//                     title={
//                       <span>
//                         {item.icon}
//                         <span>{item.label}</span>
//                       </span>
//                     }
//                   >
//                     {item.children.map((subItem) => (
//                       <Menu.Item key={subItem.key} onClick={subItem.onClick}   style={{ lineHeight: "48px" }}>
//                         {subItem.label}
//                       </Menu.Item>
//                     ))}
//                   </Menu.SubMenu>
//                 ) : (
//                   <Menu.Item key={item.key} onClick={item.onClick}>
//                     {item.icon}
//                     <span>{item.label}</span>
//                   </Menu.Item>
//                 )
//               )}
//             </Menu>
//           </Sider>
//           <Layout>
//             <Content style={{ margin: "0 1%", marginTop: "1%" }}>
//               <div
//                 className="mycontent  border-rounded"
//                 style={{
//                   height: "87vh",
//                   //   background: colorBgContainer,
//                   borderRadius: "5px",
//                 }}
//               >
//                 {children}
//                 {/* <Test /> */}
//               </div>
//             </Content>
//           </Layout>
//         </Layout>
//       </div>
//     </div>
//   );
// };

// export default ProtectedPage;

// ....................................

import React, { useState } from "react";
import {
  AudioOutlined,
  AuditOutlined,
  DashboardOutlined,
  FileOutlined,
  FolderViewOutlined,
  HighlightOutlined,
  NotificationOutlined,
  UploadOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {  Layout, Menu,  theme } from "antd";
import HomePage from "../pages/Homepage/Homepage";
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
  getItem("Dashboard", "dashboard", <DashboardOutlined />),
  getItem("Manage User", "manageUsers", <UserOutlined />, [
    getItem("Add New User", "addNewUser", <UserAddOutlined />),
  ]),
  getItem("Manage Audio", "manageAudioFile", <AuditOutlined />, [
    getItem("View Audio ", "viewAudioList", <AudioOutlined />),
    getItem("Upload Audio ", "uploadNewAudio", <UploadOutlined />),
  ]),
  getItem("View Parameters", "viewParameters", <FolderViewOutlined />),
  getItem("Manage Visualisation", "manageVisualisation", <HighlightOutlined />),
  getItem("View Notifications", "viewNotification", <NotificationOutlined />),
  getItem("Reports", "reports", <FileOutlined />),
];

const ProtectedPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");

  //HANDLE MENU CLICK
  const handleMenuClick = ({ key }) => {
    setSelectedMenuItem(key);
  };

  //GET CONTENT COMPONENT
  const getContentComponent = () => {
    switch (selectedMenuItem) {
      case "dashboard":
        return (
          <div>
            <HomePage />
          </div>
        );
      case "manageUsers":
        return <div>Content for Option 2</div>;
      case "addNewUser":
        return <div>Content for addNewUser</div>;

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
      case "manageVisualisation":
        return <div><Test/></div>;
      case "viewNotification":
        return <div>Content for viewNotification</div>;
      case "reports":
        return <div>Content for reports</div>;
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
            defaultSelectedKeys={["dashboard"]}
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
                <h1 style={{ color: "rgb(0,33,64)" }}>TIBSI</h1>
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
