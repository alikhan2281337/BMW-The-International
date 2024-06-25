import React from 'react';
import '../App.css'
import Text from "./Text.jsx";

function Navbar() {
    return (
        <div className="first-container">
            <div id="cont" className="nav-cont">
                <a className="hrefs" href="#">Home</a>
                <a className="hrefs" id="Circular" href="#">Circular World</a>
                <a className="hrefs" id="Digital" href="#">Digital Jurney</a>
                <a className="hrefs" id="Electric" href="#">Electric Future</a>
                <a className="hrefs" href="#">Freude</a>
                <a className="hrefs" href="#">Models</a>

                <button className="icon" onClick={None} id="but">
                    <img src="https://cdn-icons-png.freepik.com/512/10563/10563341.png?ga=GA1.1.1280510178.1708786015&"
                         width="100%" height="28px"/>
                </button>
                <div id="hiddenDiv" className="hidden">
                    <button id="buttonId" className="button" onClick={Revers}><h1>X</h1></button>
                    <input placeholder="Search" id="inp" type="text"/>
                    <a id="SignIn" className="auth" href="../pages/SignIn/SignIn.jsx">
                        <img src="https://cdn-icons-png.flaticon.com/128/9377/9377448.png"/>
                    </a>
                    <a id="SignUp" className="auth" href="../pages/SignUp/SignUp.jsx">
                        <img src="https://cdn-icons-png.flaticon.com/128/511/511506.png"/>
                    </a>
                </div>
            </div>
            <Text/>
        </div>
    );

}

function None() {
    var container = document.getElementById('cont');
    var links = container.getElementsByTagName('a')
    var button = document.querySelectorAll('button');
    var specialLink = document.getElementById('SignIn')
    var specialLinks = document.getElementById('SignUp')
    var hiddenBut = document.getElementById('buttonId');
    for (var i = 0; i < links.length; i++) {
        links[i].style.display = 'none'; // Устанавливаем стиль display: none для каждой ссылки
    }
    for (i = 0; i < button.length; i++){
        button[i].style.display = 'none';
        hiddenDiv.style.display = 'flex';
        hiddenBut.style.display = 'flex';
    }
    specialLink.style.display = 'block'
    specialLinks.style.display = 'block'

}
function  Revers(){
    var container = document.getElementById('cont');
    var links = container.getElementsByTagName('a')
    var Button = document.getElementById('but');
    var SecondDiv = document.getElementById('hiddenDiv');

    for (var i = 0; i < links.length; i++){
        links[i].style.display = 'block';
        Button.style.display = 'block';
    }
    SecondDiv.style.display = 'none';


}




export default Navbar;