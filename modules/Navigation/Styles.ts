import styled from "@emotion/styled";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const SBNavbarDiv = styled.div`
    display: flex;
    width: 90%;
    max-width: 1110px;
    margin-right: auto;
    margin-left: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const SBNavbarWrapper = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 auto;
`

export const SBNavbar = styled(Navbar)`
    position: static;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`

export const SBNav = styled(Nav)`
    display: flex;
    margin-right: 12px;
    margin-left: 12px;
    align-items: center;
    transition: color .2s;
    font-family: Inter,sans-serif;
    color: #aaa;
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
    text-decoration: none;
`

export const SBNavDiv = styled(Navbar.Collapse)`
    display: flex;
    height: 100%;
    align-items: center;
    font-weight: 400;
`
export const SBNavLink = styled(Nav.Link)`
    display: flex;
    transition: color .2s;
    color: #aaa;
    font-size: 14px;
    font-weight: 600;
    font-family: Inter,sans-serif;
    line-height: 22px;
    text-decoration: none;
`

export const SBNavDropDown = styled(NavDropdown)`

`