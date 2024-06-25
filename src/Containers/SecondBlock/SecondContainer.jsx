import React from 'react';
import './SC.css';
function SecondContainer() {
    return (
        <div className="SCstart">
                <div  id="SCleft" className="SCblocks">
                    <a href="#" >
                        <div className="SCminiLinks">
                            <div className="SCsmall">
                                <h1>Accept no limitations</h1>
                                <a id="SCreadA" href="#">Read more</a>
                            </div>
                        </div>
                    </a>
                </div>
                <div id="SCright" className="SCblocks">
                    <a href="#" >
                        <div className="SCminiLinks">
                            <div id="SCfilm" className="SCsmall">
                                <h3>BMW film</h3>
                                <h1>Freude stays forever </h1>
                                <a id="SCreadB" href="#">Read more</a>
                            </div>
                        </div>
                    </a>
                </div>

        </div>
    );
}

export default SecondContainer;