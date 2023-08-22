import React from 'react';
import {  Layout } from "antd";
const {  Content } = Layout;
function Khuyenmai(props) {
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
                 Khuyến Mại
           </Content>
           </div> 
    );
}

export default Khuyenmai;