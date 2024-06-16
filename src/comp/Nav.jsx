import React, { useEffect } from 'react';
import styled from 'styled-components';
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
          transition: all 0.2s 0.3s;
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
`;

const Nav = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <StyledNav>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="page1"
            spy={true}
            isDynamic={true}
            smooth={true}
            hashSpy={true}
            containerId="cont"
          >
            Main
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="page2"
            hashSpy={true}
            smooth={true}
            isDynamic={true}
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
            hashSpy={true}
            smooth={true}
            to="page3"
            containerId="cont"
            ignoreCancelEvents={true}
            spy={true}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
