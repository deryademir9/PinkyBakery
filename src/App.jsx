import React from "react";
import "./style/index.sass";
import { Routes, Route } from "react-router-dom";
import OrderTable from "./components/layout/OrderTable";
import CategoryTable from "./components/layout/CategoryTable";
import ProductTable from "./components/layout/ProductTable";
//import ProductModal from "./components/layout/ProductModal";
import MainHeader from "./components/layout/MainHeader";
import { Layout, Modal } from "antd";
import Path from "./components/layout/Path";
const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Layout className="site-layout">
        <MainHeader />
        <>
        <Routes >
          <Route path="/" element={<Path />}>
            <Route index element={<OrderTable />} />
            <Route path="about" element={<CategoryTable />} />
            <Route path="product" element={<ProductTable />} />
            <Route path="*" element={<ProductTable />} />
          </Route>
        </Routes></>
      {/* <div style={{
              padding: 24,
              minHeight: 0,
            }} ></div> */}
        <Content
          style={{
            margin: "10px 16px",
          }}
        > 
          <div
            className="site-layout-background"
            style={{
              padding: 4,
              minHeight: 0,
            }}
          >
             {/* <ProductModal></ProductModal> */}
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

// dosya: store.js
//import { observable } from 'mobx';
// import axios from 'axios';

// const API_URL = 'http://localhost:3500/kategoriList';

// function MyStore() {
//  // @observable data = null;

//   // Veri çekme işlemi
//   const fetchData=()=> {
//     axios.get('http://localhost:3500/kategoriList').then(response => {
//       //this.data = response.data;
//       console.log(response.data)
//     }).catch(err => {
//         console.log(err)
//     });
//   }
//   return (
//     <><button onClick={fetchData}>sdggfg</button></>
//   );
// }

// //const store = new MyStore();

// export default MyStore;
