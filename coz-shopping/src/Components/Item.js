import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Modal from "./Modal";
import { Icon } from "@iconify/react";

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.div`
  width: 320px;
  height: 264px;
  .card-image {
    width: 320px;
    height: 210px;
    border-radius: 10px;
  }
  .title {
    font-weight: 800;
    margin-top: 10px;
    font-size: large;
    display: flex;
    justify-content: space-between;
  }

  .follower {
    display: flex;
    flex-direction: column;
    text-align: right;
    .follower-number {
      font-weight: 400;
    }
  }

  .percentage {
    color: #452cdd;
    text-align: right;
    font-weight: 800;
    .price {
      font-weight: 500;
      color: #333;
    }
  }

  .card-price {
    float: right;
  }

  .bookmark {
    font-size: 40px;
    margin-left: 270px;
    margin-top: -50px;
    z-index: 1200;
    position: absolute;
  }
`;

export default function Item() {
  const [datas, setDatas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSelected, setModalSelected] = useState({});
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkSelected, setBookmarkSelected] = useState({});

  const bookmarkHandler = (data, e) => {
    console.log(e.currentTarget);

    setBookmarked(
      Number(data.id) === Number(e.currentTarget.id) && bookmarked
        ? false
        : true
    );
    console.log("왜안대?");
  };

  const modalHandler = (data) => {
    setModalOpen(true);
    setModalSelected(data);
  };

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      let response = await axios.get(
        "http://cozshopping.codestates-seb.link/api/v1/Products?count=4"
      );
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CardRow>
        {datas.map((data) => {
          if (data.type === "Brand") {
            return (
              <Card>
                <img
                  className="card-image"
                  onClick={() => modalHandler(data)}
                  key={data.id}
                  src={data.brand_image_url}
                  alt={data.brand_name}
                  id={data.id}
                />
                <Icon
                  icon="ic:round-star"
                  onClick={(e) => bookmarkHandler(data, e)}
                  className="bookmark"
                  style={bookmarked ? { color: "#FFD361" } : { color: "#fff" }}
                  bookmarked={bookmarked}
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
              </Card>
            );
          }

          if (data.type === "Product") {
            return (
              <Card>
                <img
                  className="card-image"
                  onClick={() => modalHandler(data)}
                  key={data.id}
                  src={data.image_url}
                  alt={data.title}
                  id={data.id}
                />
                <Icon
                  icon="ic:round-star"
                  onClick={(e) => bookmarkHandler(data, e)}
                  className="bookmark"
                  style={bookmarked ? { color: "#FFD361" } : { color: "#fff" }}
                  bookmarked={bookmarked}
                  id={data.id}
                />
                <div className="title" onClick={modalHandler}>
                  {data.title}
                  <div className="percentage">
                    {data.discountPercentage}%
                    <div className="price">
                      {`${data.price}`
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </div>
                  </div>
                </div>
              </Card>
            );
          }

          if (data.type === "Category") {
            return (
              <Card>
                <img
                  className="card-image"
                  onClick={() => modalHandler(data)}
                  key={data.id}
                  src={data.image_url}
                  alt={data.title}
                  id={data.id}
                />
                <Icon
                  icon="ic:round-star"
                  onClick={(e) => bookmarkHandler(data, e)}
                  className="bookmark"
                  style={bookmarked ? { color: "#FFD361" } : { color: "#fff" }}
                  bookmarked={bookmarked}
                  id={data.id}
                />
                <div className="title">#{data.title}</div>
              </Card>
            );
          }

          if (data.type === "Exhibition") {
            return (
              <Card>
                <img
                  className="card-image"
                  onClick={() => modalHandler(data)}
                  key={data.id}
                  src={data.image_url}
                  alt={data.title}
                  id={data.id}
                />
                <Icon
                  icon="ic:round-star"
                  onClick={(e) => bookmarkHandler(data, e)}
                  className="bookmark"
                  style={bookmarked ? { color: "#FFD361" } : { color: "#fff" }}
                  bookmarked={bookmarked}
                  id={data.id}
                />
                <div className="title">{data.title}</div>
                <div>{data.sub_title}</div>
              </Card>
            );
          } else {
            <>페이지 구현중입니다.</>;
          }
        })}
      </CardRow>

      {modalOpen && <Modal {...modalSelected} setModalOpen={setModalOpen} />}
    </>
  );
}
