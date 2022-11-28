import { useNavigate } from 'react-router-dom';

function Logout (props) {
    let navigate = useNavigate();
    const logout = () => {
        console.log(localStorage)
        localStorage.clear();
        navigate('/login');
    };
    return (
        <>
            <div className='col-lg-2 ms-auto'>
                <button className='btn btn-danger' onClick={logout}>logout</button>
            </div>
        </>
    );
}

export default Logout;