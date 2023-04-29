import styled from "styled-components"
import { StyledLink } from "./commonElements"

const Dropdown = styled.div`
  position: absolute;
  background-color: #282828;
  white-space: nowrap;
  max-height: calc(90vh - 58px);
  overflow-y: auto;
  z-index: 1000;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`
export const DropdownContainer = styled.div`
  position: relative;
`
export const DropdownLink = styled(StyledLink)`
  display: block;
  width: 100%;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 0.4rem 1rem;
  font-weight: bold;
`
export const DropdownTitle = styled.span`
  padding-left: 5px;
`
Dropdown.Link = DropdownLink
Dropdown.Title = DropdownTitle
Dropdown.Container = DropdownContainer

export default Dropdown