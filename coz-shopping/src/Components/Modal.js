import React from "react";
import styled from "styled-components";

export const ItemModal = styled.div`
  position: fixed;
  background-color: rgb(0 0 0 / 21%);
  inset: 0px;
  z-index: 1200;
  display: flex;
  justify-content: center;

  img {
    position: absolute;
    width: 900px;
    height: 600px;
    border-radius: 10px;
    z-index: 1000;
    margin-top: 210px;
  }
  .title {
    font-weight: 800;
    z-index: 1200;
    font-size: 30px;
    margin-top: 730px;
    margin-right: 500px;
    color: #ffff;
  }
  span {
    font-weight: 800;
    z-index: 1200;
    position: absolute;
    color: #ffff;
    font-size: 20px;
    cursor: pointer;
    margin-top: 230px;
    margin-left: 820px;
    font-size: 40px;
  }
`;

export default function Modal({
  type,
  image_url,
  title,
  brand_image_url,
  brand_name,
  setModalOpen,
}) {
  return (
    <ItemModal>
      <img src={image_url !== null ? image_url : brand_image_url} alt={title} />
      <span onClick={() => setModalOpen(false)}>x</span>
      <div className="title">
        {type === "Category" ? "#" : null}
        {title !== null ? title : brand_name}
      </div>
    </ItemModal>
  );
}
