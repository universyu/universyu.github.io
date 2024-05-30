import React,{useRef} from 'react';
import './VideoPlayer1.css'
import video1 from '../../assets/1.mp4'

const VideoPlayer1 = ({play1,setPlay1}) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlay1(false); //点击周围就可以关闭视频，视频之内的点击不会触发onClick
        }
    }
    return (
        <div className={`video-player ${(!play1) && 'hide' }`} ref={player} onClick={closePlayer}>
            <video src={video1} alt="" muted controls autoPlay/>
        </div>
    );
};

export default VideoPlayer1;