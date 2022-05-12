import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import NavigationMenu from "./NavigationMenu/NavigationMenu.jsx";

const Navigation = () => {
    return (
        <>
        <Navbar className="navigation" fixed="top" variant="dark">
            <Container>
                <NavigationMenu />
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Navigation;