const background1 = ()=>{
   document.querySelector('body').style.background = "url('./img/2.jpg') center center / cover";
   localStorage.setItem("img", "back1");
}
const background2 = ()=>{
   document.querySelector('body').style.background = "url('./img/5.jpg') center center / cover";
    localStorage.setItem("img", "back2");
}
const background3 = ()=>{
   document.querySelector('body').style.background = "url('./img/3.jpg') center center / cover";
    localStorage.setItem("img", "back3");
}
const background4 = ()=>{
   document.querySelector('body').style.background = "url('./img/4.jpg') center center / cover";
    localStorage.setItem("img", "back4");
}
const background5 = ()=>{
   document.querySelector('body').style.background = "url('./img/1.jpg') center center / cover";
    localStorage.setItem("img", "back5");
}

const openbox = ()=>{
   document.getElementById("setting_btn").classList.toggle("close_btn");
   document.getElementById("box_img").classList.toggle("Show_box")
}

const runback = ()=>{
   let all = localStorage.getItem("img");
   document.querySelector('body').classList.add(`${all}`)
}
runback()