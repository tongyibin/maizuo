import styled from 'styled-components'

export const Header = styled.div`
  background: #fff;
  width:100%;
  color:#000;
  border-bottom:1px #ccc solid;
  position: fixed;
  top:0;
  a{
    color:#000;
  }
  .citySelection{
    height:44px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    border-bottom:1px #ccc solid;
    li{
      margin:0 10px;
    }
  }
  .lookOver{
    height:50px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    li{
      width:33.3%;
      text-align:center;
    }
  }
`
export const List = styled.div`
ul{
  margin-top:110px;
}
ul>li{
  background:#fff;
  display:flex;
  justify-content: space-between;
  padding:15px;
  line-height:30px;
  .lowPrice{
    color: #ff5f16;
    font-weight:600;
  }
}
`