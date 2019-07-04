import styled from 'styled-components';
export const Header = styled.div`
    position: fixed;
    display:flex;
    align-items:center;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 3000;
    background:#fff;
    h1{
    width: 72%;
    text-align: center;
    font-size: 17px;
    }
    button{
        border:none;
        background:none;
        font-size: 30px;
        color:#ccc;
    }
`
export const CityInput = styled.div`
        align-items:center;
        z-index: 2000;
        padding: 9.5px 15px;
        background-color: #f4f4f4;
        position: fixed;
        top: 44px;
        width:100%;
        input{
            background-color: #fff;
            position: relative;
            display: inline-block;
            border-radius: 3px;
            width: 100%;
            height: 30px;
            border:none;
        }
        button{
        border:none;
        background:none;
        font-size: 20px;
        color:#ccc;
        }
`

export const CityList = styled.ul`
    margin-top:90px;
    p{
        display:block;
        width:100%;
        padding:10px;
        background:#f4f4f4;
    };
    >li>ul>li{
        padding:10px;
        border-bottom: 1px solid #f4f4f4;
    }
`