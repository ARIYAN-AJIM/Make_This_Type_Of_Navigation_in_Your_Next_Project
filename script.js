
var active = 3;

var mncircle = document.querySelectorAll(".mncircle");
var second = document.querySelectorAll(".second");

gsap.to(mncircle[active-1],{
    opacity:.5
})
gsap.to(second[active-1],{
    opacity:1
})


mncircle.forEach(function(val, index){
    val.addEventListener("click", function(){
        gsap.to(".circle",{
            rotate:(3.9-(index+.9))*10,
            ease: Expo.easeInOut,
            duration:1
        })

        greyout();
        gsap.to(this,{
            opacity:.5
        })

        gsap.to(second[index],{
            opacity:1,
         
        })
        
    })
})


function greyout(){
    gsap.to(mncircle,{
        opacity:.08
    })

    gsap.to(second,{
        opacity:.4
    })
}

gsap.to(".circle",{
    rotate:0,
    duration:2,
    ease: Power3.easeInOut
})