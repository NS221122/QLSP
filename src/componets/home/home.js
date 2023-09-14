
  import { Breadcrumb, Layout, Menu, theme } from "antd";
  import React from "react";
  import "../../style/mycss.css";
  import MenuEdit from "../../menu/index";
  import Dangxuat from "./dangxuat";
import { Outlet } from "react-router-dom";
  const { Header, Content, Sider } = Layout;

function home(props) {
    return (
        <Layout>
      <Layout style={{height: "1000px"}}>
        <MenuEdit />
        
        <Layout
          style={{
            border: '1px solid #f0f0f0',
          }}
        >
        <Header className="header, titleMain" style={{ 
          
          height: 63,
          background: "#ffff",
           }}>
        <div className="tieude"
        style={{ 
          display: "flex",
          justifyContent: "center",
           }}
        >HỆ THỐNG QUẢN LÝ</div>
        
        <Dangxuat/>
        
      </Header>          
           <Outlet/>
        </Layout>
      </Layout>
    </Layout>
    );
}

export default home;