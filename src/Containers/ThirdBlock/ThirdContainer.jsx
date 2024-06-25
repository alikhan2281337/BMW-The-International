import React from 'react';
import './ThirdCss.css';
function ThirdContainer() {
    return (
        <div className="ThirdMain">
            <div className="VideoCont">
                <video autoPlay loop muted>
                    <source src="https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/Automotive%20Life/bmw-explained-logo/exl-01-stage-hd9.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="VideoCont">
                <h1>Learn everything <br/> about BMW here</h1>
                <a href="#">BMW EXPLAINED</a>
            </div>
        </div>
    );
}

export default ThirdContainer;