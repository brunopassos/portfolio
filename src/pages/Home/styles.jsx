import styled from "styled-components";


export const HomeContent = styled.section`
  width: 90%;
  height: 95%;
  background: #011627;
  border: 1px solid #1e2d3d;
  border-radius: 8px;

  
`;

export const MiddleContent = styled.section`
  width: 90%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 3.563rem;
    
    h3 {
      color: #E5E9F0;
      font-size: 1.125rem;
      font-weight: 450;
    }

    h1{
      font-size: 3.875rem;
      color: #E5E9F0;
      line-height: 3.5rem;
      margin-top: 0.625rem;
      font-weight: 400;
    }

    p{
      color: #43D9AD;
      font-size: 1.15rem;
      font-weight: 450;
    } 
`
export const FooterContent = styled.section`

  padding-left: 3.563rem;

  h3{
    color: #607B96;
    font-size: 0.775rem;
    font-weight: 450;
  }

  p{
    color: #FFFFFF;
    font-size: 0.875rem;
    font-weight: 500;

    span{
      color: #4D5BCE;
    }

    span + span{
      color: #43D9AD;
    }

    span + span + span{
      color: #E99287;
    }
  }
`
