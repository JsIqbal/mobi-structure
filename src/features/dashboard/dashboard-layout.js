import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap';

import NavBar from "./view/nav";
import TopNav from "./view/top-nav";

const Dashboard = () => {
    return (
        <>
            <TopNav />
            <section id='dashboard-main'>
                <Container>
                    <div className='row'>
                        <div className='col-lg-1'>
                            <NavBar />
                        </div>
                        <div className="col-lg-11">
                            <Outlet />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Dashboard;