let input = document.querySelectorAll('input')
let inp_name = document.querySelector('.name')
let inp_brand = document.querySelector('.brand')
let inp_model = document.querySelector('.model')
let inp_bhp = document.querySelector('.bhp')
let add = document.querySelector('.add')
let submit = document.querySelector('.submit')
let display = document.querySelector('.display')
let arr = []
let Bhp = []
let nom = 1

add.addEventListener('click',()=>{
    arr.push({
        no: nom,
        name: inp_name.value,
        brand: inp_brand.value,
        model: inp_model.value,
        bhp: inp_bhp.value
    })
    for(i of input){
        i.value=''
    }
    nom=nom+1
})

submit.addEventListener('click',()=>{
    console.log(arr);
    let show = document.createElement('div')
    display.innerHTML=''
    let show_bhp = document.createElement('div')

    let table = document.createElement('table')
    let tr = document.createElement('tr')
    let th_1 = document.createElement('th')
    let th_2 = document.createElement('th')
    let th_3 = document.createElement('th')
    let th_4 = document.createElement('th')
    let th_5 = document.createElement('th')

    th_1.innerText= 'No'
    th_2.innerText= 'Name'
    th_3.innerText= 'Brand'
    th_4.innerText= 'Model'
    th_5.innerText= 'BHP'

    tr.append(th_1, th_2, th_3, th_4, th_5)
    table.appendChild(tr)  

    arr.forEach((obj)=>{
        let tr_in = document.createElement('tr')
        let td_1 = document.createElement('td')
        let td_2 = document.createElement('td')
        let td_3 = document.createElement('td')
        let td_4 = document.createElement('td')
        let td_5 = document.createElement('td')

        td_1.innerHTML= obj.no
        td_2.innerText= obj.name
        td_3.innerText= obj.brand
        td_4.innerText= obj.model
        td_5.innerText= obj.bhp

        Bhp.push(Number(obj.bhp))
        console.log(Bhp);

        tr_in.append(td_1, td_2, td_3, td_4, td_5)
        table.appendChild(tr_in)
        show.appendChild(table)
        display.appendChild(show)

    })

    let title= document.createElement('h2')
    let hr= document.createElement('hr')
    let total= document.createElement('h1')

    title.innerText = "Maximum BHP"
    total.innerText = Math.max(...Bhp)

    show_bhp.append(title, hr, total)
    display.appendChild(show_bhp)
    
})

