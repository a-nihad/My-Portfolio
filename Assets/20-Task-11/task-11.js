let list = [{
    name:'Roshan',
    age :'19',
    place: 'Areecode',
    gender: 'Male',
    job : 'Software Engineer',
    flag : false
},{
    name:'Aslam',
    age :'21',
    place: 'Edakkara',
    gender: 'Male',
    job : 'Sivil Engineer',
    flag : false
},{
    name:'Rashad',
    age :'23',
    place: 'Nilambur',
    gender: 'Male',
    job : 'Business',
    flag : false
},{
    name:'Faseeha',
    age :'18',
    place: 'Ppm',
    gender: 'Female',
    job : 'Software Engineer',
    flag : false
},{
    name:'Thasni',
    age :'17',
    place: 'Calicut',
    gender: 'Female',
    job : 'Accountant',
    flag : false
},{
    name:'Febi',
    age :'34',
    place: 'Karulai',
    gender: 'Female',
    job : 'Doctor',
    flag : false
},{
    name:'Rahul',
    age :'28',
    place: 'Malappuram',
    gender: 'Male',
    job : 'Accountantr',
    flag : false
}]
// const arr=[]
// arr.push(list)
// console.log(arr);

let inp_name = document.querySelector('.name')
let inp_age = document.querySelector('.age')
let inp_place = document.querySelector('.place')
let male = document.querySelector('#male')
let female = document.querySelector('#female')
let inp_job = document.querySelector('.job')
let add = document.querySelector('.add')
let show = document.querySelector('.show')
let fav = document.querySelector('.fav')
let inp_gender =''
let container = document.querySelector('.container')
let sub_container_1=document.createElement("div")
let sub_container_2=document.createElement("div")


add.addEventListener('click',()=>{

    if(male.checked==true){
        inp_gender.innerText = male.value
    }else if(female.checked==true){
        inp_gender.innerText = female.value
    }

    list.push({
        name : inp_name.value,
        age: inp_age.value,
        place: inp_place.value,
        gender: inp_gender,
        job: inp_job.value,
        flag : false
    })
})

show.addEventListener('click',()=>{
    let row = document.createElement('div')
    let ul = document.createElement('ul')
    sub_container_1.innerHTML = ''
    list.forEach((obj)=>{
        let li = document.createElement('li')
        let out_name = document.createElement('h2')
        let out_place = document.createElement('p')
        let btn_fav = document.createElement('button')

        out_name.innerText = obj.name
        out_place.innerText = obj.place
        btn_fav.innerText = "Add to Favourite"
        btn_fav.className = "btn com"

        li.appendChild(out_name)
        li.appendChild(out_place)
        li.appendChild(btn_fav)
        ul.appendChild(li)
        row.appendChild(ul)
        sub_container_1.appendChild(row)
        container.appendChild(sub_container_1)

        btn_fav.addEventListener('click',()=>{
            btn_fav.classList.toggle('togle')

            if(btn_fav.classList== 'btn com togle' ){
                for(i in list){
                    if(list[i].name==obj.name){
                        list[i].flag=true
                    }
                }
            }else{
                for(i in list){
                    if(list[i].name==obj.name){
                        list[i].flag= false
                    }
                } 
            }
        })
    })
})

fav.addEventListener('click',()=>{

    let row = document.createElement('div')
    sub_container_2.innerHTML=''
    let ul = document.createElement('ul')

    let filter = list.filter((obj)=>{
        return obj.flag==true
    })

    filter.forEach((obj)=>{
        let li = document.createElement('li')
        let out_name = document.createElement('p')
        let out_age = document.createElement('p')
        let out_place = document.createElement('p')
        let out_gender = document.createElement('p')
        let out_job = document.createElement('p')

        out_name.innerText= `Name :- ${obj.name}`
        out_age.innerText= `Age :- ${obj.age}`
        out_place.innerText= `Place :- ${obj.place}`
        out_gender.innerText=`Gender :- ${obj.gender}`
        out_job.innerText= `Job :- ${obj.job}`

        li.appendChild(out_name)
        li.appendChild(out_age)
        li.appendChild(out_place)
        li.appendChild(out_gender)
        li.appendChild(out_job)
        ul.appendChild(li)
        row.appendChild(ul)
        sub_container_2.appendChild(row)
        container.appendChild(sub_container_2)
    })
})
