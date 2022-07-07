import styled from "styled-components";


export const StyledMenuList = styled.ul`
    @media (max-width: 38rem){
        flex-flow: column nowrap;
        background-color: #011627;
        
        li{
            height: 3.125rem;
            border-bottom: 1px solid #1E2D3D;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            padding-left: 18px;
            font-weight: 400;
            font-size: 16px;
        }
    }
`