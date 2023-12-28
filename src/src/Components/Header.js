import {React,useState} from "react";
import logo from './img/logo.png';
import order from './Order';
import store from './Store';
import { Link, Navigate } from "react-router-dom";
import {useSelector} from "react-redux"
// import {useDispatch} from "react-redux"
// import {DLT} from "../redux/actions/action"
import Badge from "@mui/material/Badge"
import { styled } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 85,
    top: -17,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    color:'white',
    backgroundColor:'#944e32',
    
  },
}));

function Header(){
 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const getData = useSelector((state)=>state.cartreducer.carts);
  console.log(getData);

 
    return(

  
  <div className="nav" id="mynav">


  <div className="container">
    
    <div className="title">
      
    <Link to="/">Home</Link>
    <Link to="/Order">Order</Link>
    <Link to="/Store">Stores</Link>
    <Link to="/About">About</Link>
    </div>
  

    <div className="mem">
    <Link to="/Addtb" >
   
      <StyledBadge badgeContent={getData.length} color="secondary">
      </StyledBadge>
  
    </Link>
    {getData.length?
    
    <Link to="/Addtb" >
    <span class="material-symbols-outlined" id="bag">
    shopping_bag
    </span>
  </Link>:
  <>
 <Link onClick={handleClick}>
  <span class="material-symbols-outlined" id="bag">
  shopping_bag
  </span> 
  </Link>
  <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Empty Cart.</Typography>
      </Popover>
  
</>
}
    <Link to="/Formm">
      <span class="material-symbols-outlined">
        account_circle
        </span>
    </Link>
    </div>
    <img src={logo}></img>
  
  
  </div>
  
  </div>
 

    );
}
export default Header;