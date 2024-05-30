import React from 'react';
import './Others.css'
import other from '../../assets/others.svg'
import love from '../../assets/love.jpg'
import luna from '../../assets/luna.jpg'
const Others = () => {
    return (
        <div className={'others'}>
            <img src={other} style={{width: 200, marginBottom: '10px', marginTop: "40px"}}
                 alt=""/>
            <hr/>
            <h3>对计算机非常感兴趣，平时喜欢自学编程</h3>
            <div className={'imgP'}>
                <p>C画的星空</p>
                <img src={luna} alt=""/>
            </div>
            <div className={'imgP'}>
                <p>汇编画的爱心</p>
                <img src={love} alt=""/>
            </div>

        </div>
    );
};

export default Others;