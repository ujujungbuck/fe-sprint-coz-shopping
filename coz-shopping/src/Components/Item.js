import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components"


export const CardRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const Card = styled.div`
width: 264px;
height: 264px;
.card-image{
  width: 264px;
  height: 210px;
  border-radius: 10px;
}
.card-title{
  //display: flex;
  //justify-content: space-between;

}
.card-price{
  float: right;
}
`


export default function Item(){

  const [datas, setDatas] = useState([])

useEffect(() => {
  loadItems()
  }, []);


  const loadItems = async() => {
    try{
      let response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/Products?count=4');
      console.log(response.data)
      setDatas(response.data)
      //console.log(response.data.filter(e => e.type === "Brand"))
    }catch(error){
      console.log(error)
    }
  }



    return <>
    <CardRow>

{datas.map(data => {
  if(data.type === "Brand"){
    return <Card>
    <img className="card-image"
  key={data.id}
  src={data.brand_image_url}
  alt={data.brand_name} />
  <div>{data.brand_name}</div>
  <div>관심고객수{data.follower}</div>
    </Card>
  }

  if(data.type === "Product"){
    return <Card>
    <img className="card-image"
  key={data.id}
  src={data.image_url}
  alt={data.title} />
  <div>{data.title}</div>
  <div>{data.discountPercentage}%</div>
  <div>{data.price}원</div>
    </Card>
  }

  if(data.type === "Category"){
    return <Card>
    <img className="card-image"
  key={data.id}
  src={data.image_url}
  alt={data.title} />
  <div>#{data.title}</div>
    </Card>
  }

  if(data.type === "Exhibition"){
    return <Card>
    <img className="card-image"
  key={data.id}
  src={data.image_url}
  alt={data.title} />
  <div>{data.title}</div>
  <div>{data.sub_title}</div>
    </Card>
  }

})}

</CardRow>
    
</>

}