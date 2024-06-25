import React from 'react';
import './SignInCss.css';
function SignIn() {
    return (
            <div className="registration-block">
                <h1>Sign in</h1>
                <label id="lb1">LOGIN</label>
                <br/>
                <input id="inp1" placeholder="username..." type="email"/>
                <p id="p1"></p>

                <label id="lb2">PASSWORD</label>

                <br/>
                <input id="inp2" type="password" placeholder=""/>
                <p id="p2"></p>
                <button id="but1" type="submit" onClick={valueofInputs}>Go</button>
                <br/>
                <div className="line"></div>
                <br/>
                <p>Create a new <a href="../SignUp/SignUp.jsx">account?</a></p>
            </div>
    );
}
function valueofInputs(){
    var inp1 = document.getElementById('inp1').value;
    var inp2 = document.getElementById('inp2').value;
    var p1 = document.getElementById('p1')
    var p2 = document.getElementById('p2')
    if(inp1.length < 5){
        p1.innerHTML = "Not less than 5 characters"
        p1.value.style.border = '1px solid black'
    }
    else{
        p1.innerHTML = 'ready';
        p1.style.color = 'green'
    }
    if(inp2.length < 5){
        p2.innerHTML = "Please write your password"
        p2.value.style.border = '1px solid black'
    }
    else{
        p2.innerHTML ='ready';
        p2.style.color = 'green';

    }
    window.location.href = '/'
}

export default SignIn;