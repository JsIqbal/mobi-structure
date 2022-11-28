import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from './logout';

export default function TopNav () {
    return (
        <header className="header">
            {/* header */}
            <Navbar bg="dark" variant="dark">
                <Container className='container' >
                <Navbar.Brand href="#home">
                    <img 
                        src="https://pbs.twimg.com/profile_images/1217213081115406338/Y4zpmwte_400x400.jpg" className="nav-bg" 
                        style={{
                            height: "30px",
                            width: "98px"
                        }}
                        alt="logo" 
                    />
                </Navbar.Brand>
                <Nav className="ms-auto">
                        <Button>
                            Credits LKR.220.00 <i class="fa-solid fa-rotate-right"></i>
                        </Button>
                    <Logout className="ms-auto" />
                </Nav>
                </Container>
            </Navbar>
        </header>
    );
}