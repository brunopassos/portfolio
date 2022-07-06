import { Button } from "@chakra-ui/react";
import { StyledNav } from "./styles";

import { AiOutlineMenu } from "react-icons/ai";
import MenuList from "../MenuList";

function Header() {
  function handleMenuOptions() {
    console.log("click menu options");
  }

  return (
    <StyledNav>
      <span>bruno-passos</span>
      
       <Button size={'lg'} bg={"none"} variant="link" onClick={() => handleMenuOptions()}>
        <AiOutlineMenu />
      </Button>

      
    </StyledNav>
  );
}

export default Header;
