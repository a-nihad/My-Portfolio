let inp_name = document.querySelector('.inp-name')
let inp_job = document.querySelector('.inp-job')
let inp_dob = document.querySelector('.inp-dob')
let inp_address = document.querySelector('.inp-address')
let inp_place = document.querySelector('.inp-place')
let inp_mail = document.querySelector('.inp-mail')
let inp_phone = document.querySelector('.inp-phone')
let inp_edu = document.querySelector('.inp-edu')
let inp_pic = document.querySelector('.inp-pic')
let sub = document.querySelector('.btn')

sub.addEventListener('click',()=>{
    let fname = document.querySelector('.name')
    let job = document.querySelector('.job')
    let dob = document.querySelector('.dob')
    let address = document.querySelector('.address')
    let place = document.querySelector('.place')
    let mail = document.querySelector('.mail')
    let phone = document.querySelector('.phone')
    let edu = document.querySelector('.edu')
    let pic = document.querySelector('img')


    fname.innerText = inp_name.value
    job.innerText = inp_job.value
    dob.innerText = inp_dob.value
    address.innerText = inp_address.value
    place.innerText = inp_place.value
    mail.innerText = inp_mail.value
    phone.innerText = inp_phone.value
    edu.innerText = inp_edu.value
    pic.src = inp_pic.value
})

