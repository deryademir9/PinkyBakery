import React from "react";
import "./style/index.sass";
import { Routes, Route } from "react-router-dom";
import OrderTable from "./components/layout/OrderTable";
import CategoryTable from "./components/layout/CategoryTable";
import ProductTable from "./components/layout/ProductTable";
import LeftSider from "./components/layout/LeftSider";
import MainHeader from "./components/layout/MainHeader";
import { Layout } from "antd";
import Path from "./components/layout/Path";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <LeftSider />
      <Layout className="site-layout">
        <MainHeader />
        <Routes>
          <Route path="/" element={<Path />}>
            <Route index element={<OrderTable />} />
            <Route path="about" element={<CategoryTable />} />
            <Route path="product" element={<ProductTable />} />
            <Route path="*" element={<ProductTable />} />
          </Route>
        </Routes>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <></>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©2022 <i>Pinky Bakery</i>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
