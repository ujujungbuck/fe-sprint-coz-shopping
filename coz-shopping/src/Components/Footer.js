import React from 'react';
import styled from "styled-components"

const Tail = styled.div`
/* Footer */
color: gray;
height: 400px;
padding-top: 10px;
font-size: 13px;
text-align: center;
margin-top: 150px;
background: #FFFFFF;
border-top: 1px solid rgba(0, 0, 0, 0.1);
z-index: 1400;
`

export default function Footer(){

    return <>
    <Tail>
    <div>개인정보 처리방침 | 이용 약관</div>
    <div>All rights reserved @ Codestates</div>
    </Tail>
    </>

}