import React from 'react'

const Footer = () => {

    const scrollTheTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer>
            <button onClick={() => scrollTheTop()}>
                <i className="fa-solid fa-arrow-up"></i>
                Top the top
            </button>
            <p>Powered by <a href="#">me.me</a></p>
        </footer>
    )
}

export default Footer