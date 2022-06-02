import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import { Link } from "react-router-dom";
class NavBar extends React.Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Link to="/"><Navbar.Brand>Home</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Movies" id="collasible-nav-dropdown">
                                    <NavDropdown.Item><Link to="/movies/popular">Popular</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/movies/now_playing">Now Playing</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/movies/upcoming">Upcoming</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/movies/top_rated">Top Rated</Link></NavDropdown.Item>
                                </NavDropdown>


                                <NavDropdown title="TV Show" id="collasible-nav-dropdown">
                                    <NavDropdown.Item ><Link to="/tv-show/popular">Popular</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/tv-show/airing_today">Airing Today</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/tv-show/on_the_air">On Tv</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/tv-show/top_rated">Top Rated</Link></NavDropdown.Item>
                                </NavDropdown>

                            </Nav>
                            <Nav >
                                <Nav.Link><Link to="/login">Đăng nhập</Link></Nav.Link>
                                <Nav.Link eventKey={2}>
                                    <Link to="/createAccout">Đăng ký</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            </>
        )
    }
}

export default NavBar