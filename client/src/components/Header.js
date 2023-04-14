import React from 'react'
import './styles/header.css'

const Header = (props) => {
  return (
    <div>
        <nav className='header-container'>
            <div className='logo'>
                <h1 onClick={props.handleLogoClick}>Workout logger</h1>
            </div>
            <div className='header-right'>
                <h1>History</h1>
                <h1>My Exercises</h1>
                <h1>My account</h1>
            </div>
        </nav>
    </div>
  )
}

export default Header
