import React from 'react';
import styled from "styled-components"

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
display: flex;
flex-direction: column;
align-items: center;
width: 200px;
height: 150px;
padding: 10px;

list-style-type: none;
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

export default function Header(){

    return<>
    <Head>
    <div>
       <Logo><img src="로고.png" alt="로고"/></Logo>
        <Title><header>COZ Shopping</header></Title>
    </div>
    <div>
       <Logo><img src="아이콘.png" alt="메뉴"/></Logo>
    </div>
    </Head>
    <div>
       <Modal>
        <li>OOO님, 안녕하세요!</li>
        <li>상품리스트 페이지</li>
        <li>북마크 페이지</li>       
       </Modal>
    </div>

    </>

}
