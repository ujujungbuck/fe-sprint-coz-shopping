import React from "react";
import Category from "../Components/Category";
import Row from "../Components/Row";
import requests from "../api/requests";

function ProductList() {
  return (
    <div>
      <Category />
      <Row title="Product List" id="PL" fetchUrl={requests.countTen} />
    </div>
  );
}

export default ProductList;
