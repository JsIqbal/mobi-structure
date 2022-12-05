import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import NavBar from '../features/dashboard/view/nav'

const DashLayout = () => {
    return (
        <div className='welcome-default'>
            <DashHeader />
            <div className="dash-container">
                <Outlet />
            </div>
            <DashFooter />
        </div>
    )
}
export default DashLayout