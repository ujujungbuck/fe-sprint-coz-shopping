import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Item(){

    const [product, setProduct] =  useState(null)

    const dataHandler = () => {
   return axios
  .get('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
  .then((res) => {
    console.log(res.data[0])
    setProduct(res.data[0].id)
  })
  .catch((error) => console.log(error));

}

useEffect(() => {
    // 컴포넌트 생성 시 아래 함수가 실행됩니다.
    dataHandler();
  }, []);


    return <div>
   <div>dddddd{product}</div>
   <div>{setProduct}</div>
    </div>
}