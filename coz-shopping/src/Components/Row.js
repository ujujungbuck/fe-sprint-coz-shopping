import axios from "../api/axios"; //생성한 인스턴스에서 가져오게
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { Icon } from "@iconify/react";
import BrandCard from "./BrandCard";
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";
import ExhibitionCard from "./ExhibitionCard";

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Card = styled.div`
  margin: 20px;
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

const Row = ({ title, id, fetchUrl }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get(fetchUrl);
    //console.log(response);
    setDatas(response.data);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSelected, setModalSelected] = useState({});
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkSelected, setBookmarkSelected] = useState({});
  //const [catogorized, setCategorized] = useState

  const bookmarkHandler = (data, e) => {
    if (e.currentTarget.id === data.id) {
      data.id = data.id + "bookmarked";
      console.log(data.id);
      setBookmarked(bookmarked ? false : true);
    }
    setBookmarkSelected({ ...{ id: data.id, bookmarked } });
    console.log(bookmarkSelected);
  };

  const modalHandler = (data) => {
    setModalOpen(true);
    setModalSelected(data);
  };

  return (
    <>
      <CardRow>
        {datas.map((data) => {
          if (data.type === "Brand") {
            return (
              <Card>
                <BrandCard data={data} />
              </Card>
            );
          }

          if (data.type === "Product") {
            return (
              <Card>
                <ProductCard data={data} />
              </Card>
            );
          }

          if (data.type === "Category") {
            return (
              <Card>
                <CategoryCard data={data} />
              </Card>
            );
          }

          if (data.type === "Exhibition") {
            return (
              <Card>
                <ExhibitionCard data={data} />
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
};

export default Row;
