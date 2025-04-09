import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  line-height: 100%;
  width: 384px;
  height: 82px;
  top: 176px;
  left: 528px;
  font-family: "Nunito Sans", sans-serif;
  gap: 5px;

  .git-logo {
    width: 58px;
    height: 58px;
    top: 186px;
    left: 528px;
  }
  .git-texto {
    width: 160px;
    height: 45px;
  }

  @media ${device.mobile} {
    font-size: 40px;
    .git-logo {
      width: 38px;
      height: 38px;
    }
    .git-texto {
      width: 130px;
      height: 35px;
    }
  }
`;
