import React, { useState } from "react";
import "./index.css";
import { Button, Modal } from "antd";
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Yeni Ürün Ekle
      </Button>
      <Modal
        title="Modal"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
      >
        <input />
        <p>ürün adı</p>
        <input />
        <p>ürün açıklaması</p>
        <input />
        <p>ürün fotoğrafı</p>
        <input />
        <p>fiyat</p>
        <input />
        <p>stok</p>
        <input />
        <p>kategori</p>
        <input />
        <p>ürün durumu</p>
      </Modal>
    </>
  );
};
export default App;