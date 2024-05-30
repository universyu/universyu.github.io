import React, {useEffect, useState} from 'react';
import './Navbar.css'
import logo from '../../assets/logo.svg'
import {Link} from "react-scroll";

const Navbar = () => {
    const [sticky,setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            window.scrollY > 600 ? setSticky(true) : setSticky(false);
        })
    }, []);

    return (
        <nav className={`${sticky && 'navbar'}`}>
            <img src={logo} alt=""/>
            <ul className={'nav-menu'}>
                <li><Link style={{color: 'white'}} to={'hero'} smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link style={{color: 'white'}} to={'about'} smooth={true} offset={0} duration={500}>Projects</Link></li>

                <li className={'nav-connect'}>Connect With Me</li>
            </ul>
        </nav>
    );
};

export default Navbar;