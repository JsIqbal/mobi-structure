import DashBoardMain from "./view/dashboard-main";
import NavBar from "./view/nav";
const Dashboard = () => {
    return (
        <section id="main-container">
            <NavBar />
            <DashBoardMain />
        </section>
    );
}

export default Dashboard;