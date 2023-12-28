import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes,Route,useNavigate } from 'react-router-dom';
import About from './Components/About';
import Order from './Components/Order';
import Store from './Components/Store';
import Formm from './Components/Formm';
import Addtb from './Components/Addtb';


import ScrollButton from "./Components/Scrollbutton";
import { Content, Heading } from './Components/Style';


function App() {
  return (
    <div>
     
 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Store' element={<Store/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Formm' element={<Formm/>}/>
        <Route path='/Addtb' element={<Addtb/>}/>
      </Routes>
      </BrowserRouter>
      
   
      <ScrollButton />
     
    </div>
  );
}

export default App;
