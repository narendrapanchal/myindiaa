import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/footer.css"
function Footer() {
  return (
    <footer>
        <div>
            <Link to="/">About</Link>
            <Link to="/">Support</Link>
            <Link to="/">Contact Us</Link>
        </div>
        <div>
            <Link to="/">Chat</Link>
            <Link to="/">Services</Link>
            <Link to="/">Footer</Link>
        </div>
        <div>
            <Link to="/">T & C</Link>
            <Link to="/">Uses</Link>
            <Link to="/">Footer</Link>
        </div>
        <div>
            <Link to="/">Robot</Link>
            <Link to="/">Cart</Link>
            <Link to="/">Home</Link>
        </div>
    </footer>
  )
}

export default Footer
