const NavBar = () => {
    return (
        <nav id="navigation">
            <img src="https://pbs.twimg.com/profile_images/1217213081115406338/Y4zpmwte_400x400.jpg" class="nav-bg" alt="logo" />
            <ul className="overflow-auto">
                <li>
                    <a className="icon" href="_">
                        <i class="fas fa-desktop"></i><p class="icon-title">Dashboard</p>
                        
                    </a>
                </li>

                <li>
                    <a href="_" className="icon">
                        <i class="fas fa-users"></i><p class="icon-title">Customers</p>
                    </a>
                </li>

                <li>
                    <a href="_" className="icon">
                    <i class="fas fa-file-powerpoint"></i><p class="icon-title">Projects</p>
                    </a>
                </li>

                <li>
                    <a href="_" className="icon">
                    <i class="fas fa-file-powerpoint"></i><p class="icon-title">Orders</p>
                    </a>
                </li>

                <li>
                    <a href="_" className="icon">
                    <i class="fas fa-file-invoice-dollar"></i><p class="icon-title">Income</p>
                    </a>
                </li>

                <li>
                    <a href="_" className="icon">
                    <i class="fas fa-user"></i><p class="icon-title">Account</p>
                    </a>
                </li>

                <li>
                    <a style={{marginBottom: "53px"}} href="_" className="icon">
                    <i class="fas fa-sign-out-alt"></i><p class="icon-title">Logout</p>
                    </a>
                </li>

            </ul>
        </nav>
    );
}
 
export default NavBar;