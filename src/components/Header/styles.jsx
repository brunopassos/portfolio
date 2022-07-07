import styled from "styled-components";

export const StyledNav = styled.nav`

   width: 100%;
   height: 50px;
   display: flex;
   flex-direction: column;
   

   color: #607B96;

   border-bottom: 1px solid #1E2D3D;

   font-size: 1rem;



    *{
        margin: 0;
        padding: 0;
    }

    span{
        padding-left: 18px;
    }


    ul{
        display: flex;

    }   
    
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 150px;
    }

`
