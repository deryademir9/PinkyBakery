import React from 'react'
import {  Outlet, Link } from "react-router-dom";
function Path() {
    return (
         <div >
           <nav >
             <ul  >
                <li style={{boxsizing: 'border-box', float: 'left', width: '33%', margin:'0.5%',padding: '20px' }}> 
                 <Link to="/">Siparişler</Link>
               </li>
               <li style={{boxsizing: 'border-box', float: 'left', width: '33%', padding: '20px' }}>
                 <Link to="/about">Kategori</Link>
               </li> 
               <li style={{boxsizing: 'border-box', float: 'left', width: '33%', padding: '20px' }}>
                 <Link to="product">Ürün</Link>
               </li> 
        
       
             </ul>
           </nav>
           <Outlet />
         </div>
       );
}

export default Path;

