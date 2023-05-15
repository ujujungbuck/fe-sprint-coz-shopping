import React from 'react';
import styled from "styled-components"

const Tail = styled.div`
/* Footer */
color: gray;
padding-top: 10px;
font-size: 13px;
height: 100px;
text-align: center;

background: #FFFFFF;
border-top: 1px solid rgba(0, 0, 0, 0.1);
`

export default function Footer(){

    return <>
    <Tail>
    <div>개인정보 처리방침 | 이용 약관</div>
    <div>All rights reserved @ Codestates</div>
    </Tail>
    </>

}