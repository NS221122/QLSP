import React from 'react';
import {  Layout } from "antd";
const {  Content } = Layout;
function NuocHoa(props) {
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
                Nước Hoa
          </Content>
          </div> 
    );
}

export default NuocHoa;