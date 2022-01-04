AOS.init();



//layout

let layout=document.querySelector(".layout");
let video=document.querySelector(".layout video");
let exit=document.querySelector(".layout i");

let videoBtn=document.querySelector(".choose-us .choose .video");

videoBtn.addEventListener('click',()=>{

    layout.style.display="block"
    video.autoplay=true;
    video.load();



})


exit.addEventListener("click",()=>{


    layout.style.display="none"
    video.pause();
    video.currentTime = 0;
})


