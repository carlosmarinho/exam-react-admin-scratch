import React from 'react';
//import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const menu = () => {
    return(
        <Nav pullRight>
            <LinkContainer to="/">
                <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/user">
                <NavItem eventKey={2}>Usuarios</NavItem>
            </LinkContainer>
            <LinkContainer to="/produtos">
                <NavItem eventKey={3}>Produtos</NavItem>
            </LinkContainer>
            <LinkContainer to="/conversas">
                <NavItem eventKey={4}>Conversas</NavItem>
            </LinkContainer>
            <LinkContainer to="/logout">
                <NavItem eventKey={5}>Sair</NavItem>
            </LinkContainer>
        </Nav>
    );

}

export default menu;