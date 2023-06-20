import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate, useParams } from 'react-router-dom';
 const Manager=()=>{
    return(
    
    <nav>
<ul>
 <li>
   <Link to="/">Home</Link>
 </li>
 <li>
   <Link to="/cart">Cart</Link>
 </li>
 <li>
   <Link to="/manager">Manager</Link>
 </li>
 <li>
       <Link to="/products">Products list</Link>
     </li>
</ul>
</nav>
    )
    
 }
 export default Manager;