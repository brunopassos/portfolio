import styled from "styled-components";

export const ListSection = styled.section`
  height: 55vh;
  display: flex;
  align-items: end;
  width: 100%;
`;

export const StyledMenuList = styled.ul`
  
    flex-flow: column nowrap;
    background-color: #011627;

    li {
      height: 3.125rem;
      border-bottom: 1px solid #1e2d3d;
      color: #ffffff;
      display: flex;
      align-items: center;
      padding-left: 18px;
      font-weight: 400;
      font-size: 16px;
    }
  
`;

export const StyledFooterList = styled.ul`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    border-top: 1px solid #1e2d3d;

    li:nth-of-type(1) {
      border-left: none;
      width: 181px;
    }

    li {
      height: 3.125rem;
      border-left: 1px solid #1e2d3d;
      width: 52px;
      color: #ffffff;
      display: flex;
      align-items: center;
      padding: 11px 14px;
      font-weight: 400;
      font-size: 14px;
    }
  
`;
