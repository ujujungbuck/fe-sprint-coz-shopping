import React from 'react';
import styled from "styled-components"
import { Icon } from '@iconify/react';
import { useState } from 'react';
import {  BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import Bookmark from '../Pages/Bookmark';
import ProductList from '../Pages/ProductList';
import Main from '../Pages/Main';


const Head = styled.header`
position: fixed;
display: flex;
padding-top: 15px;
padding-left: 20px;
padding-right: 50px;
//flex: 1;
justify-content: space-between;
width: 97%;
height: 53px;
background: #FFFFFF;
box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`

const Logo = styled.div`
//position: absolute;
//display: flex;
//flex-direction: row;
//flex: 1;
align-items: center;
/* left: 5.94%;
right: 89.77%;
top: 31.25%;
bottom: 31.25%; */
`

// const Imoji = styled.div`
// display: flex;

// position: left;
// left: 89.88%;
// right: 5.96%;
// top: 10%;
// bottom: 10%;
// //border: 3px solid #000000;
// `

const Title = styled.div`
/* 쇼핑몰 이름 */
position: absolute;
left: 6.17%;
right: 70.86%;
top: 31.48%;
bottom: 31.48%;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 88.02%;

display: flex;
align-items: center;
color: #000000;
`

const Modal = styled.div`
//display: none;
margin-left: auto;
//float: right;
display: flex;
flex-direction: column;
align-items: center;
width: 200px;
height: 150px;
padding: 10px;

//list-style-type: none;
font-size: 16px;
position: absolute;
left: 0%;
right: 0%;
top: 12.79%;
bottom: 0%;

background: #FFFFFF;
border-radius: 12px;
box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`

const List = styled.li`
display: flex;
flex: 1;
align-items: center;
width: 180px;
height: 30px;
left: 10px;
border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`

export default function Header(){
    const [isOpen, setIsOpen] = useState(false)


    return    <BrowserRouter>    
    <Head>
    <div>
       <Link to="/"><Logo><img src="로고.png" alt="로고"/></Logo></Link>
        <Title><header>COZ Shopping</header></Title>
    </div>
    <div>
       <Logo onClick={() =>  setIsOpen(isOpen ? false : true)}><Icon icon="material-symbols:menu-rounded" /></Logo>
    </div>
    </Head>
    {isOpen ? 
       <Modal isOpen={isOpen}>
       <Icon icon="ph:triangle-fill" style={{color:"red", marginLeft: "auto"}}/>
        <List>OOO님, 안녕하세요!</List>
        <Link to="/products/list"><List><Icon icon="simple-line-icons:present" />상품리스트 페이지</List></Link>
        <Link to="/bookmark"><List><Icon icon="ic:round-star-border" />북마크 페이지</List></Link>
       </Modal>
    :
    null
    }  


        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/products/list" element={<ProductList />}/>
            <Route path="/bookmark" element={<Bookmark />}/>
        </Routes>
    </BrowserRouter> 
}
