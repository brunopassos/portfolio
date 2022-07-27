import {
  StyledMenuList,
  StyledFooterList,
  ListSection,
  StyledMenuContainer,
} from "./styles";

import { useState } from "react";

import { AiFillGithub } from "react-icons/ai";

function MenuList({ isOpen }) {
  const [aboutMe, setAboutMe] = useState(false);

  function handleAboutMe() {
    setAboutMe(!aboutMe);
  }

  const [projects, setProjects] = useState(false);

  function handleProjects() {
    setProjects(!projects);
  }

  const [talkToMe, setTalkToMe] = useState(false);

  function handletalkToMe() {
    setTalkToMe(!talkToMe);
  }

  return (
    <StyledMenuContainer style={{ display: isOpen ? "block" : "none" }}>
      <StyledMenuList>
        <li onClick={() => handleAboutMe()}>
          _sobre-mim 
        </li>
        {aboutMe && <>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veritatis eos exercitationem sapiente veniam delectus animi sed, placeat id magnam explicabo? Quaerat esse quasi molestiae quia sit reiciendis explicabo odit.</>}
        <li onClick={() => handleProjects()}>_projetos</li>
        {projects && <>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veritatis eos exercitationem sapiente veniam delectus animi sed, placeat id magnam explicabo? Quaerat esse quasi molestiae quia sit reiciendis explicabo odit.</>}
        <li onClick={() => handletalkToMe()}>_fale-comigo</li>
        {talkToMe && <>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veritatis eos exercitationem sapiente veniam delectus animi sed, placeat id magnam explicabo? Quaerat esse quasi molestiae quia sit reiciendis explicabo odit.</>}
        <li >
          _me-encontre-em:
          <a href="https://github.com/brunopassos" target="_blank">
            <AiFillGithub />
          </a>
        </li>
      </StyledMenuList>
    </StyledMenuContainer>
  );
}

export default MenuList;
