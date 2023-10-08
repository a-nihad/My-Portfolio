const list=[{
    photo : 'https://img.freepik.com/free-vector/natural-juice-ad_52683-8497.jpg?w=740&t=st=1679398896~exp=1679399496~hmac=62c04ab2af0a80d06c171f1407c8dcfc229aadea53272820903cfa691dabbf67',
    name: 'Apple',
    price: 41
},{
    photo : 'https://img.freepik.com/free-vector/realistic-natural-juice-ad-background_52683-22886.jpg?size=338&ext=jpg&ga=GA1.2.330026718.1633744156&semt=ais',
    name: 'Orange',
    price: 42
},{
    photo : 'https://img.freepik.com/free-vector/realistic-mango-juice-ad-template_52683-8486.jpg?size=338&ext=jpg&ga=GA1.2.330026718.1633744156&semt=ais',
    name: 'Mango',
    price: 43
},{
    photo : 'https://img.freepik.com/free-vector/green-apple-juice-drink-product-ad_52683-34033.jpg?w=740&t=st=1679399173~exp=1679399773~hmac=74c74912c543bff3fd10b285800206e32c4add2a03970e3102afe49342c29313',
    name: 'Green Apple',
    price: 40
},{
    photo : 'https://img.freepik.com/free-vector/grape-juice-abstract-background_52683-662.jpg?size=338&ext=jpg&ga=GA1.2.330026718.1633744156&semt=ais',
    name: 'Grape',
    price: 46
}]

let rows = document.querySelector('.row')
let inp_sec = document.querySelector('.inp-sec')
let submit = document.querySelector('.submit')
let display = document.querySelector('.display')
let order_sec = document.createElement('div')
let total = document.createElement('h2')
let arr = []

list.forEach((obj)=>{
    let card = document.createElement('div')
    let pic = document.createElement('img')
    let dis_name = document.createElement('h2')
    let rs = document.createElement('h3')
    let btn = document.createElement('button')

    pic.src= obj.photo
    dis_name.innerText= obj.name
    rs.innerText= obj.price
    card.className= "card"
    btn.innerText = 'Order'
    rs.className = "rs"

    card.append(pic, dis_name, rs, btn)
    inp_sec.appendChild(card)

    btn.addEventListener('click',()=>{
        arr.push(obj)
    })

})

submit.addEventListener('click',()=>{
    display.innerHTML=''
    rows.innerHTML=''
    let total_sec = document.createElement('div')
    let title = document.createElement('h2')
    let balance = document.createElement('h1')
    let total = ''
    total_sec.innerHTML=''

    arr.forEach((obj)=>{
        let card = document.createElement('div')
        let pic = document.createElement('img')
    
        pic.src= obj.photo
        card.className= "card"
        total_sec.className = "total-sec"
    
        card.appendChild(pic)
        display.appendChild(card)

        total = arr.reduce((count, obj)=>{
            return count+= obj.price
        },0)
    })

    title.innerText= "TOTAL AMOUNT" 
    balance.innerText= total
    balance.className = "balance"

    total_sec.append(title, balance)
    rows.appendChild(total_sec);
})
