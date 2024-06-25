import React from 'react';
import './FourthCSS.css';
function FourthContainer() {
    return (
        <div className="FourthMain">
            <div id="FourthText" className="FourthContainers">
                <h1>THE BMW <br/> PODCAST: <br/> CHANGING <br/> LANES</h1>
                <p>Changing Lanes is the official podcast from BMW. In these audio series, we take you with us on new journeys through the BMW universe. Find out more about sustainability, innovation, technology, mobility and the latest trends. You can find and subscribe to Changing Lanes on all major podcast platforms, so tune in!</p>
                <a href="#">Listen now</a>
            </div>
            <div id="FourthCarousel" className="FourthContainers">
                <a className="FourthLinks" href="#">
                    <div className="FourthVideos">
                        <div className="FourthMiniTexts">
                            <h5><b id="Electric">ELECTRIC MYTHS</b> <br/> A video podcast about electric driving myths</h5>
                        </div>
                        <video autoPlay loop muted>
                            <source src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/electric-future/emyths/em-00-teaser-high.mp4" type="video/mp4"/>
                        </video>

                    </div>
                </a>
                <a className="FourthLinks" href="#">
                    <div className="FourthVideos">
                        <div className="FourthMiniTexts">
                            <h5><b id="Electric">The future according to…</b> <br/> Audio column</h5>
                        </div>
                        <video autoPlay loop muted>
                        <source src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcast-teaser/fat/fat-00-teaser-high.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </a>
                <a className="FourthLinks" href="#">
                    <div className="FourthVideos">
                        <div className="FourthMiniTexts">
                            <h5><b id="Electric">DEE MY GUEST</b> <br/> An audio series about humans and machines </h5>
                        </div>
                        <video autoPlay loop muted>
                            <source src="https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/podcast/changing-lanes/dee-00-teaser-high.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </a>
                <a className="FourthLinks" href="#">
                    <div className="FourthVideos">
                        <div className="FourthMiniTexts">
                            <h5><b id="Electric">CHASING THE GREENEST CAR </b> <br/> An audio documentary about sustainability at BMW</h5>
                        </div>
                        <video autoPlay loop muted>
                            <source src="https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/podcast/changing-lanes/gcl-00-teaser-high.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default FourthContainer;