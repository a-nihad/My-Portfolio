let show = document.querySelector('.show-more-btn')
let li = document.querySelectorAll('.hide-btn')

show.addEventListener('click',()=>{
    show.classList.toggle('btn-togle')
    for(i of li){
        i.classList.toggle("togle");
    }
    if(show.classList =="show-more-btn btn-togle" ){
        show.innerHTML = `Show less <i class="fa-solid fa-angle-up"></i>`
    }else{
        show.innerHTML = `Show more <i class="fa-solid fa-chevron-down"></i>`
    }
})

// ! slide move

let list=[{
    no: 0,
    title: 'Let the right people know you’re open to work',
    text: 'With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.',
    image:'./Photos/slide-1.png'
},{
    no: 1,
    title: 'Conversations today could lead to opportunity tomorrow',
    text: 'Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.',
    image:'./Photos/slide-2.png'
},{
    no: 2,
    title: 'Stay up to date on your industry',
    text: 'From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.',
    image:'./Photos/slide-3.png'
}]

let sl_title = document.querySelector('.slide-l-title')
let sl_text = document.querySelector('.slide-l-text')
let sl_photo = document.querySelector('.sl-photo')
let previous = document.querySelector('.previous-level')
let next = document.querySelector('.next-level')
let level_btn = document.querySelectorAll('.level-btn')
let count = 0;

next.addEventListener('click',()=>{
    if(count<2){
        count++
    }else{
        count=2
    }

    sl_title.innerText = list[count].title
    sl_text.innerText = list[count].text
    sl_photo.src= list[count].image

})
previous.addEventListener('click',()=>{
    if(count>0){
        count--
    }else{
        count=0
    }

    sl_title.innerText = list[count].title
    sl_text.innerText = list[count].text
    sl_photo.src= list[count].image
})


for(i of level_btn){
    i.addEventListener('click',()=>{
        if(count==2){
            next.style.color="rgba(0, 0, 0, 0.5)"
        }
        else if(count==0){
            previous.style.color="rgba(0, 0, 0, 0.5)"
        }
        else{
            next.style.color="rgba(0, 0, 0, 0.9)"
            previous.style.color="rgba(0, 0, 0, 0.9)"
        }
    })
}
