import React, {useState} from 'react';
import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import VideoPlayer1 from "./Components/VideoPlayer1/VideoPlayer1.jsx";
import VideoPlayer2 from "./Components/VideoPlayer2/VideoPlayer2.jsx";

const App = () => {
   const [play1,setPlay1] = useState(false);
   const [play2,setPlay2] = useState(false);
       return (
        <div>
            <Navbar />
            <Hero />
            <About setPlay1={setPlay1} setPlay2={setPlay2}/>
            <VideoPlayer1 play1={play1} setPlay1={setPlay1} />
            <VideoPlayer2 play2={play2} setPlay2={setPlay2} />

        </div>
    );
};

export default App;