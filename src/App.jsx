import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tables from "./components/layout/OrderTable";
import LeftSider from "./components/layout/LeftSider";
import MainHeader from './components/layout/MainHeader';
import {  Layout} from 'antd';
  const {  Content, Footer } = Layout;
 
 
const App = () => {
  return (
    <Layout>
        < LeftSider/>
        <Layout className="site-layout">
          <MainHeader/>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
        
            <div
              className="site-layout-background"
              style={{
               padding: 24,
                minHeight: 360,
              }}
           >
              <Tables></Tables>
            </div>
          </Content>
          <Footer
            style={{
             textAlign: 'center',
           }}
          >
            <i>Pinky Bakery</i> ©2022 
          </Footer>
        </Layout>
      </Layout>
    );
  };
  export default App;
