import React from 'react';
import { Form,Button, Modal,Input, InputNumber ,message, Upload,Layout } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
const {  Content } = Layout;


function TM(props) {

    const [form] = Form.useForm();
    return (
        <div>
            <Content
            style={{
              padding: 10,
              marginTop: 2 ,
              minHeight: 1000,
              background: "#ffff",
            }}
          >

          <Content
          style={{
            borderRadius: '8px 8px 0 0',
            background: "#F5F5F5",
            border: '1px solid #f0f0f0',
            height: 55,
            fontWeight: 'bold',
            padding: '16px 25px',
            }}>Thêm mới sản phẩm</Content>
          <Content
          style={{
              padding: 24,
              background: "#ffff",
              border: '1px solid #f0f0f0',
              borderRadius: ' 0 0 8px 8px',
            }}> 
                <Form form={form} layout="vertical" autoComplete="off">
            <Form.Item name="HinhAnh" label="Hình Ảnh">
            <Upload {...props}>
            <Button icon={<UploadOutlined />}>Tải Lên</Button>
            </Upload></Form.Item>
            <Form.Item name="MaSanPham" label="Mã Sản Phẩm">
            <Input />
            </Form.Item>
            <Form.Item name="TenSanPham" label="Tên Sản Phẩm">
            <Input />
            </Form.Item>

            <Form.Item name="LoaiSanPham" label="Loại Sản Phẩm">
            <Input />
            </Form.Item>

            <Form.Item name="gia" label="Giá">
            <Input />
            </Form.Item>
            <Form.Item name="soluong" label="Số Lượng">
            <Input />
            </Form.Item>
            </Form>
            <Button type='primary'  style={{marginBottom:"5px"}}>Thêm Mới</Button>
            </Content>
            
          </Content>
        </div>
    );
}

export default TM;