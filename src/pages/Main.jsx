import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import PgOne from './PgOne';
import PgTwo from './PgTwo';
import PgThree from './PgThree';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const StyledNav = styled.nav`
  position: fixed;
  right: 15%;
  z-index: 4;
  top: 50%;
  transform: translateY(-50%);
  > ul {
    > li {
      width: 64px;
      cursor: pointer;
      margin: 10px 0;
      font-size: 18px;
      margin: 10px 0;
      padding: 4px;
      a {
        border-radius: 8px;
        position: relative;
        &::before {
          position: absolute;
          transition: all 0.2s 0.2s;
          width: 0px;
          height: 2px;
          content: '';
          bottom: 0;
          left: 0;
          display: block;
        }
        &.active {
          &::before {
            width: 100%;
            background-color: ${({ theme }) => theme.colors.highlightColor};
          }
        }
      }
    }
    > .current {
    }
  }
  @media only screen and (max-width: 1280px) {
    right: 8%;
  }
  @media only screen and (max-width: 960px) {
    top: 64px;
    right: 0;
    ul {
      width: 100vw;
      display: flex;
      justify-content: center;
    }
  }
  @media only screen and (orientation: portrait) {
    top: 32px;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow-y: auto; */
  scroll-snap-type: ${({ isScrolling }) => (isScrolling ? 'y' : 'y mandatory')};
  max-width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  > div {
    scroll-snap-align: start;
    width: 100vw;
    height: 100vh;
  }
`;

const Main = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      setScrolling(true);
    });
    Events.scrollEvent.register('end', () => {
      setScrolling(false);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  // const handleSetActive = (to) => {
  //   console.log(to);
  // };
  return (
    <>
      <Div id="cont" isScrolling={scrolling}>
        <StyledNav>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="page1"
                spy={true}
                smooth={true}
                duration={500}
                containerId="cont"
              >
                Main
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="page2"
                smooth={true}
                spy={true}
                containerId="cont"
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                to="page3"
                containerId="cont"
                spy={true}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </StyledNav>
        <PgOne />
        <PgTwo />
        <PgThree />
      </Div>
    </>
  );
};

export default Main;
