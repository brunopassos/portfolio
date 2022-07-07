import { Button } from "@chakra-ui/react";
import { StyledNav } from "./styles";

import { AiOutlineMenu } from "react-icons/ai";
import MenuList from "../MenuList";

function Header() {
  return (
    <>
      <StyledNav>
        <div>
          <span>bruno-passos</span>
          <Button size={"lg"} bg={"none"} variant="link">
            <AiOutlineMenu />
          </Button>
        </div>
      </StyledNav>
      <MenuList />
    </>
  );
}

export default Header;
