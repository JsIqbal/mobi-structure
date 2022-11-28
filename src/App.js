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

          <Route path="/dash/my-dash">
            <Route index element={<Dashboard />} />
          </Route>
          
        </Route>{/* End Dash */}
        
          

      </Route>
      
    </Routes>
  );
}

export default App;
