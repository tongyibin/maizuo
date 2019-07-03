// 主页的样式
import styled from 'styled-components'
export const HomeWarp = styled.div`
  display:flex;
  height: 100%;
  flex-direction:column;

`
// 内容
export const MainWarp = styled.div`
  background:#f4f4f4;
  height:100%;
  overflow-y: auto;
`
// 导航
export const NavWarp = styled.div`
  height: 50px;
  flex-shrink: 0;
  color: #797d82;
  display:flex;
  justify-content:space-around;
  align-items:center;
  .nav-bottom{
    display:flex;
    flex-direction:column;
    font-size: 10px;
    line-height: 12px;
  }
  .active{
    color: #ff5f16;
  }
`
