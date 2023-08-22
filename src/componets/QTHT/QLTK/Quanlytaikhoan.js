import React from 'react';
import { Cascader,Image ,Button, Layout,Table ,Switch,Input } from "antd";
import {
  
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,EyeOutlined,UndoOutlined
} from "@ant-design/icons";
import axios from "axios";
const { Search } = Input;
const {  Content } = Layout;
//
const onChange1 = (checked) => {
  console.log(`switch to ${checked}`);
};
//

const onSearch = (value) => console.log(value);
function Quanlytaikhoan(props) {
   const data = [
    {
      key: '1',
      TenHienThi: 'Quyên ngu',
      SoDienThoai: 32,
      MatKhau: 'Quyên ngu',
      Vaitro: 'Người bán',
      
      
    },
    {
      key: '2',
      TenHienThi: 'Quyên ngu',
      SoDienThoai: 32,
      MatKhau: 'Quyên ngu',
      Vaitro: 'Người bán',
      
      
    },

    {
      key: '3',
      TenHienThi: 'Quyên ngu',
      SoDienThoai: 32,
      MatKhau: 'Quyên ngu',
      Vaitro: 'Người bán',
      

    },
    {
      key: '4',
      TenHienThi: 'Quyên ngu',
      SoDienThoai: 32,
      MatKhau: 'Quyên ngu',
      Vaitro: 'Người quản trị',
      
    },
  ];
  
  const columns = [
    {
      title: 'STT',
      render: (_,record,TCSP)=> TCSP+1,align: 'center',
    },
    {
      title: 'Tên hiển thị',
      dataIndex: 'TenHienThi',
      key: 'TenHienThi',
      align: 'center',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'SoDienThoai',
      key: 'SoDienThoai',align: 'center',
    },
    {
      title: 'Mật khẩu',
      dataIndex: 'MatKhau',
      key: 'MatKhau',align: 'center',
    },
    {
      title: 'Vai trò',
      dataIndex: 'Vaitro',
      key: 'Vaitro',
      align: 'center',
      filters: [
        {
          text: 'Người quản trị',
          value: 'Người quản trị',
        },
        {
          text: 'Người bán',
          value: 'Người bán',
        },
      ],
      onFilter: (value, record) => record.Vaitro.indexOf(value) === 0,
    },
    



    {
      title: 'Hoạt động',
      dataIndex: 'HoatDong', render:  renderBattat,
      key: 'HoatDong',align: 'center',
    },
    {
      title: 'Thao Tác',
      dataIndex: 'Thaotac',
      key: 'Thaotac',align: 'center',
      render:  renderThaoTac,
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('1', pagination, filters, sorter, extra);
  };

  function renderBattat(record){
    return(
      <>
        <Switch defaultChecked onChange1={onChange1}/>
      </>
    );

}
  function renderThaoTac(record){
      return(
        <>
          <EditOutlined style={{fontSize: "18px", cursor: "pointer",marginRight:"21px",color: "#1677ff" }}/>
          <DeleteOutlined
            style={{fontSize: "18px", cursor: "pointer",marginRight:"21px",color: "#1677ff"}}
             
            />
          <UndoOutlined style={{fontSize: "18px", cursor: "pointer",color: "#1677ff"}}/>
        </>
      );

  }
    return (
        <div>
       <Content
            style={{
              padding: 24,
              marginTop: 2 ,
              minHeight: 1000,
              background: "#ffff",
              
            }}
          >
          
               <Search placeholder="Tìm kiếm theo hiển thị" onSearch={onSearch} enterButton style={{width: 300,
        float: 'right',}}/>
               <Button type='primary' style={{marginBottom:"5px" }}><PlusOutlined />Tạo mới người dùng</Button>
          <Table dataSource={data} columns={columns} onChange={onChange} bordered  />;
          </Content>
          </div> 
    );
}

export default Quanlytaikhoan;