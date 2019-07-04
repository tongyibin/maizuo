import Styled from 'styled-components'
export const MainWarp = Styled.div`
  height:100%;
  display: flex;
  justify-content: space-around;
  height: 49px;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  line-height:49px;
  background:#fff;
  position: relative;

  width: 100%;
  z-index: 100;
  .active{
    color: #ff5f16;
    position: relative;
    margin-top:-1px;
    border-bottom:4px solid #ff5f16;
  }


`
export const Movietop = Styled.div`
.movie-top{
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 3000;
    background-color: #fff;
    line-height: 44px;
    display:none;
    .movie-city{
      margin-left: 15px;
      flex-shrink: 0;
    }
    .movie-title{
      font-size: 17px;
      width:100%;
    }
    .movie-display{
      display: flex;
    }
  }

`
