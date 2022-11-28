import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import CampaignList from './campaign-list';
import CampainHome from './campaign-home';

const Campaign = () => {
    return (
        <>
            <CampaignList />
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default Campaign;