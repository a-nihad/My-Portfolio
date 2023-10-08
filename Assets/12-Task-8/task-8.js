const list = [{
    photo: "/Assets/12-Task-8/task-8-photo/pic-1.jpg",
    name : "Noise ColorFit",
    Color : "Blue",
    offer : 1999,
    rs : "5,999"
},{
    photo: "./task-8-photo/pic-2.jpg",
    name : "TXOR STORM",
    Color : "Black",
    offer : 629,
    rs : "1,499"
},{
    photo: "./task-8-photo/pic-3.jpg",
    name : "Noise ColorFit",
    Color : "Gold",
    offer : 1599,
    rs : "5,599"
},{
    photo: "./task-8-photo/pic-4.jpg",
    name : "Atharv07 pink",
    Color : "Pink",
    offer : 649,
    rs : "1,649"
},{
    photo: "./task-8-photo/pic-5.jpg",
    name : "BoAt Storm cal",
    Color : "Green",
    offer : 2799,
    rs :  "7,990"
},{
    photo: "./task-8-photo/pic-6.jpg",
    name : "Noise ColorFit ",
    Color : "Pink",
    offer : 1299,
    rs : "3,990"
}]

let container = document.querySelector('.container')
let arr = []

list.forEach((obj)=>{
    let card = document.createElement('div')
    let img = document.createElement('img')
    let text_sec = document.createElement('div')
    let dis_name = document.createElement('h2')
    let offer = document.createElement('h2')
    let normal = document.createElement('span')
    let btn = document.createElement('button')


    card.className = "card"
    img.className = "img"
    text_sec.className = "text-sec"
    offer.className = "offer"
    btn.className = 'btn'
    normal.className = 'normal'


    img.src = obj.photo
    dis_name.innerText = obj.name
    dis_name.style.color = obj.Color
    offer.innerHTML = ` <span>&#8377 </span> ${obj.offer}`
    normal.innerHTML = `<span>&#8377 </span> <del>${obj.rs} </del>`
    btn.innerText = "ADD TO CART"


    text_sec.appendChild(dis_name)
    text_sec.appendChild(offer)
    offer.appendChild(normal)
    text_sec.appendChild(btn)
    card.appendChild(img)
    card.appendChild(text_sec)
    container.appendChild(card)

    btn.addEventListener('click',()=>{
        let list={
            amound : obj.offer
        }
        arr.push(list.amound)

        let result = arr.reduce((count,obj)=>{
            return count += obj
        },0) 

        balance.innerText = result
    })   


})

    let total = document.createElement("div")
    let h2 = document.createElement('h2')
    let hr = document.createElement('hr')
    let balance = document.createElement('h1')

    h2.innerText= "TOTAL PRICE"
    total.className='total'
    
    total.appendChild(h2)
    total.appendChild(hr)
    total.appendChild(balance)
    container.appendChild(total)

