import React from 'react';
import '../CSSFiles/Nav.css';

function NavBar() {
    return (
        <nav className='navBar'>
            <h4 className='Projects'>Projects</h4>
            <h4 className='About'>About Me</h4>
            <h4 className='Hobbies'>Hobbies</h4>
        </nav>
    );
}

export default NavBar;