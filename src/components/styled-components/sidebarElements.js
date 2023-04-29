import styled from "styled-components"
import { StyledNavLink, StyledLink } from "./commonElements"

const SidebarNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #222;
  z-index: 100;
  padding-top: 3.8rem;
  display: block !important;
`
export const Sidebar = styled.div`
  /* position: relative; */
  position: sticky;
  top: 0;
  padding-left: 1rem;
  width: 250px;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - 58px);
`
export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
`
export const SidebarTitle = styled.span`
  padding-left: 5px;
`
export const SidebarArrow = styled.span`
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
`

export const ExternalLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  padding-left: 0;
  padding-right: 0;
  color: #ddd;
  i {
    width: 1.5rem;
    text-align: center;
  }
  text-decoration: none;
  :visited {
    color: #ddd;
    text-decoration: none;
  }
  :hover {
    color: #fff;
    text-decoration: none;
  }
`
export const SideMenuStyledNavLink = styled(StyledNavLink)`
  display: block;
  padding: 0.5rem 1rem;
  padding-left: 0;
  padding-right: 0;
  color: #ddd;
  i {
    width: 1.5rem;
    text-align: center;
  }
`
export const SideMenuStyledLink = styled(StyledLink)`
  display: block;
  padding: 0.5rem 1rem;
  padding-left: 0;
  padding-right: 0;
  color: #ddd;
  i {
    width: 1.5rem;
    text-align: center;
  }
`
export const SideDropdown = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
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
SidebarNav.Sidebar = Sidebar
SidebarNav.Content = SidebarContent
SidebarNav.NavLink = SideMenuStyledNavLink
SidebarNav.Link = SideMenuStyledLink
SidebarNav.ExternalLink = ExternalLink
SidebarNav.Title = SidebarTitle
SidebarNav.Arrow = SidebarArrow

export default SidebarNav