import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        // <nav id="navigation">
            // <ul className="overflow-auto">
            //     <li>
            //         <Link className="icon" to='/my-dash' >
            //             <i className="fas fa-desktop"></i><p className="icon-title">Dashboard</p>
            //         </Link>
            //     </li>
            //     <li>
            //         <Link to='/my-dash/profile' className="icon">
            //             <i className="fas fa-users"></i><p className="icon-title">Profile</p>
            //         </Link>
            //     </li>
            //     <li>
            //         <Link to='/my-dash/campaign' className="icon">
            //             <i className="fas fa-users"></i><p className="icon-title">Campaign</p>
            //         </Link>
            //     </li>
            //     <li>
            //         <Link to='/my-dash/report' className="icon">
            //             <i className="fas fa-users"></i><p className="icon-title">Report</p>
            //         </Link>
            //     </li>
            // </ul>
        // </nav>
        <Navbar bg="dark" variant="dark">
            <Container className='container' >
                <Nav className="ms-auto" style={{height: "100vh"}}>
                {/* <Link className="icon" to='/my-dash' >
                       <i className="fas fa-desktop"></i><p className="icon-title">Dashboard</p>
                  </Link>
                <Link to='/my-dash/profile' className="icon">
                        <i className="fas fa-users"></i><p className="icon-title">Profile</p>
                    </Link>
                <Link to='/my-dash/campaign' className="icon">
                        <i className="fas fa-users"></i><p className="icon-title">Campaign</p>
                    </Link>
                    <Link to='/my-dash/report' className="icon">
                        <i className="fas fa-users"></i><p className="icon-title">Report</p>
                    </Link> */}
                    <ul className="overflow-auto">
                <li>
                    <Link className="icon" to='/my-dash' >
                        <i className="fas fa-desktop"></i><p className="icon-title">Dashboard</p>
                    </Link>
                </li>
                <li>
                    <Link to='/my-dash/profile' className="icon">
                        <i className="fas fa-users"></i><p className="icon-title">Profile</p>
                    </Link>
                </li>
                <li>
                    <Link to='/my-dash/campaign' className="icon">
                        <i className="fas fa-users"></i><p className="icon-title">Campaign</p>
                    </Link>
                </li>
                <li>
                    <Link to='/my-dash/report' className="icon">
                        <i className="fas fa-users"></i><p className="icon-title">Report</p>
                    </Link>
                </li>
            </ul>
                </Nav>
            </Container>
        </Navbar>
    );
}
 
export default NavBar;