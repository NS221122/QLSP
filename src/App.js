import React from "react";
// import { Breadcrumb, Layout, Menu, theme } from "antd";
// import MenuEdit from "../src/menu";
// import "./style/mycss.css";
// const { Header, Content, Sider } = Layout;

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
const App = () => {
 
  return (
    <BrowserRouter>
    <Routes>
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
    </Routes>
  </BrowserRouter>
  );
};
export default App;