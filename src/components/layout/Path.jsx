import React from 'react'
import {  Outlet, Link } from "react-router-dom";
function Path() {
    return (
         <div>
           <nav>
             <ul>
                <li> 
                 <Link to="/">Siparişler</Link>
               </li>
               <li>
                 <Link to="/about">Kategori</Link>
               </li> 
               <li>
                 <Link to="product">Ürün</Link>
               </li> 
        
       
             </ul>
           </nav>
           <Outlet />
         </div>
       );
}

export default Path;

