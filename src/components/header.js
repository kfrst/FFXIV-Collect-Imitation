import styled from "styled-components"
import Logo from "./logo"
import User from "./user"

const HeaderNav = styled.nav`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.8em;
  justify-content: space-between;
  color: white;
  background-color: #191919;
  padding: 0.25rem 1rem;
  z-index: 200;
`
export const Header = () => {
  return (
    <HeaderNav>
      <Logo />
      <User />
    </HeaderNav>
  )
}
