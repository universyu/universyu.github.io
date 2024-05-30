import React, {useRef} from 'react';
import './About.css'
import projects from '../../assets/Projects.svg'
import gemini from '../../assets/gemini.png'
import playIcon from '../../assets/play-icon.png'
import ebook from '../../assets/ebook.png'

import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import x1 from '../../assets/x1.png'
import x2 from '../../assets/x2.png'
import x3 from '../../assets/x3.png'
import x4 from '../../assets/x4.png'



const About = ({setPlay1,setPlay2}) => {
    const  sli = useRef();
    let tx = 0;
    const slideForward = () => {
        if(tx>-50){
            tx -= 25;
        }
        sli.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx<0){
            tx += 25;
        }
        sli.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className={'about'}>
            <img src={projects} style={{width: 200, marginBottom: '20px', paddingLeft: "15%"}} alt=""/>
            <hr/>
            <div className="project" style={{paddingLeft: "15%"}}>
                <div className="descript">
                    <h2>一、个人简历网页：<a href="https://countingstars.cc">https://countingstars.cc</a><span>对应的github链接：<a
                        href="https://github.com/universyu/universyu.github.io">https://github.com/universyu/universyu.github.io</a></span></h2>
                    <p>框架：React（vite）</p>
                    <br/>
                    <h3>功能简介</h3>
                    <ul>
                        <li>1.滑动导航，方便浏览</li>
                        <li>2.通过我的网站，您只需点击右上角Connect With Me或者滑动到页面底部即可直接向我发送消息</li>
                    </ul>
                </div>
            </div>
            <div className="space"></div>
            <div className="project" style={{paddingLeft: "15%"}}>
                <div className="descript">
                    <h2>二、AI（Gemini）克隆网页：<a href="https://gemini.countingstars.cc"
                    >https://gemini.countingstars.cc</a><span>对应的github链接：<a
                        href="https://github.com/universyu/geminiClone">https://github.com/universyu/geminiClone</a></span>
                    </h2>
                    <p>全栈项目，前端React（vite），后端nodejs（Koa）</p>
                    <br/>
                    <h3>功能简介</h3>
                    <p style={{color: 'red', fontSize: 15, marginBottom: 10}}>
                        <strong>注意事项：服务器搭建在校园内网，暂时只有通过校园网访问的用户可以实现与AI对话，否则只能看网页样式，无法与AI对话</strong>
                    </p>
                    <ul>
                        <li>1.无需Gemini账号，无需开代理，即可直接与Gemini对话</li>
                        <li>2.样式按照蝴蝶忍配色风格设计</li>
                    </ul>
                </div>
                <br/>
                <div className="preview">
                    <h3>效果预览</h3>
                    <img src={gemini} alt=""/>
                    <img className={'play-icon'} src={playIcon} alt="" onClick={() => {
                        setPlay1(true)
                    }}/>
                </div>
            </div>
            <div className="space"></div>
            <div className="project" style={{paddingLeft: "15%"}}>
                <div className="descript">
                    <h2>三、全响应式学校官网：<a href="https://edusity.countingstars.cc"
                    >https://edusity.countingstars.cc</a><span>对应的github链接：<a
                        href="https://github.com/universyu/completeRespon">https://github.com/universyu/completeRespon</a></span>
                    </h2>
                    <p>框架：React（vite）</p>
                    <br/>
                    <h3>功能简介</h3>
                    <ul>
                        <li>1.风格简介，浏览方便</li>
                        <li>2.布局灵活，网页大小自适应于不同的屏幕尺寸，包括台式电脑、笔记本、平板和手机</li>
                        <li>3.Contact me模块无需借助邮箱或者短信等方式联系我，可通过网页直接发送消息</li>
                        <li>4.屏幕较小时，顶部横向导航栏变成右侧竖向导航栏，并为其加上菜单按键方便隐藏和显示</li>
                    </ul>
                </div>
                <h3 style={{marginTop: 20}}>左边是屏幕宽度小于850px时的页面效果，右边是屏幕宽度小于500px时的页面效果，访问上述的域名可浏览台式电脑的页面效果</h3>
                <div className="preview" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    gap: 20,
                    width: '100%'
                }}>

                    <iframe
                        src="https://edusity.countingstars.cc"
                        style={{width: '69%', height: '100%', border: 'none'}}
                        title="Edusity"
                    />
                    <iframe
                        src="https://edusity.countingstars.cc"
                        style={{width: '39%', height: '100%', border: 'none'}}
                        title="Edusity"
                    />
                </div>
            </div>
            <div className="space"></div>
            <div className="project" style={{paddingLeft: "15%"}}>
                <div className="descript">
                    <h2>四、ebook知识文档：
                        <span>对应的github链接：<a
                            href="https://github.com/universyu/ebook">https://github.com/universyu/ebook</a></span><br/>Docker运行命令：
                        <pre style={{display: 'inline-block'}}><code>docker run --name ebook -p 8080:8080 oldkingok/ebook:latest</code></pre>
                    </h2>
                    <p>合作项目，本人负责前端（html、css、javaScript），合作伙伴后端python（flask）</p>
                    <br/>
                    <h3>功能简介</h3>
                    <p style={{color: 'red', fontSize: 15, marginBottom: 10}}>

                    </p>
                    <ul>
                        <li>1.无需联网，本地知识文档库</li>
                        <li>2.按照博客园的美化风格设计，加入live2D、雪花飘落特效、鼠标点击文字特效、鼠标移动特效</li>
                        <li>3.实现前后端交互，搜索框连接数据库</li>
                    </ul>
                </div>
                <br/>
                <div className="preview">
                    <h3>效果预览</h3>
                    <img src={ebook} alt=""/>
                    <img className={'play-icon'} src={playIcon} alt="" onClick={() => {
                        setPlay2(true)
                    }}/>
                </div>
            </div>
            <div className="space"></div>
            <div className="project" style={{paddingLeft: "15%"}}>
                <div className="descript">
                    <h2>五、小米商城样式设计：<a href="https://xiaomi.countingstars.cc"
                    >https://xiaomi.countingstars.cc</a><span>对应的github链接：<a
                        href="https://github.com/universyu/xiaomi">https://github.com/universyu/xiaomi</a></span>
                    </h2>
                    <p>html、css项目</p>
                    <br/>
                    <h3>功能简介</h3>
                    <ul>
                        <li>1.利用html和css仿照小米官网做网页样式设计</li>
                    </ul>
                </div>
                <h3 style={{marginTop: 20,paddingLeft:"47%"}}>效果预览</h3>
                <div className="s" style={{}}>
                    <img className={'next-btn'} src={next_icon} alt="" onClick={slideForward}/>
                    <img className={'back-btn'} src={back_icon} alt="" onClick={slideBackward}/>
                    <div className={'slider'}>
                        <ul ref={sli}>
                            <li>
                                <div className="slide">
                                    <img src={x1} alt=""/>
                                </div>
                            </li>
                            <li>
                                <div className="slide">
                                    <img src={x2} alt=""/>
                                </div>
                            </li>
                            <li>
                                <div className="slide">
                                    <img src={x3} alt=""/>
                                </div>
                            </li>
                            <li>
                                <div className="slide">
                                    <img src={x4} alt=""/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;