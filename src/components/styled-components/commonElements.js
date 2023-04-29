import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ddd;
  :visited {
    color: #ddd;
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
  &.active {
    font-weight: bold;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #eee;
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
export const NormalLink = styled.a`
  color: #fff;
  text-decoration: underline;
  background-color: transparent;
  a:visited {
    color: #fff;
    text-decoration: underline;
  }
  :hover {
    color: #fff;
    text-decoration: underline;
  }
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
`
export const Spoiler = styled.span`
  background-color: #111;
  color: transparent;
  border-radius: 0.25rem;
  :hover {
    background-color: inherit;
    color: inherit;
  }
`