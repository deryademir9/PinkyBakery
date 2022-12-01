import React from 'react';

import {
    UserOutlined,
    } from '@ant-design/icons';
import {  Layout,Avatar } from 'antd';
const { Header } = Layout;
  

function MainHeader() {
  return (
    <div><Header
    className="site-layout-background"
    style={{
      padding: 0, 
      //flexgrow: 1
    }} >  <Avatar size="large" style={{display: 'flex', margin: '18px' , float: 'right'}} icon={<UserOutlined />} /></Header>
  </div>
  )
}

export default MainHeader