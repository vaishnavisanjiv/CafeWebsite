import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Header3 from "./Header3";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import im1 from './img/cappu.JPG'
import { useNavigate, useParams } from "react-router-dom";
import {useSelector} from "react-redux"
import{ DLT }from "../redux/actions/action"
import{ REMOVE }from "../redux/actions/action"
import {useDispatch} from "react-redux"
import{ ADD }from "../redux/actions/action"
import Order from './Order';
import { ToastContainer, toast } from 'react-toastify';

function Addtb() {
  const [data,setData]=useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
};
const history= useNavigate()

  //  useEffect(()=>{
  //   //fetch("https://jsonplaceholder.typicode.com/users/1")
  //   fetch("/getOrder")
  //   .then((result)=>result.json())
  //   .then((data)=>setUser(data));
  //       },[] 
  //  )
  // "proxy": "http://localhost:8005",

  // useEffect(()=>{
  //   fetch("/getUser")
  //   .then((res)=>res.json())
  //   .then((data)=>setUser(data.data))
  // },[])

  // const qtyInc = async()=>{
  //  alert(data.quantity)
  // }

  const {id} = useParams()
  const dispatch = useDispatch()
  const getData= useSelector((state)=>state.cartreducer.carts)
  const [total,setTotal] = useState(0);

  const Bill = ()=>{
    let total = 0;
    getData.map((dataObj,k)=>{
        total = dataObj.price * dataObj.qty + total
    });
    setTotal(total);
};

useEffect(()=>{
    Bill();
},[Bill])

  const compare = () => {
let comparedata = getData.filter((e) => {
return e.id == id
});
setData(comparedata);

}

useEffect (() => { compare();
}, [id])

const dlt = (id) => {
dispatch (DLT (id));
if(getData.length<=1){
  history("/Order")
}
}

const remove = (item) => {
dispatch(REMOVE(item))
}

const send=(e)=>{

  dispatch(ADD(e));
}

  return (
     <>
     {
      getData.length?
    
    <div >
        <Header/>
        <Header3/>
        <h3 style={{fontFamily:'kanit',marginLeft:'70px',textDecoration:'underline'}}>
      Order Details
        </h3>
        <div className='cartTitle'>
          <h4>Item</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </div>
        <div>
          {getData.map((dataObj,index)=>{
            return (
              <Card sx={{ maxWidth:650,display:'flex',height:"100px",margin:"35px 60px"}}>
              
              <CardMedia
                sx={{ width:100,height:"80px",margin:"10px"}}
                image={dataObj.img} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography gutterBottom variant="h6" component="div">
                   {dataObj.title}
                  </Typography>
                  <Typography variant="body3" color="text.secondary" >
                   {dataObj.quantity}
                  </Typography>
                  
                </CardContent>
              </Box>
              <CardActions sx={{marginLeft:"10%"}}>
              
                <Button size="small" onClick={dataObj.qty <=1 ? ()=>dlt(dataObj.id) : ()=>remove(dataObj)}>-
                </Button>
                <Typography variant="body1" color="text.primary" >
                 {dataObj.qty}
                  </Typography>
                <Button size="small" onClick={()=>send(dataObj)}>+</Button>
                
              </CardActions>
              <CardContent sx={{marginTop:'20px'}}>
              <Typography variant="body1" color="text.secondary">
                  ₹{dataObj.price}
                  </Typography>
             
              </CardContent>
              {/* <CardContent sx={{marginTop:'20px',marginLeft:'60px'}}>
              <Typography variant="body1" color="text.primary">
                  ₹{dataObj.price*dataObj.qty}
                  </Typography>
              </CardContent> */}
                  <span class="material-symbols-outlined" style={{marginTop:'35px',marginLeft:'4%',cursor:'pointer'}} onClick={()=>dlt(dataObj.id)}>delete</span>
            </Card>
             )
          })}
         
            <h3 style={{fontFamily:'kanit',color:'rgb(30,56,50)',marginLeft:'5%'}}>
              Your Total is : ₹{total}
            </h3>
          
        </div>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         
        <Footer/>
    </div>:
   <div>
        <Header/>
        <Header3/>

      <center><h4>Empty Cart!</h4></center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
   </div>
        }
        </>
  );
}

export default Addtb;