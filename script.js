const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let main = document.getElementById('main');
let circle = document.querySelector("#minicircle");   

var timeout;

function followMouse(){
    window.addEventListener("mousemove", function(dets){
        circle.style.top =dets.clientY+'px';
        circle.style.left =dets.clientX+'px';
    })
}

function hidecircle(){

    main.addEventListener("mouseleave", ()=>{
        circle.style.scale = 0;
    })

    main.addEventListener('mouseenter',()=>{
        circle.style.scale = 1;
    })
}

function firstPageAni(){
    var tl = gsap.timeline();

    tl.from('#nav',{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo
    })
    .to('.boundingelem',{
        y:0,
        duration:1,
        delay:-.5,
        stagger:.2
    })
    .from('#herofooter',{
        y:'-10',
        duration:.5,
        opacity:0
    })
}


document.querySelectorAll('.elem').forEach(function(elem){
    rotate = 0;
    diff = 0;
    elem.addEventListener("mouseleave" , function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            display:"none",
        });
    });
    elem.addEventListener('mousemove' , function(dets){
        diff = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease : Power2,
            display:"inline",
            top:dets.clientY - elem.getBoundingClientRect().top - elem.getBoundingClientRect().height/1.8,
            left:dets.clientX - elem.querySelector("img").getBoundingClientRect().width/1.6,
            rotate:gsap.utils.clamp(-20,20,diff),
        });
    });
})

var icon = document.querySelector("#herofooter a i");
var heading = document.querySelectorAll('#herofooter a');

heading.forEach(function(h){
    h.addEventListener('mouseenter' , function(){
    gsap.to(h.querySelector('i'),{
        duration:1,
        ease: Power4,
        onStart: ()=>{
            h.querySelector('i').classList.add('ri-arrow-right-line'); 
            h.querySelector('i').classList.remove('ri-arrow-right-up-line');
        },
    })
})
    h.addEventListener('mouseleave' , function(){
    gsap.to(h.querySelector('i'),{
        onStart: ()=>{
            h.querySelector('i').classList.remove('ri-arrow-right-line'); 
            h.querySelector('i').classList.add('ri-arrow-right-up-line');
        },
    })
})
})

var sush3 = document.querySelector('#suscribe h3');
sush3.addEventListener('mouseenter',function(){
    gsap.to(sush3.querySelector('i'),{
        onStart: ()=>{
            sush3.querySelector('i').classList.add('ri-arrow-right-line'); 
            sush3.querySelector('i').classList.remove('ri-arrow-right-up-line');
        },
})
})
sush3.addEventListener('mouseleave',function(){
    gsap.to(sush3.querySelector('i'),{
        onStart: ()=>{
            sush3.querySelector('i').classList.remove('ri-arrow-right-line'); 
            sush3.querySelector('i').classList.add('ri-arrow-right-up-line');
        },
})
})



hidecircle();   
firstPageAni();
followMouse();