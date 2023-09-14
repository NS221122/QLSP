import React, { useEffect, useState } from "react";
// import { Breadcrumb, Layout, Menu, theme } from "antd";
// import MenuEdit from "../src/menu";
// import "./style/mycss.css";
// const { Header, Content, Sider } = Layout;

import { BrowserRouter, Routes, Route,useLocation,Navigate, Outlet } from "react-router-dom";
import Home from "./componets/home/home";
import TCSP from "./componets/SP/TCSP/TCSP";
import KM from "./componets/KM/Khuyenmai";
import TG from "./componets/TG/Trogiup";
import TM from "./componets/TM/TM";
import QLTK from "./componets/QTHT/QLTK/Quanlytaikhoan";
//
import XeCo from "./componets/SP/LSP/XeCo/XeCo";
import DoDienTu from "./componets/SP/LSP/DoDienTu/DoDienTu";
import NuocHoa from "./componets/SP/LSP/NuocHoa/NuocHoa";
import MyPham from "./componets/SP/LSP/MyPham/MyPham";
//


import Register from "./componets/Account/Register/register";
import Login from "./componets/Account/Login/login";
import Repass from "./componets/Account/Repass/repass";


const App = () => {
  const Checklogin = () =>{
    const {thisLocation} = useLocation();
    const [IsLogin , setIsLogin] = useState();
    useEffect(()=>{
      let loginCheck = localStorage.getItem("LoginHTQLCheck");
        setIsLogin(loginCheck); 
    },[thisLocation]);
    if (IsLogin===undefined) {
      return null;
    }
    return IsLogin? <Outlet/> : <Navigate to ="/login" replace/>;
  };
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register />} />
        <Route path="/repass" element={<Repass />} />
        <Route element={<Checklogin />}>
    
              <Route path="/" element={<Home />}>
              <Route path="/SP/TCSP" element={<TCSP />}></Route>
                  <Route path="/SP/LSP/XeCo" element={<XeCo />}></Route>
                  <Route path="/SP/LSP/DoDienTu" element={<DoDienTu />}></Route>
                  <Route path="/SP/LSP/NuocHoa" element={<NuocHoa/>}></Route>
                  <Route path="/SP/LSP/MyPham" element={<MyPham />}></Route>

              <Route path="/KM" element={<KM />}></Route>
              <Route path="/TM" element={<TM />}></Route>
              <Route path="/TG" element={<TG />}></Route>
                  <Route path="/QTHT/QLTK" element={<QLTK />}></Route>
              </Route>
              </Route>
              <Route path="login" element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>
  );
};
export default App;