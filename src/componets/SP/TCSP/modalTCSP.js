import  {React, useState,useRef,useEffect,selectedRecord } from 'react';
import { Form,Button, Modal,Input, InputNumber ,message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';




function ModalTCSP(props) {

  
  const [form] = Form.useForm();
  const frmSP = useRef();

  useEffect (()=> {

    if(props.action === "Sua"&&props.dataEdit.mSanPham){
      frmSP.current?.setFieldsValue({
        ...props.dataEdit,
      });
    }
    else {
        frmSP.current?.resetFields();
    }
  },[props.dataEdit]);

  async function onSave(){
    const dataSP = await frmSP.current?.validateFields();
    if(dataSP!=null){
        await props.save(dataSP);
    }
    await frmSP.current?.resetFields();
  }

    return (
        
        <>
<Modal
        open={props.visible}
        onOk={onSave}
        title={props.action === "Them" ? "Thêm sản phẩm":"Cập Nhật Thông Tin Sản Phẩm" }
        onCancel={props.onCancel}

        footer={[
          <Button key="back" onClick={props.hiddenModal}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" 
          onClick={onSave}
          >
            OK
          </Button>,
         
        ]}>

        <Form ref={frmSP}  layout="vertical" autoComplete="off">

        <Form.Item name="picture" label="Hình Ảnh">
        <Upload {...props}>
    <Button icon={<UploadOutlined />}>Tải Lên</Button>
  </Upload></Form.Item>
        <Form.Item name="mSanPham" label="Mã Sản Phẩm">
          <Input />
        </Form.Item>
        <Form.Item name="tenSP" label="Tên Sản Phẩm">
          <Input />
        </Form.Item>
        <Form.Item name="loaiSanPham" label="Loại Sản Phẩm">
          <Input />
        </Form.Item>

        <Form.Item name="donGia" label="Giá">
          <InputNumber />
        </Form.Item>
        <Form.Item name="soLuong" label="Số Lượng">
          <InputNumber />
        </Form.Item>
      </Form>
      </Modal>
      <></>
        </>
    );
}
export default ModalTCSP;