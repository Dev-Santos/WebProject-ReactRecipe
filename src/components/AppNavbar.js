import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

const AppNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">React-Recipes</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/foodnews">Food News</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/foodtrends">Food Trebds</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/myrecipes">My Recipes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/addRecipe">Add Recipe</NavLink>
                    </NavItem>                    
                </Nav>
                <Nav className="mr-0" navbar>
                    <NavItem>
                        <NavLink href="/login">Login/Sign-up</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>          
        </div>
    );
}

export default AppNavbar;