import React,{useRef} from 'react';
import './VideoPlayer2.css'
import video2 from '../../assets/2.mp4'

const VideoPlayer2 = ({play2,setPlay2}) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlay2(false); //点击周围就可以关闭视频，视频之内的点击不会触发onClick
        }
    }
    return (
        <div className={`video-player ${(!play2) && 'hide' }`} ref={player} onClick={closePlayer}>
            <video src={video2} alt="" muted controls autoPlay/>
        </div>
    );
};

export default VideoPlayer2;