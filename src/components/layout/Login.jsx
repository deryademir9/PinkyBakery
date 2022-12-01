import React from "react";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
const App = () => (
  <>
    <Input
      placeholder="Kullanıcı Adı Giriniz."
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined
            style={{
              color: "rgba(0,0,0,.45)"
            }}
          />
        </Tooltip>
      }
    />
    <br />
    <br />
    <Input placeholder="Şifre Giriniz." suffix="" />
    <br />
    <br />
    <button> Giriş Yapınız </button>
  </>
);
export default App;