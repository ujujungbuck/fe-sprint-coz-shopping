import React from "react";
import styled from "styled-components";

const Category = () => {
  const categoryHandler = (data, e) => {
    //setCategory(data)
    console.log(e);
  };

  return (
    <Container>
      <Wrap>
        <img src="/whole.png" alt="전체" />
        전체
      </Wrap>
      <Wrap>
        <img src="/product.png" alt="상품" />
        상품
      </Wrap>
      <Wrap>
        <img src="/category.png" alt="카테고리" />
        카테고리
      </Wrap>
      <Wrap>
        <img src="/exhibition.png" alt="기획전" />
        기획전
      </Wrap>
      <Wrap>
        <img
          src="/brand.png"
          alt="브랜드"
          onClick={(e) => categoryHandler(e)}
        />
        브랜드
      </Wrap>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Wrap = styled.div`
  margin: 0 24px;
  font-size: 16px;
  font-weight: 800;
  &:hover {
    color: #412dd4;
  }
`;
