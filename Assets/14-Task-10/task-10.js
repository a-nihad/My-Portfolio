const list=[{
    photo : '/Assets/14-Task-10/Photos/pic-1.jpg',
    item : 'Orange',
    calorie : 62 
},{
    photo : './Photos/pic-2.jpg',
    item : 'Apple',
    calorie : 95 
},{
    photo : './Photos/pic-3.jpg',
    item : 'Avocado',
    calorie : 320
},{
    photo : './Photos/pic-4.jpg',
    item : 'Banana',
    calorie : 111
},{
    photo : './Photos/pic-5.jpg',
    item : 'Kiwi',
    calorie : 112 
},{
    photo : './Photos/pic-6.jpg',
    item : 'Mango',
    calorie : 202 
},{
    photo : './Photos/pic-7.jpg',
    item : 'Pineapple',
    calorie : 453 
},{
    photo : './Photos/pic-8.jpg',
    item : 'Grape',
    calorie : 104
},{
    photo : './Photos/pic-9.jpg',
    item : 'Cherries',
    calorie : 4 
},{
    photo : './Photos/pic-10.jpg',
    item : 'Strawberrie',
    calorie : 49 
}]

let container= document.querySelector('.container')
let sub_btn = document.querySelector('.sub-btn')
let arr = []
let total_calorie = ''

let title = document.createElement('h2')
title.innerText = 'ITEMS'
container.appendChild(title)

list.forEach((obj)=>{
    let card = document.createElement('div')
    let img = document.createElement('img')
    let name = document.createElement('h1')
    let cal = document.createElement('h3')
    let btn = document.createElement('button')

    img.src= obj.photo
    name.innerText= obj.item
    cal.innerText = obj.calorie
    btn.innerText = "Order"
    
    cal.className = 'calorie'
    card.className = 'card'

    card.appendChild(img)
    card.appendChild(name)
    card.appendChild(cal)
    card.appendChild(btn)
    container.appendChild(card)

    // *************************************************

    btn.addEventListener('click',()=>{
        arr.push(obj)
    })
})

sub_btn.addEventListener('click',()=>{
    let display = document.querySelector('.display')
    let title = document.createElement('h2')
    title.innerText = 'ORDERS'
    title.className='order'
    display.appendChild(title)
    
    
    arr.forEach((obj)=>{
        let card = document.createElement('div')
        let img = document.createElement('img')
        let name = document.createElement('h3')

        img.src= obj.photo
        name.innerText= obj.item

        card.classList = 'card buy'
        img.className = 'buy-img'

        card.appendChild(img)
        card.appendChild(name)
        display.appendChild(card)

        total_calorie = arr.reduce((calculate,obj)=>{
            return calculate += obj.calorie
        },0)

    })

    let total_sec = document.createElement('div')
    let hed = document.createElement('h3')
    let hr = document.createElement('hr')
    let total_cal = document.createElement('h2')
    
    total_sec.className = 'total-sec'
    hed.innerText = 'TOTAL CALORIE'
    total_cal.innerText = total_calorie

    if(total_calorie > 500){
        alert('You had too much calories')
    }

    total_sec.appendChild(hed)
    total_sec.appendChild(hr)
    total_sec.appendChild(total_cal)
    display.appendChild(total_sec)

})
