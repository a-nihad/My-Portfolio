let display = document.querySelector('.container')
let image = document.querySelector('.image')

let arr = ['./image/pic-1.jpg','./image/pic-2.jpg','./image/pic-3.jpg','./image/pic-4.jpg','./image/pic-5.jpg']

display.addEventListener('mouseenter',()=>{
    image.src = arr[Math.floor(Math.random()*5)]
})