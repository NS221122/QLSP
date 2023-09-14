import React, { useState } from "react";
import { Menu, Dropdown, Avatar, Modal, Form, Input, Button } from "antd";
import { UserOutlined, LogoutOutlined, KeyOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
function Dangxuat(props) {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOut = () => {
    navigate("/login");
  };
  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
  };

    const UserMenu = (
        <Menu>
          <Menu.Item icon={<KeyOutlined />} onClick={handleShowModal}>
            Đổi Mật Khẩu
          </Menu.Item>
          <Menu.Item icon={<LogoutOutlined />} onClick={handleOut}>
            Đăng Xuất
          </Menu.Item>
        </Menu>
      );
      const [form] = Form.useForm();
    return (
        <div>
        <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "-66px",
          
        }}
      >
        <Dropdown overlay={UserMenu}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Avatar icon={<UserOutlined />} style={{ marginRight: 8 }} />
            <span>Tên Đăng Nhập</span>
          </div>
        </Dropdown>
      </div>
            <Modal
        title="Đổi Mật Khẩu"
        visible={isModalVisible}
        onCancel={handleCancelModal}
        footer={null}
      >
        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
        <Form.Item
        name="Mật Khẩu Hiện Tại"
        label="Mật Khẩu Hiện Tại"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item
        name="Mật Khẩu Mới"
        label="Mật Khẩu Mới"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>
          
          <Form.Item>
            <Button type="primary" onClick={handleCancelModal}>
              Hủy
            </Button>{" "}
            <Button type="primary" onClick={handleCancelModal}>
              Xác Nhận
            </Button>
          </Form.Item>
        </Form>
      </Modal>
        </div>
    );
}

export default Dangxuat;