import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,


} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import '../../style/navbar.scss'
const NavbarPr = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >
            <Navbar light  expand="md">
            <div className="container">
                <NavLink to="/">
                    <NavbarBrand className="mr-5" >
                        <img  src="/img/logo.png" alt=""/>
                    </NavbarBrand>
                </NavLink>
                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to='/'>Xizmatlar</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/'>Loyihalar</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/'>Biz haqimizda</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/'>+998 (71) 299-86-88</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/'>
                                <img src="/img/search.png" alt=""/>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <div className="s-b">
                        Savol berish
                    </div>

                </Collapse>

            </div>
            </Navbar>
        </div>
    );
}

export default NavbarPr;