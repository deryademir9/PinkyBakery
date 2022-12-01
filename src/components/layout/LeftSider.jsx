import React, { useState } from "react";
//  import { BrowserRouter, Routes, Route } from "react-router-dom";
// import OrderTable from "./OrderTable";
// import CategoryTable from "./CategoryTable";
// import ProductTable from "./ProductTable";
// import Path from './Path';

import { ShoppingOutlined, ReadOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Siparişler", "1", <ShoppingOutlined />),
  getItem("ürünler", "sub1", <ReadOutlined />, [
    getItem("ürün ekle", "3"),
    getItem("kategori ekle", "4"),
  ]),
];

function LeftSider() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Sider
        className="sider"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          className="menu"
          theme="dark"
          style={{
            // backgroundColor: '#eb84b1',
            minHeight: "170vh",
          }}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        >
          {" "}
          {/*<BrowserRouter>
        <Routes>
           <Route path="/" element={<Path />}>
             <Route index element={<OrderTable />} />
              <Route path="about" element={<CategoryTable />} />
              <Route path="product" element={<ProductTable/>} />
              <Route path="*" element={<ProductTable/>} />

            </Route>
          </Routes>
        </BrowserRouter>*/}
        </Menu>
      </Sider>
    </div>
  );
}

export default LeftSider;

// import React from "react";
// import {  Outlet, Link } from "react-router-dom";

// function Layout() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           {/* <li> */}
//             {/* <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li> */}
//           {/* <li>
//             <Link to="*">NotFound</Link>
//           </li> */}

//         </ul>
//       </nav>

//       {/* <Outlet /> */}
//     </div>
//   );
// }

// export default Layout;
