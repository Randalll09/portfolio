import { useState } from 'react';
import styled from 'styled-components';
import { webData } from '../data/webData';
import WebEl from '../comp/WebEl';
import { Element } from 'react-scroll';
import { AnimatePresence } from 'framer-motion';

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.bgThree};
  position: relative;
  h1 {
    position: absolute;
    font-size: 150px;
    opacity: 0.1;
    z-index: 0;
    right: 15%;
    bottom: 15%;
  }
  .element {
    width: 100vw;
    height: 100vh;
  }
  div.cont {
    > ul.nav {
      width: 200px;
      display: flex;
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translateX(-50%);
      justify-content: space-around;
      li {
        width: 10px;
        height: 10px;
        border-radius: 7px;
        background-color: ${({ theme }) => theme.colors.webButton};
        cursor: pointer;
        transition: all 0.2s;
        border: 2px solid ${({ theme }) => theme.colors.webButton};
        &.current {
          background-color: white;
        }
        &:hover {
          background-color: white;
        }
      }
    }
    > .flex {
      width: 100vw;
      top: 35%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
      button.nav {
        width: 32px;
        height: 32px;
        border: 2px solid ${({ theme }) => theme.colors.webButton};
        background-color: white;
        border-radius: 100%;
        cursor: pointer;
        font-size: 20px;
        text-align: center;
        line-height: 20px;
        color: ${({ theme }) => theme.colors.webButton};
        transition: all 0.2s;
        &:hover {
          color: white;
          background-color: ${({ theme }) => theme.colors.webButton};
        }
      }
    }
    .port {
      display: flex;
    }
  }
  @media only screen and (max-width: 1280px) {
    h1 {
      font-size: 110px;
    }
    div.cont {
      ul.nav {
        top: 8%;
      }
      > .flex {
        button.nav {
          display: none;
        }
        position: absolute;
        width: 100vw;

        display: flex;
        justify-content: center;
        align-items: center;
        .port {
        }
      }
    }
  }
  @media only screen and (max-width: 960px) {
    div.cont {
      ul.nav {
        top: auto;
        bottom: 8%;
      }
    }
  }
  @media only screen and (orientation: portrait) {
    h1 {
      font-size: 72px;
      writing-mode: vertical-rl;
    }
    div.cont {
      .flex {
        top: 10vh;
        width: 100vw;
        height: calc(90vh - 96px);
        display: flex;
        justify-content: center;
        align-items: center;
        .port {
        }
        button.nav {
          display: none;
        }
      }
      ul.nav {
        z-index: 10;
        bottom: 5%;
        > li {
          width: 20px;
          cursor: pointer;
          border-radius: 12px;
        }
      }
    }
  }
`;

const PgThree = () => {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const onClickBtn = (direction) => {
    if (direction < 0) {
      setDirection(-1);
      setIdx((i) => (i - 1 < 0 ? webData.length - 1 : i - 1));
    } else {
      setDirection(1);
      setIdx((i) => (i + 1 > webData.length - 1 ? 0 : i + 1));
    }
  };
  return (
    <Div>
      <Element name="page3" className="element">
        <h1>PORTFOLIO</h1>
        <div className="cont">
          <ul className="nav">
            {webData.map((v, i) => (
              <li
                key={i}
                onClick={() => setIdx(i)}
                className={idx == i ? 'current' : ''}
              ></li>
            ))}
          </ul>
          <div className="flex">
            <button className="nav" onClick={() => onClickBtn(-1)}>
              {'<'}
            </button>
            <div className={'port'}>
              <AnimatePresence>
                <WebEl data={webData[idx]} direction={direction} />
              </AnimatePresence>
            </div>
            <button className="nav" onClick={() => onClickBtn(1)}>
              {'>'}
            </button>
          </div>
        </div>
      </Element>
    </Div>
  );
};

export default PgThree;
