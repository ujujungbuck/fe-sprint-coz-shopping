import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link, Routes } from "react-router-dom";
import styled from "styled-components";

export const Head = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  z-index: 0;
  margin-bottom: 100px;
  .inner {
    height: 60px;
    width: 1440px;
    margin: 0 auto;
  }
  .logo {
    margin-right: 10px;
    display: flex;
  }
  .title {
    font-style: bold;
    font-size: 30px;
    margin-left: 10px;
  }
  .icon {
    margin-left: 0;
  }
`;

export const Modal = styled.div`
  height: 120px;
  box-shadow: 0px 0px 6px 0px #00000040;
  background-color: #ffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1310px;
  margin-right: 1%;
  position: absolute;
  padding: 15px;
  z-index: 1300;
  position: fixed;

  .triangle {
    width: 30px;
    background-color: #ffff;
    height: 30px;
    border-radius: 4px;
    box-shadow: -2px 2px rgb(178 178 178 / 0.3);
    transform: rotate(135deg);
    position: absolute;
    top: -12px;
    margin-left: 50%;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export default function Header({ datas }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <div className="inner">
          <Menu>
            <div className="logo">
              <Link to="/">
                <img src="/codelogo.png" alt="logo" />
              </Link>

              <div className="title">COZ Shopping</div>
            </div>
            <div className="icon">
              <Icon
                onClick={() => setIsOpen(isOpen ? false : true)}
                icon="material-symbols:menu-rounded"
              />
            </div>
          </Menu>
          {isOpen ? (
            <Modal>
              <div className="triangle"></div>
              <div className="modalcontent" isOpen={isOpen}>
                <p>OOO님, 안녕하세요!</p>
                <p>
                  <Link to="/products/list">
                    <Icon icon="simple-line-icons:present" />
                    상품리스트 페이지
                  </Link>
                </p>
                <p>
                  <Link to="/bookmark">
                    <Icon icon="ic:round-star-border" />
                    북마크 페이지
                  </Link>
                </p>
              </div>
            </Modal>
          ) : null}
        </div>
      </Head>
    </>
  );
}
