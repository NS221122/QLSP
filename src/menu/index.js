import {
    
    SettingOutlined,
    AppstoreOutlined,
    MessageOutlined,
    ShopOutlined,
    UserSwitchOutlined,
    ImportOutlined,
    BankOutlined
  } from "@ant-design/icons";
  import { useState } from "react";
  import { Layout, Menu } from "antd";
  import {  Link } from "react-router-dom";
  import MenuItem from "antd/es/menu/MenuItem";
import MenuContext from "antd/es/menu/MenuContext";
  const { Sider } = Layout;
  
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Sản Phẩm", "sub1", <ShopOutlined />, [
      getItem(<Link to="/SP/TCSP">Tất Cả Sản Phẩm</Link>, "1"),
      getItem("Loại Sản Phẩm", "sub3", null, [
         getItem(<Link to="/SP/LSP/XeCo">Xe Cộ</Link>, "2"),
         getItem(<Link to="/SP/LSP/DoDienTu">Đồ Điện Tử</Link>, "3"),
         getItem(<Link to="/SP/LSP/NuocHoa">Nước Hoa</Link>, "4"),
         getItem(<Link to="/SP/LSP/MyPham">Mỹ Phẩm</Link>, "5"),
      ]),
     
    ]),
    getItem(<Link to="/KM">Khuyến Mại</Link>, "6",<AppstoreOutlined />),
    getItem(<Link to="/TM">Thêm Mới</Link>, "7",<ImportOutlined />),
    getItem(<Link to="/TG">Trợ Giúp</Link>, "8",<MessageOutlined />),
    getItem("Quản Trị Hệ Thống", "sub2", <SettingOutlined />, [
      getItem(<Link to="/QTHT/QLTK">Quản Lý tài khoản</Link>, "9",<UserSwitchOutlined />),
  
      
    ]),
  ];
  
  // submenu keys of first level
  const rootSubmenuKeys = ["sub1", "sub2"];
  const Index = () => {
    const [openKeys, setOpenKeys] = useState(["sub1"]);
    const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };
    return (
      <Sider
        width="auto"
        style={{
          background: "#ffff",
        }}
      >
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 300,
          }}
          items={items}
        />
      </Sider>
    );
  };
  export default Index;