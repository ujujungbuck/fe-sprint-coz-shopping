import React from 'react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import {  BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import Bookmark from '../Pages/Bookmark';
import ProductList from '../Pages/ProductList';
import Main from '../Pages/Main';
import './Header.css';


export default function Header(){
    const [isOpen, setIsOpen] = useState(false)


    return <BrowserRouter>    
            <header>
                <div class="inner">
                    <div class="menu-group">

                        <div class="logo">
                            <Link to="/"><img src="codelogo.png" alt="logo"/></Link>
                        </div>

                        <title class="main-menu">COZ Shopping</title>
                    
                        <div class="icon">
                            <Icon onClick={() =>  setIsOpen(isOpen ? false : true)} icon="material-symbols:menu-rounded" />
                        </div>
                    
                
                    </div>
                </div>
      
    {isOpen ? 
    <div class="modalwrapper">  
        <div class="icon">
     <Icon icon="ph:triangle-fill"/>
        </div>
       <div class="modal" isOpen={isOpen}>
            <ul>
                <li>OOO님, 안녕하세요!</li>
                <li><Link to="/products/list"><Icon icon="simple-line-icons:present" />상품리스트 페이지</Link></li>
                <li><Link to="/bookmark"><Icon icon="ic:round-star-border" />북마크 페이지</Link></li>
            </ul>
       </div>
    </div>
    :
    null
    }  


        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/products/list" element={<ProductList />}/>
            <Route path="/bookmark" element={<Bookmark />}/>
        </Routes>
        </header>
    </BrowserRouter> 
}
