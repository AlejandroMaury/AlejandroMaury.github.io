import * as React from 'react'
import { Link } from 'gatsby'
import { } from "./layout.modules.css";
import { SiGatsby } from '@react-icons/all-files/si/SiGatsby'



const Layout = ({ pageTitle, children }) => {
    return (<>

        <div className='navBar'>
            <nav>
                <ul className="navLinks">
                    <li className="navLinkItem">
                        <Link to="/" className="navLinkText">Home
                        </Link>
                    </li>

                    <li className="navLinkItem">
                        <Link to="/about" className="navLinkText">About
                        </Link>
                    </li>

                    <li className="navLinkItem">
                        <Link to="/resume" className="navLinkText">Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="container">
            <main>
                <h1 className="heading">{pageTitle}</h1>
                {children}
            </main>
        </div>
        <div className='footer'>

            <footer>
                <h4>Alejandro Arango 2023. guidance by < SiGatsby /></h4>
            </footer>

        </div >


    </>)
}

export default Layout


