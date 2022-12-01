import React, { useState } from "react";
import "./index.css";
import { Button, Modal } from "antd";
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Yeni Kategori Ekle
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
        <p>Kategori adı</p>
        </Modal>
    </>
  );
};
export default App;