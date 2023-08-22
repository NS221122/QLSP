import React from 'react';
import {  Layout } from "antd";
const {  Content } = Layout;
function DoDienTu(props) {
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
                 Đồ Điện Tử
           </Content>
           </div> 
    );
}

export default DoDienTu;