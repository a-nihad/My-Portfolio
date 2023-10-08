var inp = document.getElementById("iput")
var outp = document.getElementById("oput")

function display(n){
    inp.innerText += n
}

function clearBtn(){
    inp.innerText = ""
    outp.innerText= ""
}

function backBtn(){
    inp.innerText= inp.innerText.slice(0,-1)
}

function calculate(){
    let temp = inp.innerText
    temp= temp.replace ('x','*')
    temp= temp.replace ('÷','/')
    outp.innerText = eval(temp)
}

function percent(){
    let temp = inp.innerText
    temp = temp.split('x')
    let num = temp[1]*temp[0]/100 //50 * 500 / 100 = 250
    outp.innerText = num
}