import styled from "styled-components"
import { NormalLink } from "./styled-components/commonElements"

const StyledFooter = styled.footer`
  text-align: center;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <span>Created by <NormalLink href="https://github.com/mattantonelli" target="_blank" rel="noopener noreferrer">Raelys Skyborn</NormalLink> of Behemoth | Replicated by Rockaway</span>
    </StyledFooter>
  )
}
