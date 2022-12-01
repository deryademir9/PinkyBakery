

//   import * as React from "react";
//    import { BrowserRouter, Routes, Route } from "react-router-dom";
//   import LeftSider from "./components/layout/LeftSider";
//    import Home from "./components/layout/Home";
//    import About from "./components/layout/About";
//    import NotFound from "./components/layout/NotFound";
//    import "./style/index.sass";
//    import { Layout , Menu} from 'antd';
//    import Tables from "./components/layout/Tables";
//    import {
//        PieChartOutlined,
//        UserOutlined,
//      } from '@ant-design/icons';
//    import { useState } from "react";

//    const { Header, Sider, Content } = Layout;

//    function getItem(label, key, icon, children) {
//     return {
//        key,
//       icon,
//        children,
//        label,
//      };
//    }
//    const items = [
//      getItem('Siparişler', '1', <PieChartOutlined />),
//      getItem('Ürünler', 'sub1', <UserOutlined />, [
//       getItem('Ürünler', '3'),
//       getItem('Bişey', '4'),
//      ]),
  
//    ];

//     function App() {

//        const [collapsed, setCollapsed] = useState(false);

//     return (

//           <Layout className="Layout">
//           <Header className="Header">
//             <h1><i>Pinky Bakery</i></h1>

//           </Header>
//           <Layout>
//               <Sider className="SideBar" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>  <Menu  defaultSelectedKeys={['1']} mode="inline" items={items} /> <BrowserRouter>
//               <Routes>
//                  <Route path="/" element={<LeftSider />}>
//                    <Route index element={<Home />} />
//                     <Route path="about" element={<About />} />
//                     <Route path="*" element={<NotFound/>} />
//                   </Route>
//                 </Routes>
//               </BrowserRouter> </Sider>
//               <Content className="Main"><Tables></Tables></Content>
//            </Layout>
//             {/* <Footer className="Footer">Footer</Footer> */}
//           </Layout>
//     );
//    }
//     export default App;






// import React from 'react';
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu } from 'antd';
// const { Header, Content, Sider } = Layout;

// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(2).fill(null).map((_, j) => {
//       const subKey = index * 2 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });
// const App = () => (
//   <Layout className='Layout'>
//     <Header className="Header">
//       <div className="logo" />
//       <Menu  mode="horizontal"  />
//     </Header>
//     <Layout>
//       <Sider width={200} className="site-layout-background">
//         <Menu
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           style={{
//             height: '100%',
//             borderRight: 0,
//           }}
//           items={items2}
//         />
//       </Sider>
//       <Layout
//         style={{
//           padding: '0 24px 24px',
//         }}
//       >
//         <Breadcrumb
//           style={{
//             margin: '16px 0',
//           }}
//         >
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb>
//         <Content
//           className="site-layout-background"
//           style={{
//             padding: 24,
//             margin: 0,
//             minHeight: 280,
//           }}
//         >
//           Content
//         </Content>
//       </Layout>
//     </Layout>
//   </Layout>
// );
// export default App;

// import React from "react";
// import {
//   LaptopOutlined,
//   NotificationOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { Breadcrumb, Layout, Menu } from "antd";
// const { Header, Content, Footer, Sider } = Layout;

// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);
//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
//       children: new Array(2).fill(null).map((_, j) => {
//         const subKey = index *2 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   }
// );
// const App = () => (
//   <Layout className="Layout">
//     <Header>
//       {/* <div className="logo" /> */}
//       <Menu className="Header" mode="horizontal">
//         <h1>
//           <i>Pinky Bakery</i>
//         </h1>
//       </Menu>
//     </Header>
//     <Content
//       style={{
//         padding: "0 50px",
//       }}
//     >
//       {/* <Breadcrumb
//         style={{
//           margin: "16px 0",
//         }}
//       >
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>List</Breadcrumb.Item>
//         <Breadcrumb.Item>App</Breadcrumb.Item>
//       </Breadcrumb> */}
//       <Layout
//         className="site-layout-background"
//         style={{
//           padding: "24px 0",
//         }}
//       >
//         <Sider className="site-layout-background" width={200}>
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={["1"]}
//             defaultOpenKeys={["sub1"]}
//             style={{
//               height: "100%",
//             }}
//             items={items2}
//           />
//         </Sider>
//         <Content
//           style={{
//             padding: "0 24px",
//             minHeight: 280,
//           }}
//         >
//           Content
//         </Content>
//       </Layout>
//     </Content>
//     <Footer
//       style={{
//         textAlign: "center",
//       }}
//     >
//       Ant Design ©2018 Created by Ant UED
//     </Footer>
//   </Layout>
// );
// export default App;
