import React from 'react';
import './Hero.css'
import profile_img from '../../assets/1.jpg'

const Hero = () => {
    return (
        <div className={'hero'}>
            <img src={profile_img} alt=""/>
            <h1>李子玉</h1>
            <h3>哈尔滨工业大学（深圳）<span>双一流</span> <span>985</span> <span>211</span></h3>
            <p>电子与信息工程学院通信工程专业2026届毕业生</p>
            <p>热爱编程，梦想是成为全栈工程师</p>
        </div>
    );
};

export default Hero;