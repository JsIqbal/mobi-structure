import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1 style={{color: "#fff"}}>Welcome to <span className="nowrap">ADA Mobi Reach Platform!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Gulshan City, ADA  provides a data driven solution to your problem.</p>
                <address className="public__addr">
                    Dev Iqbal<br />
                    Sector 10 Uttara<br />
                    Dhaka, BD 1230<br />
                    <a href="tel:+8801950713363">+880-1950713363</a>
                </address>
                <br />
                <p>Owner: Dev Iqbal</p>
            </main>
            <footer>
                <Link to="/login">Employee Login/Registration</Link>
            </footer>
        </section>

    )
    return content
}
export default Public