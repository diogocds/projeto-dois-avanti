import styled, { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";
import { device } from "../styles/breakpoints";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
  background: ${colors.primaryDarkColor};
  color: ${colors.infoColor};
  overflow-x: hidden;
}

html, body, #root{
  height: 100%;

}

button{
  width:62px;
  height:62px;
  cursor: pointer;
  background: ${colors.buttonColor};
  border:none;
  color:#fff;
  position:relative;
  left:230px;
  bottom:62px;
  border-radius: 10px;
  border: 1px solid #DDDDDD;
}

@media ${device.mobile}{
  button{
  width:52px;
  height:52px;
  left:138px;
  bottom:52px;
}
}

`;
export const Container = styled.section`
  width: 1156px;
  height: 537px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  justify-content: center;
  margin: 100px;
  background: black;
  z-index: 2;

  input {
    width: 503px;
    height: 62px;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid #dddddd;
  }

  .div-resposta {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 804px;
    height: 257px;
    border-radius: 25px;
    background-color: #d9d9d9;
  }

  .div-texto {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 448px;
    height: 80px;
    gap: 30px;
  }
  .div-texto h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 100%;
    color: #005cff;
  }
  .div-texto p {
    font-size: 15px;
    font-weight: 300;
    line-height: 100%;
    color: #000000;
  }

  .resposta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 700px;
    height: 220px;
  }

  .error-busca {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 718px;
    height: 88px;
    border-radius: 10px;
    background: #d9d9d9;
  }
  .error-busca p {
    width: 497px;
    height: 54px;
    text-align: center;
    font-size: 20px;
    font-weight: 400px;
    color: ${colors.errorColor};
  }

  .radial-bottom {
    z-index: 1;
    width: 674px;
    height: 674px;
    border-radius: 100%;
    position: absolute;
    background: radial-gradient(closest-side, #005cff, rgba(0, 0, 0, 0));
  }

  .image img {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 2px solid #005cff;
  }

  @media ${device.mobile} {
    width: 95%;
    height: 100%;
    input {
      width: 80%;
      height: 52px;
      padding-left: 10px;
      border-radius: 10px;
      border: 1px solid #dddddd;
    }
    .div-resposta {
      width: 95%;
      height: 257px;
    }

    .radial-bottom {
      width: 174px;
      height: 174px;
    }

    .error-busca {
      width: 90%;
    }

    .error-busca p {
      width: 80%;
      font-size: 16px;
    }

    .div-texto {
      width: 95%;
      height: 80px;
      gap: 10px;
    }
    .div-texto h2 {
      font-size: 16px;
    }
    .div-texto p {
      font-size: 12px;
    }

    .resposta {
      width: 90%;
      height: 220px;
      gap: 10px;
    }

    .image img {
      width: 80px;
      height: 80px;
      border: 1px solid #005cff;
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 384px;
  height: 82px;
  margin: 0 auto;
`;
export const DivRadialUm = styled.div`
  z-index: 3;
  width: 674px;
  height: 674px;
  border-radius: 100%;
  position: absolute;
  top: 150px;
  left: -500px;
  background: radial-gradient(closest-side, #005cff, rgba(0, 0, 0, 0));

  @media ${device.mobile} {
    top: 200px;
    left: -530px;
  }
`;

export const DivRadialDois = styled.div`
  z-index: 1;
  width: 674px;
  height: 674px;
  border-radius: 100%;
  position: absolute;
  top: -200px;
  right: -200px;
  background: radial-gradient(closest-side, #005cff, rgba(0, 0, 0, 0));

  @media ${device.mobile} {
    width: 500px;
    height: 500px;
    top: -200px;
    right: -400px;
  }
`;
export const DivElemento = styled.div`
  width: 239px;
  height: 225;
  position: absolute;
  left: 35px;
  top: 15px;
  z-index: 0;

  @media ${device.mobile} {
    width: 100px;
    height: 100px;
    left: 70px;
    top: 55px;
  }
`;
