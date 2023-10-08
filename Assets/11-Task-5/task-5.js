let fname =document.querySelector('.f-name')
let sname =document.querySelector('.s-name')
let mail =document.querySelector('.mail')
let num =document.querySelector('.num')
let dob =document.querySelector('.dob')
let male =document.querySelector('#male')
let female =document.querySelector('#female')
let edu =document.querySelector('.edu')
let btn =document.querySelector('.sub')
let res = document.querySelector('.res')
let display =document.querySelector('.display')


let dis_fname =document.querySelector('.dis-fname')
let dis_sname =document.querySelector('.dis-sname')
let dis_mail =document.querySelector('.dis-mail')
let dis_num =document.querySelector('.dis-num')
let dis_dob =document.querySelector('.dis-dob')
let dis_genter =document.querySelector('.dis-genter')
let dis_edu =document.querySelector('.dis-edu')

const col = ['red','blue','green','yellow','orange']

btn.addEventListener('click',()=>{
    dis_fname.innerText = "First Name :- " + fname.value
    dis_sname.innerText = "Last Name :- " + sname.value
    dis_mail.innerText = "Email :- "+ mail.value
    dis_num.innerText = "Phone Number :- "+ num.value
    dis_dob.innerText = "Date of Birth :- "+ dob.value

    if(male.checked==true){
        dis_genter.innerText = "Gender :- MALE"
    }else if(female.checked==true){
        dis_genter.innerText = "Gender :- FEMALE"
    }else{
        dis_genter.innerText = 'Gender :-'
    }

    dis_edu.innerText = "Qualification :- "+ edu.value
})

display.addEventListener('mouseenter',()=>{
    display.style.color = col[Math.floor(Math.random()*6)]
})
