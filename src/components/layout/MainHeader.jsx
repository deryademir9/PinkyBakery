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
      // backgroundColor: '#eb84b1',
      padding: 0, 
      //flexgrow: 1
    }} >  <Avatar size="large" style={{ margin: '10px 10px 10px 10px' , float: 'right'}} icon={<UserOutlined />} /></Header>
  </div>
  )
}

export default MainHeader