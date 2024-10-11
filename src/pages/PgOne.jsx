import React, { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { motion, inView } from 'framer-motion';
import px2vw from '../data/px2vw';
import { defaultAnimation } from '../data/animate';

const Div = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.bgOne};
  position: relative;
  width: 100vw;
  height: 100vh;

  div.in {
    position: absolute;
    top: 45%;
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
  div.scroll {
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    height: fit-content;
    p {
      margin-bottom: 12px;
    }
    svg {
      width: ${px2vw(16)};
      min-width: 10px;
      display: block;
      margin: auto;
      path {
      }
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
  const innerAni = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  return (
    <Element name="page1" className="element">
      <Div>
        <motion.div
          className="in"
          initial="hidden"
          whileInView="visible"
          variants={defaultAnimation}
          viewport={{ once: false }}
        >
          <motion.h1 variants={innerAni}>WEB</motion.h1>
          <motion.h1 variants={innerAni}>PUBLISHER</motion.h1>
          <motion.h1 variants={innerAni}>NA HYEJIN</motion.h1>
          <motion.h2 variants={innerAni}>
            웹퍼블리셔 나혜진의 포트폴리오
          </motion.h2>
        </motion.div>
        <div className="scroll">
          <motion.p
            animate={{ y: [10, 0, 10] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Scroll Down
          </motion.p>
          <motion.svg
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </motion.svg>
        </div>
      </Div>
    </Element>
  );
};

export default PgOne;
