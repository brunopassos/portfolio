import { StyledMenuList, StyledFooterList, ListSection, StyledMenuContainer } from "./styles";

import { AiOutlineInstagram,  AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs"


function MenuList({isOpen}) {


  function handleFacebookClick(){
    console.log("Clicou no facebook")
  }

  function handleInstagramClick(){
    console.log("Clicou no Instagram")
  }

  function handleGithubClick(){
    console.log("Clicou no GitHub")
  }


  return (
    <StyledMenuContainer style={{display: isOpen ? "block" : "none"}}>
      <StyledMenuList >
          <li>_ola</li>
          <li>_sobre-mim</li>
          <li>_projetos</li>
          <li>_fale-comigo</li>
        </StyledMenuList>
      <ListSection>
        <StyledFooterList>
          <li>_me-encontre-em:</li>
          <li><button onClick={() => handleFacebookClick()}><AiOutlineInstagram/></button></li>
          <li><button onClick={() => handleInstagramClick()}><BsFacebook/></button></li>
          <li><button onClick={() => handleGithubClick()}><AiFillGithub/></button></li>
        </StyledFooterList>
      </ListSection>
    </StyledMenuContainer>
  );
}

export default MenuList;
