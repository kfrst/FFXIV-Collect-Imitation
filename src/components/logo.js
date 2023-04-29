import { FFXIVCollectLogo } from "../assets/images"
import { Link } from "react-router-dom"
import styled from "styled-components"

const DivLogo = styled.div`
  display: block;
`
const StyledLink = styled(Link)`
  display: flex;
  font-size: 1.25rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  line-height: inherit;
  align-items: center;
  margin-right: 1rem;
  color: #ddd;
  text-decoration: none;
  :visited {
    color: #fff;
    text-decoration: none;
  }
  :hover {
    color: #fff;
    text-decoration: none;
  }
  :active {
    color: #fff;
    text-decoration: none;
  }
`
const Image = styled.img`
  margin-right: 0.18rem;
`

const Logo = () => {
  return (
    <DivLogo>
      <StyledLink to={"/"}>
        <Image alt={"An Open Book Logo"} src={FFXIVCollectLogo} />
        FFXIV Collect
      </StyledLink>
    </DivLogo>
  )
}

export default Logo
