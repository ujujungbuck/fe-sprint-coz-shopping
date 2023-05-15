import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Item(){

  const [data, setData] = useState("")

useEffect(() => {

  axios
        .get('http://cozshopping.codestates-seb.link/api/v1/products?count=10')
        .then((res) => {
          //console.log(res.data.filter((e, i) => console.log("이게e",e, i)))
          //console.log(res.data.filter(e => e.type === "Product"))
          const filteredProduct = res.data.filter(e => e.type === "Product")
          const {id, image_url, title, discountPercentage, price} = filteredProduct[0]
          setData({id, image_url, title, discountPercentage, price})
        })
  }, []);


    return <>
   <img style={{width : "200px"}} src={data.image_url} alt={data.title}></img>
   <div>{data.title} {data.discountPercentage}%</div>
   <div>{data.price}원</div>
    </>
}