import {React,useState,useEffect} from "react";
import {message} from "antd";
import { Link, useNavigate , useLocation ,Navigate } from "react-router-dom";
import logo from "../Images/logo.png";
import facebook from "../Images/logo-facebook.png";
import google from "../Images/Google__G__Logo.svg.webp";
import apple from "../Images/apple.png";
import nhatot from "../Images/pty-orange-logo.png";
import xetot from "../Images/veh-orange-logo.png";
import viectot from "../Images/job-green-logo.png";
import "../../../style/main.css";
import axios from "axios";

const Login = () => {

  const {pathname} = useLocation();
  const [IsLogin, setIsLogin] = useState();
  const navigete = useNavigate();
  useEffect(()=>{
    let loginCheck = localStorage.getItem("LoginHTQLCheck");
    setIsLogin(loginCheck);
  },[pathname]);

  function onFinish(values){
    axios.post("https://localhost:7177/api/TK/Login",values)
      .then((res) => {
        if(res.data.Status>= 1){
            let loginCheckData = {
              PhoneNumber:res.data.data.PhoneNumber,
              Status: res.data.data.Status,
            }; 
            localStorage.setItem(
              "LoginHTQLCheck", 
              JSON.stringify(loginCheckData)
              );
            navigete("/");
            message.success(res.data.message);
        }
        else{
          message.error(res.data.message);
        }
      })
      .catch((error) => {
        message.error("Lỗi hệ thống, vui lòng liên hệ bộ phận hỗ trợ!");
      });
  }
  return IsLogin?(
    <Navigate to="/" replace/>) : (
    <div className="Main-app">
      <form className="form" onFinish= {onFinish}>
        <div className="logo">
          <img src={logo} alt="Logo" width="121px" height="44px" />
        </div>
        <h1 className="text">Đăng Nhập</h1>
        <input type="number" name="sdt" placeholder="Số điện thoại" id="sdt" />
        <input type="password" name="password" id="password" />
        <Link to="/repass" className="link1">
          Quên mật khẩu
        </Link>
        <button type="submit" className="Login">
          ĐĂNG NHẬP
        </button>
        <div className="content">
          <hr />
          <p>Hoặc đăng nhập bằng</p>
          <hr />
        </div>
        <div className="mainbottom">
          <button className="bottom">
            <img
              src={facebook}
              alt="logo"
              style={{ marginRight: "10px" }}
              height="21px"
              width="21px"
            />{" "}
            Facebook
          </button>
          <button className="bottom">
            <img src={google} alt="logo" className="small" /> Google
          </button>
          <button className="bottom">
            <img src={apple} alt="logo" className="small" /> Apple ID
          </button>
        </div>
        <p className="footage">
          Chưa có tài khoản?{" "}
          <Link to="/register" className="link">
            Đăng ký tài khoản mới
          </Link>
        </p>
      </form>
      <footer>
        <div className="phattrien">
          <div className="footer">
            <p>Được phát triển bởi</p>
            <img src={logo} alt="anh" className="footer-logo" />
            <img src={nhatot} alt="anh" className="footer-logo" />
            <img src={viectot} alt="anh" className="footer-logo" />
            <img src={xetot} alt="anh" className="footer-logo" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
