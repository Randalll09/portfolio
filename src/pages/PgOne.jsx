import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.bgOne};
  position: relative;
  width: 100vw;
  height: 100vh;

  div.in {
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-50%);
    h1 {
      white-space: pre-wrap;
      font-size: 100px;
      line-height: 1.2;
      letter-spacing: -5px;
      font-weight: black;
      display: block;
      width: fit-content;
      &:nth-of-type(3) {
        position: relative;
        z-index: 10;
        &::before {
          z-index: -1;
          background-color: ${({ theme }) => theme.colors.highlightColor};
          border-radius: 24px;
          display: block;
          position: absolute;
          content: '';
          top: 2px;
          left: 0;
          width: 105%;
          height: 100%;
        }
      }
    }
    h2 {
      line-height: 2;
      font-size: 36px;
    }
  }
  @media only screen and (orientation: portrait) {
    div.in {
      left: 5%;
      h1 {
        font-size: 62px;
      }
      h2 {
        line-height: 2;
        font-size: 24px;
      }
    }
  }
`;

const PgOne = () => {
  return (
    <Element name="page1" className="element">
      <Div>
        <div className="in">
          <h1>WEB</h1>
          <h1>PUBLISHER</h1>
          <h1>NA HYEJIN</h1>
          <h2>웹퍼블리셔 나혜진의 포트폴리오</h2>
        </div>
      </Div>
    </Element>
  );
};

export default PgOne;
