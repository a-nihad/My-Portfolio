let q_li_1 = document.querySelector('.q-li-1')
let q_li_2 = document.querySelector('.q-li-2')
let q_li_3 = document.querySelector('.q-li-3')
let q_li_4 = document.querySelector('.q-li-4')

let q_h_1 = document.querySelector('.q-h-1')
let q_h_2 = document.querySelector('.q-h-2')
let q_h_3 = document.querySelector('.q-h-3')
let q_h_4 = document.querySelector('.q-h-4')

q_li_1.addEventListener('click',()=>{
    q_h_1.classList.toggle("loggle")
})

q_li_2.addEventListener('click',()=>{
    q_h_2.classList.toggle("loggle")
})

q_li_3.addEventListener('click',()=>{
    q_h_3.classList.toggle("loggle")
})

q_li_4.addEventListener('click',()=>{
    q_h_4.classList.toggle("loggle")
})