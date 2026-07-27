// ===========================
// Al-Esawy Design Script
// ===========================

// تغيير شكل الهيدر عند التمرير
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.5)";
    } else {
        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "none";
    }
});

// ظهور العناصر أثناء التمرير
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition=".8s";

observer.observe(card);

});

// زر الرجوع لأعلى

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// تأثير الكتابة

const hero=document.querySelector(".hero h1");

const text=hero.innerText;

hero.innerText="";

let i=0;

function type(){

if(i<text.length){

hero.innerHTML+=text.charAt(i);

i++;

setTimeout(type,70);

}

}

type();

// عدادات الإحصائيات

const numbers=document.querySelectorAll(".stats h2");

numbers.forEach(num=>{

const target=parseInt(num.innerText);

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

num.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

num.innerText=target+"+";

}

}

update();

});