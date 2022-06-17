import React, { useState } from 'react'

const Navbar = () => {
    const [openSearch, setOpenSearch] = useState(false);
    return (
        <nav>
            <div className="social">
                <i className="fa-brands fa-facebook-square"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-linkedin-in"></i> 
            </div>
            <div className="search">
                <input className={openSearch ? 'openSearch' : null} type="text" placeholder="Search"/>
                <i onClick={ () => setOpenSearch(prevState => !prevState) } className="fa-solid fa-magnifying-glass"></i>
            </div>
        </nav>
    )
}

export default Navbar