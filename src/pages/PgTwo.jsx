import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import px2vw from '../data/px2vw';
import { motion } from 'framer-motion';

const Div = styled(motion.div)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bgTwo};
  width: 100vw;
  height: 100vh;
  > div {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    position: absolute;
    font-size: 150px;
    opacity: 0.1;
    z-index: 0;
    left: 10%;
    top: 15%;
  }
  .info {
    > div {
      position: relative;
      &:nth-of-type(1) {
        display: flex;
        gap: ${px2vw(50)};
        margin: auto 0;
        width: 40%;
        margin-left: 15%;

        img {
          width: 180px;
          height: 240px;
          object-fit: cover;
        }
        > ul {
          > li {
            margin-bottom: 10px;
            line-height: 1.8;
            ul {
              li {
                margin-left: 10px;
              }
            }
          }
        }
      }
      &:nth-of-type(2) {
        border: 1px solid ${({ theme }) => theme.colors.barTwo};
        box-sizing: content-box;
        padding: 20px 30px 50px 5px;
        width: 40%;
        margin: auto 0;
        margin-right: 22%;
        h2 {
          text-align: center;
        }
        ul {
          margin-top: 20px;
          li {
            display: block;
            height: 30px;
            line-height: 30px;
            margin-top: 10px;
            position: relative;
            width: inherit;
            span {
              position: absolute;
              &:first-of-type {
                width: 100px;
                display: block;
                left: 0;
                text-align: right;
              }
              &:nth-of-type(2) {
                width: 50px;
                text-align: right;
                right: 0;
              }
            }
            &::before {
              position: absolute;
              left: 110px;
              height: calc(100% - 10px);
              margin-top: 5px;
              display: block;
              background-color: ${({ theme }) => theme.colors.barOne};
              content: '';
              width: calc(100% - 150px);
              border-radius: 0 20px 20px 0;
            }
            &::after {
              position: absolute;
              left: 110px;
              display: block;
              margin-top: 5px;

              height: calc(100% - 10px);
              content: '';
              background-color: ${({ theme }) => theme.colors.barTwo};
            }
            &:nth-child(1)::after {
              width: calc((100% - 160px) / 10 * 9);
            }
            &:nth-child(2)::after {
              width: calc((100% - 160px) / 10 * 8);
            }
            &:nth-child(3)::after {
              width: calc((100% - 160px) / 10 * 8);
            }
            &:nth-child(4)::after {
              width: calc((100% - 160px) / 10 * 7);
            }
            &:nth-child(5)::after {
              width: calc((100% - 160px) / 10 * 4);
            }
            &:nth-child(6)::after {
              width: calc((100% - 160px) / 10 * 8);
            }
            &:nth-child(7)::after {
              width: calc((100% - 160px) / 10 * 6);
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1280px) {
    h1 {
      font-size: 110px;
    }
    > div {
    }
    .info {
      > div {
        position: relative;
        &:nth-of-type(1) {
          display: flex;
          gap: ${px2vw(30)};
          margin: auto 0;
          width: 40%;
          margin-left: 12%;
          &::after {
            clear: both;
            display: block;
            content: '';
          }
          img {
            width: 120px;
            height: 180px;
            object-fit: cover;
          }
          > ul {
            > li {
              margin-bottom: 10px;
              line-height: 1.6;
              ul {
                li {
                }
              }
            }
          }
        }
        &:nth-of-type(2) {
          border: 1px solid ${({ theme }) => theme.colors.barTwo};
          box-sizing: content-box;
          padding: 20px 30px 50px 5px;
          width: 40%;
          margin: auto 0;
          margin-right: 18%;
          h2 {
            text-align: center;
          }
          ul {
            margin-top: 20px;
            li {
              display: block;
              height: 30px;
              line-height: 30px;
              margin-top: 10px;
              position: relative;
              width: inherit;
              span {
                font-size: 14px;
                position: absolute;
                &:first-of-type {
                  width: 78px;
                  display: block;
                  left: 0;
                  text-align: right;
                }
                &:nth-of-type(2) {
                  width: 10px;
                  text-align: right;
                  right: 0;
                }
              }
              &::before {
                position: absolute;
                left: 86px;
                height: calc(100% - 10px);
                margin-top: 5px;
                display: block;
                background-color: ${({ theme }) => theme.colors.barOne};
                content: '';
                width: calc(100% - 100px);
                border-radius: 0 20px 20px 0;
              }
              &::after {
                position: absolute;
                left: 86px;

                display: block;
                margin-top: 5px;

                height: calc(100% - 10px);
                content: '';
                background-color: ${({ theme }) => theme.colors.barTwo};
              }
              &:nth-child(1)::after {
                width: calc((100% - 100px) / 10 * 9);
              }
              &:nth-child(2)::after {
                width: calc((100% - 100px) / 10 * 8);
              }
              &:nth-child(3)::after {
                width: calc((100% - 100px) / 10 * 8);
              }
              &:nth-child(4)::after {
                width: calc((100% - 100px) / 10 * 7);
              }
              &:nth-child(5)::after {
                width: calc((100% - 100px) / 10 * 4);
              }
              &:nth-child(6)::after {
                width: calc((100% - 100px) / 10 * 8);
              }
              &:nth-child(7)::after {
                width: calc((100% - 100px) / 10 * 6);
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 960px) {
    > div {
      padding: 0 10%;
      align-items: center;
      justify-content: center;
    }
    .info {
      > div {
        &:nth-of-type(1) {
          display: flex;
          gap: ${px2vw(30)};
          margin: auto 0;
          img {
            width: 120px;
            height: 180px;
            object-fit: cover;
          }
          > ul {
            > li {
              margin-bottom: 10px;
              line-height: 1.6;
              font-size: 14px;
              ul {
                li {
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (orientation: portrait) {
    h1 {
      font-size: 72px;
      writing-mode: vertical-rl;
    }
    > div.info {
      padding: 96px 0;
      height: calc(100vh - 192px);
      flex-direction: column;
      gap: 16px;
      > div {
        &:nth-of-type(1) {
          width: 100%;
          margin-left: 0%;
          justify-content: center;
          flex-direction: row-reverse;
          gap: 30px;

          img {
            width: 106px;
            height: 164px;
          }
          > ul {
            > li {
              margin-bottom: 6px;
              line-height: 1.5;
              font-size: 12px;
            }
          }
        }
        &:nth-of-type(2) {
          width: 75%;
          padding: 10px 30px 30px 5px;
          margin-right: 0;
          h2 {
            font-size: 16px;
          }
          ul {
            margin-top: 10px;
          }
          li {
            margin-top: 8px;
            height: 20px;
            line-height: 20px;

            span {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;

const PgTwo = () => {
  return (
    <Element className="element" name="page2">
      <Div viewport={{ once: false }}>
        <h1>PROFILE</h1>
        <motion.div className="info">
          <div>
            <img src="img/ProfilePic.jpg" />
            <ul>
              <li>이름: 나혜진</li>
              <li>
                E-mail
                <br />
                &nbsp;-n96h09j09@outlook.kr
              </li>
              <li>
                Education
                <ul>
                  <li>
                    -2015.03 ~ 2020.02
                    <br />
                    한국외국어대학교
                    <br />
                    영미문학번역과
                  </li>
                  <li>
                    -2021.11 ~ 2022.04
                    <br />
                    세잔IT직업전문학교
                    <br />
                    UI,UX 퍼블리셔과정
                  </li>
                </ul>
              </li>
              <li>
                Lisence
                <ul>
                  <li>-웹디자인 기능사</li>
                  <li>-TOEIC 955점</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2>Skills</h2>
            <ul>
              <li>
                <span> HTML </span> <span>90%</span>
              </li>
              <li>
                <span> CSS/SCSS </span> <span>80%</span>
              </li>
              <li>
                <span> JavaScript </span> <span>80%</span>
              </li>
              <li>
                <span> React </span> <span>70%</span>
              </li>
              <li>
                <span> Typescript </span> <span>40%</span>
              </li>
              <li>
                <span> PhotoShop </span> <span>80%</span>
              </li>
              <li>
                <span> Illustrator </span> <span>60%</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </Div>
    </Element>
  );
};

export default PgTwo;
