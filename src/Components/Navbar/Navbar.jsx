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
                <li><Link style={{color: 'white'}} to={'hero'} smooth={true} offset={0} duration={500}>简介</Link></li>
                <li><Link style={{color: 'white'}} to={'about'} smooth={true} offset={0} duration={500}>项目</Link></li>
                <li><Link style={{color: 'white'}} to={'comp'} smooth={true} offset={0} duration={500}>竞赛</Link></li>
                <li><Link style={{color: 'white'}} to={'ctf'} smooth={true} offset={0} duration={500}>网络安全</Link></li>
                <li><Link style={{color: 'white'}} to={'others'} smooth={true} offset={0} duration={500}>其他</Link></li>
                <li className={'nav-connect'}><Link style={{color: 'white'}} to={'contact'} smooth={true} offset={0} duration={500}>Connect With Me</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;