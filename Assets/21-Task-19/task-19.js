let inp = document.querySelector(".inp")
let add = document.querySelector(".add")
let submit = document.querySelector(".submit")
let display = document.querySelector(".display-sec")
let arr = []
let sor = []

add.addEventListener('click',()=>{
    arr.push([inp.value])
    inp.value = ''
})

submit.addEventListener('click',()=>{
    let normal = document.createElement('div')
    let sorted = document.createElement('div')
    normal.className = 'section'
    sorted.className = 'section'
    display.appendChild(normal)
    display.appendChild(sorted)

    arr.forEach((obj)=>{
        let h2 = document.createElement('h2')
        h2.innerText = obj
        normal.appendChild(h2)
    })

    sor = arr.sort();
    sor.forEach((obj)=>{
        let h2 = document.createElement('h2')
        h2.innerText = obj
        sorted.appendChild(h2)
    })
    
})