import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div>
      ProductCard
      <>
        <img
          className="card-image"
          key={data.id}
          src={data.image_url}
          alt={data.title}
          id={data.id}
        />
        <div className="title">
          {data.title}
          <div className="percentage">
            {data.discountPercentage}%
            <div className="price">
              {`${data.price}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductCard;
