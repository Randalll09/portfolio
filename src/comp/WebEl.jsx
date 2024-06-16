import styled from 'styled-components';
import px2vw from '../data/px2vw';

const Div = styled.div`
  display: flex;
  width: 44vw;
  justify-content: space-between;
  > div.img {
    display: flex;
    align-items: center;
    height: ${px2vw(350)};
    > img {
      width: ${px2vw(400)};
      height: fit-content;
    }
  }
  > div.info {
    width: ${px2vw(400)};
    display: flex;
    justify-content: center;
    > div {
      > h2 {
        margin-top: 12px;
        text-align: center;
      }
      > p {
        margin-top: 12px;
        &:first-of-type {
          text-align: center;
        }
      }
      > div {
        margin-top: 12px;
        display: flex;
        gap: 12px;
        li {
          white-space: pre-wrap;
        }
      }
      a {
        text-align: center;
        width: 100%;
        display: block;
        margin-top: 24px;
        border: 1px solid ${({ theme }) => theme.colors.webButton};
        border-radius: 4px;
        line-height: 32px;
        background-color: white;
        transition: all 0.2s ease-in-out;
        &:hover {
          background-color: ${({ theme }) => theme.colors.webButton};
        }
      }
    }
  }
  @media only screen and (max-width: 1280px) {
    width: 64vw;
    justify-content: space-around;
    margin-right: 10vw;
    gap: 20px;
    > div.img {
      display: flex;
      height: ${px2vw(500)};
      align-items: center;
      > img {
        width: ${px2vw(600)};
        height: fit-content;
      }
    }
    > div.info {
      width: ${px2vw(600)};

      > div {
        > h2 {
          font-size: 20px;
        }
        > p {
          font-size: 14px;
        }
        > div {
          font-size: 14px;
          > li {
          }
        }
      }
      a.btn {
        margin-top: 12px;
        line-height: 22px;
        font-size: 14px;
      }
    }
  }
  @media only screen and (orientation: landscape) and (max-width: 960px) {
    margin-right: 0vw;
  }
  @media only screen and (orientation: portrait) {
    margin-right: 0vw;
    width: 100vw;
    height: 104vw;
    flex-direction: column;
    align-items: center;
    > div.img {
      align-items: normal;
      height: fit-content;
      > img {
        height: fit-content;
        width: 75vw;
      }
    }
    > div.info {
      width: 75vw;
      > div {
        h2 {
          font-size: 24px;
        }
        p {
          font-size: 14px;
        }
      }
      a.btn {
        margin-top: 24px;
        line-height: 32px;
        font-size: 14px;
        width: 75vw;
      }
    }
  }
`;

const WebEl = ({ data }) => {
  return (
    <Div>
      <div className="img">
        <img src={'/img/' + data.img} />
      </div>
      <div className="info">
        <div>
          <h2>{data.name}</h2>
          <p>{data.cont}</p>
          <div>
            <p>Program: </p>
            <ul>
              {data.program.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
          <p>참여도: {data.contribution}</p>
          <p>모바일: {data.mobile ? '모바일 지원' : '모바일 지원하지 않음'}</p>
          <a className="btn" href={data.site} target="blank">
            방문하기
          </a>
        </div>
      </div>
    </Div>
  );
};

export default WebEl;
