let css_list=[{
    photo:"/Photos/pic-3.jpg",
    title:"LevelX",
    link: "./Assets/01- LevelX/index.html"
},{
    photo:"https://img.freepik.com/free-vector/realistic-social-media-linkedin-mockup_23-2149202415.jpg?w=740&t=st=1680911606~exp=1680912206~hmac=694c72f7703a1a709438fab64896dfcfc02445420100029afc588d3127c4314a",
    title:"LinkedIn",
    link: "./Assets/02- Linkdin/index.html"
},{
    photo:"https://img.freepik.com/premium-vector/3d-rocket-flying-into-space-vector-illustration_272897-761.jpg?w=826",
    title:"Rocket Animation",
    link: "./Assets/03- Rocket Animation/rocket.html"
},{
    photo:"https://t3.ftcdn.net/jpg/02/13/43/50/240_F_213435087_aLzsGSSk7FVqsca0RmCQKsr2YW4Vw17N.jpg",
    title:"Moon Animation",
    link: "./Assets/04- Moon/moon.html"
},{
    photo:"https://img.freepik.com/free-vector/devices_53876-28515.jpg?w=740&t=st=1680953163~exp=1680953763~hmac=fc45957188de9cc9e8127fa507c6e33666e7ed70305a286aae6122dcda0f855e",
    title:"Watch Icon",
    link: "./Assets/05- Watch/watch.html"
},{
    photo:"https://img.freepik.com/premium-photo/glowing-power-neon-light-futuristic-energy-storage-high-capacity-rechargeable-lithium-ion-battery-3d-rendering-future-electric-vehicle-clean-energy-technology-concept_44651-721.jpg?w=900",
    title:"Battery Icon",
    link: "./Assets/06-Battery/battery.html"
}]

let js_list=[{
    photo:"./Photos/pic-1.jpg",
    title:"Keyboard",
    link: "./Assets/7-Keyboard/index.html"
},{
    photo:"https://img.freepik.com/premium-photo/man-use-calculator-make-note-with-calculate-about-cost-office-close-up_36325-1697.jpg?w=740",
    title:"Calculator",
    link: "./Assets/8-Calculator/index.html"
},{
    photo:"https://img.freepik.com/premium-photo/secretary-examines-electronic-form-man-resume-job-search-resume-writing-concept_151013-24865.jpg?w=740",
    title:"Resume Template",
    link: "./Assets/9-Task-12/task-12.html"
},{
    photo:"https://img.freepik.com/free-photo/cocktail-glasses_144627-34959.jpg?w=740&t=st=1680954785~exp=1680955385~hmac=59f80803f532228604d06067317fa465933c4c9a7c40b08c58d1c98a13eb2d9a",
    title:"Menu of Drinks",
    link: "./Assets/10-Task-22/task-22.html"
},{
    photo:"https://t3.ftcdn.net/jpg/05/47/14/70/240_F_547147053_eUDKr7PG3pP3P1HCKHjQFANCEcQwUjoA.jpg",
    title:"form Validation",
    link: "./Assets/11-Task-5/task-5.html"
},{
    photo:"https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34865.jpg?size=626&ext=jpg&ga=GA1.2.832726299.1680773253&semt=ais",
    title:"Add to Cart",
    link: "./Assets/12-Task-8/task-8.html"
},{
    photo:"https://img.freepik.com/free-vector/quote-with-watercolor-texture-background_125540-567.jpg?w=740&t=st=1680955256~exp=1680955856~hmac=16a9fd545eff0f9c3104fc39290287b781061021410c9aebc712a4f08a236a3c",
    title:"Quotes",
    link: "./Assets/13-Task-9/task-9.html"
},{
    photo:"https://img.freepik.com/free-photo/mixed-fruits-with-apple-banana-orange-other_74190-938.jpg?size=626&ext=jpg&ga=GA1.1.832726299.1680773253&semt=sph",
    title:"Fruits Calories",
    link: "./Assets/14-Task-10/task-10.html"
},{
    photo:"https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?size=626&ext=jpg&ga=GA1.1.832726299.1680773253&semt=ais",
    title:"Student Mark List",
    link: "./Assets/15-Task-13/task-13.html"
},{
    photo:"https://t4.ftcdn.net/jpg/01/46/89/33/240_F_146893339_W7gl4KxGZkDlaac8f64FpFLRSeyWmzt9.jpg",
    title:"Car Details",
    link: "./Assets/16-Task-16/task-16.html"
},{
    photo:"https://img.freepik.com/free-vector/control-knob-regulators_1284-42969.jpg?size=626&ext=jpg&ga=GA1.1.832726299.1680773253&semt=ais",
    title:"Counter",
    link: "./Assets/17-Task-17/task-17.html"
},{
    photo:"https://img.freepik.com/free-vector/search-concept-landing-page_52683-11001.jpg?size=626&ext=jpg&ga=GA1.1.832726299.1680773253&semt=sph",
    title:"Check Vowels",
    link: "./Assets/18-Task-4/task-4.html"
},{
    photo:"https://img.freepik.com/free-photo/close-up-woman-laptop-using-mouse_23-2148532904.jpg?size=626&ext=jpg&ga=GA1.1.832726299.1680773253&semt=ais",
    title:"Mouse enter",
    link: "./Assets/19-Task-6/task-6.html"
},{
    photo:"https://img.freepik.com/premium-psd/social-media-love-like-minimalist-3d-button-icon_85867-176.jpg?size=626&ext=jpg&ga=GA1.1.832726299.1680773253&semt=sph",
    title:"Favourite",
    link: "./Assets/20-Task-11/task-11.html"
},{
    photo:"https://img.freepik.com/premium-photo/tax-word-written-wooden-cubes_352439-51.jpg?size=626&ext=jpg&ga=GA1.1.832726299.1680773253&semt=ais",
    title:"Alphabetical Order",
    link: "./Assets/21-Task-19/task-19.html"
}]

let css_col = document.querySelector('.css-col')
let js_col = document.querySelector('.js-col')

css_list.forEach((obj)=>{
    let card_row = document.createElement('div')
    let p_pic = document.createElement('img')
    let box_text = document.createElement('div')
    let h3 = document.createElement('h3')
    let l_icon = document.createElement('a')

    card_row.className = "card-row"
    box_text.className = "box-text"

    p_pic.src= obj.photo
    h3.innerText = obj.title
    l_icon.innerHTML= `<i class="fa-solid fa-up-right-from-square link-icon">`
    l_icon.href=obj.link
    l_icon.target="_blank"

    box_text.append(h3, l_icon)
    card_row.append(p_pic, box_text)
    css_col.appendChild(card_row)
})

js_list.forEach((obj)=>{
    let card_row = document.createElement('div')
    let p_pic = document.createElement('img')
    let box_text = document.createElement('div')
    let h3 = document.createElement('h3')
    let l_icon = document.createElement('a')

    card_row.className = "card-row"
    box_text.className = "box-text"

    p_pic.src= obj.photo
    h3.innerText = obj.title
    l_icon.innerHTML= `<i class="fa-solid fa-up-right-from-square link-icon">`
    l_icon.href=obj.link
    l_icon.target="_blank"

    box_text.append(h3, l_icon)
    card_row.append(p_pic, box_text)
    js_col.appendChild(card_row)
})

