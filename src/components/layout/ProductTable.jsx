import React, { useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import { productstore } from "../../store/ProductStore";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { useEffect } from 'react';
const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const App = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  const columns = [{
    title: "Ürün Adı",
    dataIndex: "Ad",
    width: '25%',
    editable: true
  },
  {
    title: "Ürün Açıklaması",
    dataIndex: "Aciklama",
    width: '15%',
    editable: true

  },
  {
    title: "Ürün Fotoğrafı",
    dataIndex:"ResimUrl",
    width: '15%',
    editable: true
  },
  {
    title: "Fiyat",
    dataIndex: "Fiyat",         
    width: '15%',
     editable: true

  },
  {
    title: "Stok Bilgisi",
    dataIndex: "StokAdedi",
    width: '15%',
    editable: true

  },
  {
    title: "Kategori",
    dataIndex: "KategoriAd",
    width: '15%',
    editable: true

  },
  {
    title: "Ürün Durumu",
    dataIndex: "UrunDurumuID",
    width: '15%',
    editable: true

  },

    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  useEffect(()=>{
    productstore.fetchProductData()
  },[])

console.log(toJS(productstore.data));

  return (
    
    <Form form={form} component={false}> <h1>Ürün Tablosu</h1>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={productstore.data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
export default observer(App);





// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { Button, Form, Input, Popconfirm, Table } from 'antd';
// const EditableContext = React.createContext(null);
// const EditableRow = ({ index, ...props }) => {
//   const [form] = Form.useForm();
//   return (
//     <Form form={form} component={false}>
//       <EditableContext.Provider value={form}>
//         <tr {...props} />
//       </EditableContext.Provider>
//     </Form>
//   );
// };
// const EditableCell = ({
//   title,
//   editable,
//   children,
//   dataIndex,
//   record,
//   handleSave,
//   ...restProps
// }) => {
//   const [editing, setEditing] = useState(false);
//   const inputRef = useRef(null);
//   const form = useContext(EditableContext);
//   useEffect(() => {
//     if (editing) {
//       inputRef.current.focus();
//     }
//   }, [editing]);
//   const toggleEdit = () => {
//     setEditing(!editing);
//     form.setFieldsValue({
//       [dataIndex]: record[dataIndex],
//     });
//   };
//   const save = async () => {
//     try {
//       const values = await form.validateFields();
//       toggleEdit();
//       handleSave({
//         ...record,
//         ...values,
//       });
//     } catch (errInfo) {
//       console.log('Save failed:', errInfo);
//     }
//   };
//   let childNode = children;
//   if (editable) {
//     childNode = editing ? (
//       <Form.Item
//         style={{
//           margin: 0,
//         }}
//         name={dataIndex}
//         rules={[
//           {
//             required: true,
//             message: `${title} is required.`,
//           },
//         ]}
//       >
//         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
//       </Form.Item>
//     ) : (
//       <div
//         className="editable-cell-value-wrap"
//         style={{
//           paddingRight: 24,
//         }}
//         onClick={toggleEdit}
//       >
//         {children}
//       </div>
//     );
//   }
//   return <td {...restProps}>{childNode}</td>;
// };
// const App = () => {
//   const [dataSource, setDataSource] = useState([
//     {
//       key: '0',
//       name: 'Edward King 0',
//       age: '32',
//       address: 'London, Park Lane no. 0',
//     },
//     {
//       key: '1',
//       name: 'Edward King 1',
//       age: '32',
//       address: 'London, Park Lane no. 1',
//     },
//   ]);
//   const [count, setCount] = useState(2);
//   const handleDelete = (key) => {
//     const newData = dataSource.filter((item) => item.key !== key);
//     setDataSource(newData);
//   };
//   const defaultColumns = [
//     {
//       title: "Ürün Adı",
//       dataIndex: "name",
//       // width: '30%',
//       editable: true
//     },
//     {
//       title: "Ürün Açıklaması",
//       dataIndex: "address",
//       editable: true

//     },
//     {
//       title: "Ürün Fotoğrafı",
//       dataIndex: "address",
//       editable: true
//     },
//     {
//       title: "Fiyat",
//       dataIndex: "age",     
//        editable: true

//     },
//     {
//       title: "Stok Bilgisi",
//       dataIndex: "age",
//       editable: true

//     },
//     {
//       title: "Kategori",
//       dataIndex: "address",
//       editable: true

//     },
//     {
//       title: "Ürün Durumu",
//       dataIndex: "address",
//       editable: true

//     },
//   ];
//   const handleAdd = () => {
//     const newData = {
//       key: count,
//       name: `Düzenlemek için tıklayınız.`,
//       age: 'Düzenlemek için tıklayınız.',
//       address: `Düzenlemek için tıklayınız.`,
//     };
//     setDataSource([...dataSource, newData]);
//     setCount(count + 1);
//   };
//   const handleSave = (row) => {
//     const newData = [...dataSource];
//     const index = newData.findIndex((item) => row.key === item.key);
//     const item = newData[index];
//     newData.splice(index, 1, {
//       ...item,
//       ...row,
//     });
//     setDataSource(newData);
//   };
//   const components = {
//     body: {
//       row: EditableRow,
//       cell: EditableCell,
//     },
//   };
//   const columns = defaultColumns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         editable: col.editable,
//         dataIndex: col.dataIndex,
//         title: col.title,
//         handleSave,
//       }),
//     };
//   });
//   return (
//     <div>
//       <h1>Ürün Tablosu</h1>
//       <Button
//         onClick={handleAdd}
//         type="primary"
//         style={{
//           marginBottom: 16,
//         }}
//       >
//         Add a row
//       </Button>
//       <Table
//         components={components}
//         rowClassName={() => 'editable-row'}
//         bordered
//         dataSource={dataSource}
//         columns={columns}
//       />
//     </div>
//   );
// };
// export default App;