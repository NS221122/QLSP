import React from 'react';
import {  Layout } from "antd";
const {  Content } = Layout;
function MyPham(props) {
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
                 Mỹ Phẩm
           </Content>
           </div> 
    );
}

export default MyPham;