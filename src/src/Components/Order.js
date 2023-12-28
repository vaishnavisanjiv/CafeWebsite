import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import Header2 from "./Header2";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect,useState } from "react";
import cardData from "./cardData";
import {useDispatch} from "react-redux"
import{ ADD } from "../redux/actions/action"
// import { Card } from 'react-card-component';

function Order() {
   
    // const [[name, setName], [price, setPrice], [qty, setQty]] = [
    //     useState(""), useState(""), useState("1")];

        // const [productDetails,setProductDetails] = useState({
        //     name:"",
        //     price:"",
        //     qty:"",
        //     desc:""
        // })
        
        // function setvj (){
        //     // setName("peach iced tea");
        //     // setPrice(230)
        //     setProductDetails({ name:"mocha",price:130,qty:1,desc:"250ml serves 1 (250kcal)"})
        // }
        // function setp(){
        //     // setName("peach iced tea");
        //     // setPrice(230)
        //     setProductDetails({ name:"iced tea",price:180,qty:1,desc:"250ml serves 1 (250kcal)"})
        // }
        // function setv (){
        //     // setName("peach iced tea");
        //     // setPrice(230)
        //     setProductDetails({ name:"cappucino",price:230,qty:1,desc:"250ml serves 1 (250kcal)"})
        // }
        // function addCart(){                         
        // let data1 = productDetails.name;
        // let data2 = productDetails.price;   
        // let data3 = productDetails.qty;
        // let data4 = productDetails.desc;

        // //mongo 
        // let info = JSON.stringify({
        //     name:data1,
        //     price:data2,
        //     qty:data3,
        //     desc:data4
        //   });
        //    const ops = {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     data:info ,
        //     url:"/addCart"
        //     };
        //    Axios(ops)
        //    .then((res)=>{
        //     if(res.status==200){
        //       toast("Item added to Cart!",{position: toast.POSITION.BOTTOM_CENTER},{autoClose:1000})
        //     }
        //    })

        // //mySQL 
        // // const requestOptions = {
        // //     method: 'POST', 
        // //     mode: 'cors' ,         
        // //     headers: {  
        // //         'Content-Type': 'application/json',
        // //         'accept': 'application/json'
        // //     },           
        // //     body: JSON.stringify({ name: data, price: data1, quantity: data2 })
        // // };
        // // fetch('/addcart', requestOptions)
        // //     .then((response) => {
        // //         if (response.status == 200) {
        // //             response.json();
        // //             alert("ok")
        // //         }               
                
        // //     })
           
            
                        
                        
        //             }
         const [data,setData]=useState(cardData);        
         

        const dispatch = useDispatch()



        const send=(e)=>{
            //console.log(e);
            dispatch(ADD(e));
        }
    return (
        
        <div className="MenuCon">
            <Header />
            <Header2 />
            <div className="types">
                <h3>-------MENU-------</h3>
            </div>
            {data.map((dataObj)=>{
                return(
                    <div style={{display:"inline-block",marginTop:"-3%",marginBottom:"7%"}}>
                        <Card sx={{ maxWidth:300,height:"320px",marginLeft:"90px",marginRight:"10px" ,backgroundColor:"#dadada6c"}}>
                        <CardMedia
                          sx={{ width:275,height:"150px",margin:"10px"}}
                          image={dataObj.img} />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardContent sx={{ flex: '1 0 auto' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row' ,}}>
                                <Typography gutterBottom variant="h6" component="div" style={{marginTop:"-8%"}}>
                                 {dataObj.title}
                                </Typography>
                                <Typography variant="body3" color="text.secondary" sx={{marginTop:"-6%",marginLeft:"5%"}}>
                                 {dataObj.quantity}
                                </Typography>

                            </Box>
                            <Typography variant="body3" color="text.secondary" >
                             {dataObj.desc}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography variant="body1" color="text.primary" className="cardprice" style={{marginTop:"10%"}}>
                                ₹{dataObj.price}
                                </Typography>
                                <Button className="cardbutton" style={{marginLeft:"50%",marginTop:"8%", backgroundColor:"#944e32",color:"white"}} onClick={()=>{send(dataObj);}}>ADD</Button>
                            </Box>
                          </CardContent>
                        </Box>
                       
                                           
                                          </Card>
                    </div>

                )
            })}
                        <ToastContainer/>

            {/* 
            <div className="Menu2">
                <div className="Cards">
                    <div className="info">
                        <img src={im5}></img>
                        <div className="hehe">

                            <h2>Citrus ale</h2>
                            <h6>250ml (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$200</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>
                <div className="Cards">
                    <div className="info">
                        <img src={im6}></img>
                        <div className="hehe">

                            <h2>Cappucino</h2>
                            <h6>Per Serve 160g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$150</h4>
                            <button>Add</button>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="info">
                        <img src={im7}></img>
                        <div className="hehe">

                            <h2>Mexican Tacos</h2>
                            <h6>Per Serve 200g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$20</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>

            </div>

            <div className="Menu2">
                <div className="Cards">
                    <div className="info">
                        <img src={im9}></img>
                        <div className="hehe">

                            <h2>Citrus ale</h2>
                            <h6>250ml (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$200</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>
                <div className="Cards">
                    <div className="info">
                        <img src={im12}></img>
                        <div className="hehe">

                            <h2>Cappucino</h2>
                            <h6>Per Serve 160g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$150</h4>
                            <button>Add</button>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="info">
                        <img src={im15}></img>
                        <div className="hehe">

                            <h2>Mexican Tacos</h2>
                            <h6>Per Serve 200g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$20</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>

            </div>

            <div className="Menu4">
                <div className="Cards">
                    <div className="info">
                        <img src={im17}></img>
                        <div className="hehe">

                            <h2>Citrus ale</h2>
                            <h6>250ml (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$200</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>

                <div className="Cards">
                    <div className="info">
                        <img src={im25}></img>
                        <div className="hehe">

                            <h2>Cappucino</h2>
                            <h6>Per Serve 160g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$150</h4>
                            <button>Add</button>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="info">
                        <img src={im31}></img>
                        <div className="hehe">

                            <h2>Mexican Tacos</h2>
                            <h6>Per Serve 200g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$20</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>

            </div> */}

        


            {/* <div className="Menu4">
                <div className="Cards">
                    <div className="info">
                        <img src={im3}></img>
                        <div className="hehe">

                            <h2>Citrus ale</h2>
                            <h6>250ml (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$200</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>

                <div className="Cards">
                    <div className="info">
                        <img src={im20}></img>
                        <div className="hehe">

                            <h2>Cappucino</h2>
                            <h6>Per Serve 160g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$150</h4>
                            <button>Add</button>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="info">
                        <img src={im21}></img>
                        <div className="hehe">

                            <h2>Mexican Tacos</h2>
                            <h6>Per Serve 200g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$20</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>

            </div>

            <div className="Menu4">
                <div className="Cards">
                    <div className="info">
                        <img src={im23}></img>
                        <div className="hehe">

                            <h2>Citrus ale</h2>
                            <h6>250ml (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$200</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>

                <div className="Cards">
                    <div className="info">
                        <img src={im19}></img>
                        <div className="hehe">

                            <h2>Cappucino</h2>
                            <h6>Per Serve 160g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$150</h4>
                            <button>Add</button>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="info">
                        <img src={im27}></img>
                        <div className="hehe">

                            <h2>Mexican Tacos</h2>
                            <h6>Per Serve 200g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$20</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>

            </div>

            <div className="Menu4">
                <div className="Cards">
                    <div className="info">
                        <img src={im28}></img>
                        <div className="hehe">

                            <h2>Citrus ale</h2>
                            <h6>250ml (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$200</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>

                <div className="Cards">
                    <div className="info">
                        <img src={im29}></img>
                        <div className="hehe">

                            <h2>Cappucino</h2>
                            <h6>Per Serve 160g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$150</h4>
                            <button>Add</button>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="info">
                        <img src={im30}></img>
                        <div className="hehe">

                            <h2>Mexican Tacos</h2>
                            <h6>Per Serve 200g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$20</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>

            </div> */}


          


            {/* <div className="Menu4">
                <div className="Cards">
                    <div className="info">
                        <img src={im22}></img>
                        <div className="hehe">

                            <h2>Citrus ale</h2>
                            <h6>250ml (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$200</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>

                <div className="Cards">
                    <div className="info">
                        <img src={im24}></img>
                        <div className="hehe">

                            <h2>Cappucino</h2>
                            <h6>Per Serve 160g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$150</h4>
                            <button>Add</button>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="info">
                        <img src={im18}></img>
                        <div className="hehe">

                            <h2>Mexican Tacos</h2>
                            <h6>Per Serve 200g (400kcal)</h6>
                            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
                        </div>
                        <div className="cart">
                            <h4>$20</h4>
                            <button>Add</button>
                        </div>
                    </div>

                </div>

            </div> */}


            <Footer />
        </div>
    );
}
export default Order;