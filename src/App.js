import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'
import Registration from './features/auth/register';
import ForgotPassword from './features/auth/forgot-pass';
import Dashboard from './features/dashboard/dashboard';
import Profile from './features/dashboard/view/profile';
import Campaign from './features/dashboard/view/campaign/campain-layout';
import Report from './features/dashboard/view/report';
import DashBoardMain from './features/dashboard/view/dashboard-main';
import CampainHome from './features/dashboard/view/campaign/campaign-home';

import('./styles/dashboard.scss');

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Public />} />
                <Route path="login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path='/reset-password' element={<ForgotPassword />} />

                <Route path="/dash" element={<DashLayout />}>
                    <Route index element={<Welcome />} />
                    <Route path="notes">
                        <Route index element={<NotesList />} />
                    </Route>

                    <Route path="users">
                        <Route index element={<UsersList />} />
                    </Route>
                    
                </Route>{/* End Dash */}
            </Route>
            <Route path='/my-dash' element={<Dashboard />} >
                <Route index element={<DashBoardMain />} />
                <Route path='/my-dash/profile'>
                    <Route index element={<Profile />} />
                </Route>
                <Route path='/my-dash/campaign' element={<Campaign />}>
                    <Route index element={<CampainHome />} />
                    <Route path='/my-dash/campaign/sms'>
                        <Route index element={<h1>Hello world</h1>} />
                    </Route>
                </Route>
                <Route path='/my-dash/report'>
                    <Route index element={<Report />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
