import React from 'react';

import {
    UserOutlined,
    } from '@ant-design/icons';
import {  Layout,Avatar } from 'antd';

import { Dropdown, Space } from 'antd';


const items = [
  {
    label: <a href="https://www.antgroup.com">Profil</a>,
    key: '0',
  }, {
    label: <a href="https://www.antgroup.com">Çıkış</a>,
    key: '0',
  },
 
];

const { Header } = Layout;
  

function MainHeader() {
  return (
    <div><Header
    className="site-layout-background"
    style={{
      // backgroundColor: '#eb84b1',
      padding: 0, 
      //flexgrow: 1
    }} >  
  <div  style={{ marginRight:'10px ' , float: 'right'}}> <Dropdown
 style={{float: 'right'}}
  menu={{
      items,
    }}
    trigger={['click']}
  >
    <a  onClick={(e) => e.preventDefault()  }>
      <Space  style={{  marginRight: '30px',float: 'right'}}>
       
      <UserOutlined />
      </Space>
    </a>
  </Dropdown> </div> 
 
  </Header>
  </div>
  )
}

export default MainHeader