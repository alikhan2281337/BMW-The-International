import React from 'react';
import './SignUpCss.css'
function SignUp() {
    return (

            <div className="registration-block">
                <h1>Sign up</h1>
                <label id="lb1">LOGIN</label>
                <br/>
                <input id="inp1" placeholder="username..." type="email"/>
                <p id="p1"></p>

                <label id="lb2">PASSWORD</label>

                <br/>
                <input id="inp2" type="password" placeholder=""/>
                <p id="p2"></p>
                <label id="lb3">REPEAT YOUR PASSWORD</label>
                <br/>
                <input id="inp3" type="password"/>
                <p id="p3"></p>
                <button id="but1" type="submit" onClick={valueofInputs}>Go</button>
                <br/>
                <div className="line"></div>
                <br/>
                <p>Already have an <a href="../SignIn/SignIn.jsx">account?</a></p>
            </div>

    );
}
function valueofInputs(){
    var inp1 = document.getElementById('inp1').value;
    var inp2 = document.getElementById('inp2').value;
    var inp3 = document.getElementById('inp3').value;
    var p1 = document.getElementById('p1')
    var p2 = document.getElementById('p2')
    var p3 = document.getElementById('p3')
    var password1 = document.getElementById('inp2').value
    var password2 = document.getElementById('inp3').value
    //Creating the moment of function where will be mistake
    if(inp1.length < 5){
        p1.innerHTML = "Not less than 5 characters"
        p1.value.style.border = '1px solid black'
    }
    else{
        p1.innerHTML = 'ready';
        p1.style.color = 'green'
    }
    if(inp2.length < 5){
        p2.innerHTML = "Not less than 8 characters"
        p2.value.style.border = '1px solid black'
    }
    else{
        p2.innerHTML ='ready';
        p2.style.color = 'green';

    }
    if (password1 === password2){
        window.location.href = '/'
    }
    else{
        p3.innerHTML = 'Password are тще similar'
        p3.style.color = 'red'
    }
}


export default SignUp;