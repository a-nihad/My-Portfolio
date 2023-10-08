let inp = document.querySelector(".inp")
let vowels = document.querySelector('.vowels')
let space = document.querySelector('.space')
let leng = document.querySelector('.leng')
let btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{

    vowels.innerText = `Number of Vowels = ${inp.value.match(/[aeiou]/g).length}`
    space.innerText = `Number of Spaces = ${inp.value.match(/\s/g).length}` 
    leng.innerText = `Length of Words = ${inp.value.match(/\S/g).length}`

})