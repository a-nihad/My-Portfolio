
let ouput = document.getElementById("display-col")

function display(n){
    ouput.innerText = ouput.innerText +  n
}

function clears(){
    ouput.innerText= ''
}

function backbtn(){
    ouput.innerText = ouput.innerText.slice(0,-1)
}

function forSpace(){
    ouput.innerHTML += "&nbsp;"
}

function imog(){
    ouput.innerHTML += "&#128540"
}