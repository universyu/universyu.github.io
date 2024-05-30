import React from 'react';
import './Competition.css'
import competitionSvg from '../../assets/competition.svg'
import sheTuan from '../../assets/shetuan.svg'
const Competition = () => {
    return (
        <div className={'competition'}>
            <img id={'comp'} src={competitionSvg} style={{width: 200, marginBottom: '10px', marginTop: "40px"}}
                 alt=""/>
            <hr/>
            <ul>
                <li>哈尔滨工业大学三等学业奖学金</li>
                <li>第六届"泰迪杯"数据分析技能赛A题国赛一等奖</li>
                <li>第六届"泰迪杯"数据分析技能赛B题国赛二等奖</li>
                <li>第十五届蓝桥杯C/C++程序设计大学A组省二等奖</li>
                <li>广东省大学生数学建模竞赛省二等奖</li>
                <li>第十五届全国大学生数学竞赛省二等奖</li>
                <li>第九届中国海洋大学信息安全竞赛第二名</li>
            </ul>
            <img id={'ctf'} src={sheTuan} style={{width: 200, marginBottom: '10px', marginTop: "40px"}}
                 alt=""/>
            <hr/>
            <p>
                在CTF社团中学习网络安全知识，利用所学知识写js脚本绕过学校网课观看权限的校验程序。
                <br/>
                作为Web选手参加第十七届全国大学生信息安全竞赛校内选拔赛，所在队伍排名第1。
                <br/>
                作为Web选手参加哈尔滨工业大学（深圳）第一届网络安全校赛，所在队伍排名第2。
            </p>
        </div>
    );
};

export default Competition;