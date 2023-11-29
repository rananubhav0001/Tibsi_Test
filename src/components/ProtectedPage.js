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
  // AudioOutlined,
  AuditOutlined,
  // DashboardOutlined,
  // FileOutlined,
  // FolderViewOutlined,
  HighlightOutlined,
  // NotificationOutlined,
  // UploadOutlined,
  // UserOutlined,
  // UserAddOutlined,
  // UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
// import HomePage from "../pages/Homepage/Homepage";
import UploadAudio from "../pages/UploadAudio/UploadAudio";
import { CustomDateFormat } from "./CustomDate";
import ViewAudio from "../pages/ViewAudio/ViewAudio";
import ViewParameter from "../pages/ViewParameter/ViewParameter";
import Test from "../pages/Visualization/test";
import ViewTest from "../pages/ViewAudio/Test";

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
 
  getItem("Manage Audio", "viewAudioList", <AuditOutlined />),
  //  [
  //   getItem("View Audio ", "viewAudioList", <AudioOutlined />),
  //   getItem("Upload Audio ", "uploadNewAudio", <UploadOutlined />),
  // ]),
  // getItem("View Parameters", "viewParameters", <FolderViewOutlined />),
  getItem("Manage Visualisation", "manageVisualisation", <HighlightOutlined />),
  // getItem("Manage Audio-1", "manageUsers", <UserOutlined />),
 
];

const ProtectedPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    "manageVisualisation"
  );

  //HANDLE MENU CLICK
  const handleMenuClick = ({ key }) => {
    setSelectedMenuItem(key);
  };

  //GET CONTENT COMPONENT
  const getContentComponent = () => {
    switch (selectedMenuItem) {
      case "manageUsers":
        return (
          <div>
            {" "}
            <ViewTest />
          </div>
        );

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
        return (
          <div>
            <Test />
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
              
              <div className="text-black">
                <h1 style={{ color: "rgb(0,33,64)" }}>DEMO</h1>
              </div>
              <div className="flex  items-center text-black    rounded">
               
                <span className="text-sm  text-black-400">
                  {CustomDateFormat(new Date())}
                </span>

               
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
