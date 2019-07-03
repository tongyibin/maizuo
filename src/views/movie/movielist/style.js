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
  .active{
    color: #ff5f16;
    position: relative;
    margin-top:-1px;
    border-bottom:4px solid #ff5f16;
  }

`
