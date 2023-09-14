import {React,useState,useEffect } from 'react';
import { Cascader,Image ,Button, Layout,Table,Input,message,Popconfirm, Select, Space } from "antd";
import ModalTCSP from './modalTCSP';
import {
  
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,EyeOutlined
} from "@ant-design/icons";
import axios from "axios";
const {  Content } = Layout;
const { Search } = Input;
//

//
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
//
function TCSP(props) {


const [VisibleModal, setVisibleModal]= useState(false);
const [Action, setAction]= useState();
const [DanhsachSanPham, setDanhsachSanPham] = useState([]);
const [DataEdit, setDataEdit] = useState();
const [search, setSerch] = useState();

function getDanhsachSanPham() {
    axios.get("https://localhost:7177/api/SP/DanhSachSP?page=1")
      .then((res) => {
        setDanhsachSanPham(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function themSP(dataSP) {
    axios.post("https://localhost:7177/api/SP/ThemSP",dataSP)
      .then((res) => {
        if(res.data.Status>= 1){
            message.success(res.data.message); 
        }
        else{
          message.error(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function suaSP(dataSP) {
    axios.put("https://localhost:7177/api/SP/SuaSP",dataSP)
      .then((res) => {
        if(res.data.Status>= 1){
          message.success(res.data.message); 
        }
        else{
          message.error(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getDanhsachSanPham();
  },[]);

  function showAdd(){
    setVisibleModal(true);
    setAction("Them");
    setDataEdit(null);
  }
  function showEdit(data){
    setVisibleModal(true);
    setAction("Sua");
    setDataEdit(data);
  }
  function hiddenModal(){
    setVisibleModal(false);
  }
  
  function onCancel() {
    setVisibleModal(false);
  }

  async function save(dataSP){
          if(Action==="Them"){
              await themSP(dataSP);
          }
          else{
            await suaSP(dataSP);
          }
    await getDanhsachSanPham();
    hiddenModal();
  }
  async function deleteSanPham(mSanPham) {
    await axios.delete("https://localhost:7177/api/SP/XoaSP?msp=" + mSanPham)
      .then((res) => {
        if (res.data.data <=1) {
          message.success("Xóa thành công");
          getDanhsachSanPham();
        } else {
          message.error("Lỗi");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
 //??????
 async function onSearch (tenSP) {
    axios.post("https://localhost:7177/api/SP/TimKiemSP?name=" + tenSP)
    .then((res) => {
      if (tenSP === " ") {
        getDanhsachSanPham();
      } 
      else{
       setDanhsachSanPham(res.data.data);
      console.log(res.data.data);
    }
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
  function renderThaoTac(data){
      return(
        <>
          <EyeOutlined style={{fontSize: "18px", cursor: "pointer",marginRight:"21px",color: "#1677ff" }}
          />
          <EditOutlined
            style={{fontSize: "18px", cursor: "pointer",marginRight:"21px",color: "#1677ff"}}
              onClick={()=> showEdit(data)}
            />
            <Popconfirm
        title="Bạn có chắc muốn xóa?"
        onConfirm={() => deleteSanPham(data.mSanPham)}
        okText="Đồng ý"
        cancelText="Hủy"
      >

          <DeleteOutlined style={{fontSize: "18px", cursor: "pointer",color: "#1677ff"}}/>
       </Popconfirm>
        
        </>
      );

  }

  const columns = [
    {
      title: 'STT',
      render: (_,record,TCSP)=> TCSP+1,align: 'center',
    },
    {
      title: "Hình Ảnh",
      dataIndex: "picture",
      align:'center',
      key: "picture",
      render: (hinhanh) => (
        <img
          src={hinhanh}
          alt="Hình ảnh"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      title: 'Mã Sản Phẩm',
      dataIndex: 'mSanPham',
      key: 'mSanPham',
      align: 'center',
    },
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'tenSP',
      key: 'tenSP',align: 'center',
    },
    {
      title: 'Loại Sản Phẩm',
      dataIndex: 'loaiSanPham',
      key: 'loaiSanPham',
      align: 'center',
    },
    {
      title: 'Giá',
      dataIndex: 'donGia',
      key: 'donGia',align: 'center',
    },
    {
      title: 'Số Lượng',
      dataIndex: 'soLuong',
      key: 'soLuong',align: 'center',
    },
    {
      title: 'Thao Tác',
      align: 'center',
      render:  renderThaoTac,
    },
  ];
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
          <Button type='primary' onClick={()=>showAdd()} style={{marginBottom:"5px" }}><PlusOutlined />Thêm sản phẩm</Button>
          <Select
      defaultValue="Tất Cả"
      style={{
        width: 140,
        marginLeft:13,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Xe Cộ',
          label: 'Xe Cộ',
        },
        {
          value: 'Đồ Điện Tử',
          label: 'Đồ Điện Tử',
        },
        {
          value: 'Nước Hoa',
          label: 'Nước Hoa',
        },
        {
          value: 'Mỹ Phẩm',
          label: 'Mỹ Phẩm',
         
        },
      ]}
    />

          <Search 
          placeholder="Nhập tên sản phẩm"
            allowClear
            size="large"
           onSearch={onSearch} 
           enterButton 
            style={{
              
              width: 300,
            float: 'right',}}/>

          <Table dataSource={DanhsachSanPham} rowKey={(data)=> data.mSanPham} columns={columns} bordered />;
          
          </Content>
          <ModalTCSP visible={VisibleModal}
           hiddenModal= {hiddenModal}
            action={Action}
            onCancel={onCancel}
            dataEdit = {DataEdit}
            save={save}
            ></ModalTCSP>
          </div> 
    );
}

export default TCSP;