let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-vector-logo.png') {
        myImage.setAttribute('src','images/firefox-vector-logo2.png');
    } else {
        myImage.setAttribute('src','images/firefox-vector-logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
       setUserName(); 
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML =  myName + ', Mozilla is cool! ';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML =  storedName + ', Mozilla is cool!';
}

myButton.onclick = function () {
    setUserName();
}