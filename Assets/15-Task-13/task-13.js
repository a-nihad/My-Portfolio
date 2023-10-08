let inp_name = document.querySelector('.inp-name')
let sub_1 = document.querySelector('.inp-sub_1')
let sub_2 = document.querySelector('.inp-sub_2')
let sub_3 = document.querySelector('.inp-sub_3')
let sub_4 = document.querySelector('.inp-sub_4')
let sub_5 = document.querySelector('.inp-sub_5')
let sub_6 = document.querySelector('.inp-sub_6')
let add = document.querySelector('.add')
let show = document.querySelector('.show')
let arr=[]


add.addEventListener('click',()=>{
    arr.push({
        name : inp_name.value,
        subject_1 : Number(sub_1.value),
        subject_2 : Number(sub_2.value),
        subject_3 : Number(sub_3.value),
        subject_4 : Number(sub_4.value),
        subject_5 : Number(sub_5.value),
        subject_6 : Number(sub_6.value)
    })
})

let display = document.querySelector('.display')
show.addEventListener('click',()=>{
display.innerHTML = ''
   
    arr.forEach((obj)=>{
        let card = document.createElement('div')
        let title = document.createElement('h2')
        let hr_1 = document.createElement('hr')
        let marks_sec = document.createElement('div')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let p4 = document.createElement('p')
        let p5 = document.createElement('p')
        let p6 = document.createElement('p')
        let hr_2 = document.createElement('hr')
        let total = document.createElement('h3')
        let average = document.createElement('h3')
        let grade = document.createElement('h3')

        let mark = obj.subject_1 + obj.subject_2 + obj.subject_3 + obj.subject_4 + 
        obj.subject_5 + obj.subject_6

        title.innerText = obj.name
        p1.innerText = obj.subject_1
        p2.innerText = obj.subject_2
        p3.innerText = obj.subject_3
        p4.innerText = obj.subject_4
        p5.innerText = obj.subject_5
        p6.innerText = obj.subject_6
        total.innerText =  mark
        average.innerText = parseInt(mark/6)
        
        if(mark>550){
            grade.innerText = "A+"
        }else if(mark>500){
            grade.innerText = "A"
        }else if(mark>450){
            grade.innerText = "B+"
        }else if(mark>400){
            grade.innerText = "B"
        }else if(mark>350){
            grade.innerText = "C+"
        }else if(mark>300){
            grade.innerText = "C"
        }else{
            grade.innerText = "Fail"
        }

        card.className = "card"
        marks_sec.className = 'marks-sec'

        marks_sec.appendChild(p1)
        marks_sec.appendChild(p2) 
        marks_sec.appendChild(p3) 
        marks_sec.appendChild(p4) 
        marks_sec.appendChild(p5) 
        marks_sec.appendChild(p6) 
        card.appendChild(title)
        card.appendChild(hr_1)
        card.appendChild(marks_sec)
        card.appendChild(hr_2)
        card.appendChild(total) 
        card.appendChild(average) 
        card.appendChild(grade)
        display.appendChild(card)            
        
    })


})