import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 60px;
  gap: 5px;
  line-height: 100%;
  font-family: "Nunito Sans", sans-serif;

  .git-logo {
    width: 58px;
    height: 58px;
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
