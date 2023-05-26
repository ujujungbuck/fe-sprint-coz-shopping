import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const BrandCard = ({ data }) => {
  return (
    <div>
      BrandCard
      <>
        <img
          className="card-image"
          key={data.id}
          src={data.brand_image_url}
          alt={data.brand_name}
          id={data.id}
        />
        <div className="title">
          {data.brand_name}
          <div className="follower">
            관심고객수
            <div className="follower-number">
              {`${data.follower}`
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default BrandCard;
