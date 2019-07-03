import Styled from 'styled-components'
export const MainWrap = Styled.div`
  background:#fff;
  height: 100%;
  ul{
    list-style: none;
    padding: 0;
    margin-left: 15px;
    margin-bottom: 0;
    margin-top: 0;
    dispaly:flex;
    display:block;
    li{
      overflow: hidden;
    }
  }
`
export const MovieLi = Styled.div`
      display:block;
      margin: 15px 15px 15px 0;
      height: 94px;
      position: relative;
      display:flex;
      align-items:center;
      .movieimg{
        width: 66px;
        height: 94px;
        opacity: 1;
        display: block;
        img{
          width: 100%;
        }
      }
      .movie-details{
        width: calc(100% - 116px);
        padding: 0 10px;
        .movie-name,.movie-num,.movie-actor..movie-nation{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
      }

          .movie-name-l{
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
            overflow: hidden;
          }
          .movie-name-r{
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
          }

          .movie-num-r{
            color: #ffb232;
            font-size: 14px;
          }
          .movie-num-l,.movie-actor-l,.movie-nation-c{
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
        }
        .movie-buy{
            line-height: 25px;
            height: 25px;
            width: 50px;
            color: #ff5f16;
            font-size: 13px;
            text-align: center;
            border: 1px solid #ff5f16;
            border-radius: 4px;
          }

`
