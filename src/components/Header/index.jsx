import { Button } from "@chakra-ui/react";
import { StyledNav } from "./styles";

import { AiOutlineMenu } from "react-icons/ai";
import MenuList from "../MenuList";

import { useDispatch } from "react-redux";

import { openMenu } from "../../store/modules/MenuList/actions";

import {useState} from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  function handleIsOpen(){
    setIsOpen(!isOpen);
    dispatch(openMenu(isOpen));
  }
  

  return (
    <>
      <StyledNav>
        <div>
          <span>bruno-passos</span>
          <Button onClick={() => handleIsOpen()} size={"lg"} bg={"none"} variant="link">
            <AiOutlineMenu />
          </Button>
        </div>
      </StyledNav>
      <MenuList isOpen={isOpen}/>
    </>
  );
}

export default Header;
