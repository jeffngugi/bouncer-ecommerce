import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <section>
            {/* <button className="navbar-toggler"  type="button"  data-toggle="collapse"  data-target="#navbarNav"  aria-controls="navbarNav"  aria-expanded="false"  aria-label="Toggle navigation"   >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav"></div> */}
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>HOME</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/products-grid'>STORE</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/products-list'>IPHONE</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/blog-list'>BLOG</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/accesories'>ACCESORIES</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/blog-list'>MACBOOK</Link>
                    </li>
                    
                    
                </ul>
                
                </div>
            </div>
        </nav>
        </section>
    )
}



export default Navbar
