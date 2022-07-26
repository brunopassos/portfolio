import {
  StyledMenuList,
  StyledFooterList,
  ListSection,
  StyledMenuContainer,
} from "./styles";

import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function MenuList({ isOpen }) {
  
  function handleGithubClick() {
    console.log("Clicou no GitHub");
  }

  return (
    <StyledMenuContainer style={{ display: isOpen ? "block" : "none" }}>
      <StyledMenuList>
        <li>_ola</li>
        <li>_sobre-mim</li>
        <li>_projetos</li>
        <li>_fale-comigo</li>
        <li>
          () => meEncontreEm(
          <a href="https://github.com/brunopassos" target="_blank">
            <AiFillGithub />
          </a>
          )
        </li>
      </StyledMenuList>
    </StyledMenuContainer>
  );
}

export default MenuList;
