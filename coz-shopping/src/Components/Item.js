import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components"
export const Card = styled.div`
width: 264px;
height: 264px;
.card-image{
  width: 264px;
  height: 210px;
  border-radius: 10px;
}
.card-title{
  display: flex;
  justify-content: space-between;
}
.card-price{
  float: right;
}
`


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


    return <Card>
   <img className="card-image" style={{width : "200px"}} src={data.image_url} alt={data.title}></img>
   <div className="card-title">{data.title} {data.discountPercentage}%</div>
   <div className="card-price">{data.price}원</div>
    </Card>
}