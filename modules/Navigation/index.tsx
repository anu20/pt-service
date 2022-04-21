import {FC} from 'react';
import {Container, Navbar, NavDropdown, Nav, Button} from 'react-bootstrap';

import {SBNavbar, SBNav, SBNavDiv, SBNavbarDiv, SBNavbarWrapper, SBNavLink, SBNavDropDown} from './Styles';

const Navigation: FC<any> = () => {
    return (
        <SBNavbarDiv>
            <SBNavbarWrapper>
                <SBNavbar variant="light" bg="none" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home"><h3>Spotbuk</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <SBNavDiv id="basic-navbar-nav">
                    <SBNav>
                        <SBNavDropDown title="Solutions" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Work</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </SBNavDropDown>
                        <SBNavLink href="#link">Customers</SBNavLink>
                        <SBNavLink href="#link">Work</SBNavLink>
                        <SBNavLink href="#link">Pricing</SBNavLink>
                        <SBNavLink href="#link">Locations</SBNavLink>
                        <SBNavDropDown title="Help" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Work</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </SBNavDropDown>
                        <SBNavLink href="#link">Blog</SBNavLink>   
                    </SBNav>
                    </SBNavDiv>
                    
                    <Button variant="outline-success">Book Now</Button>
                    
                </Container>
                </SBNavbar>
            </SBNavbarWrapper>
        </SBNavbarDiv>
    )
}

export default Navigation;