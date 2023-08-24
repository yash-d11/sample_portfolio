
gsap.from("#nav",{
    opacity:0,
    y:-100,
    
    duration :1
})
{var t1 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page1`,
        scroller: "body",
        
        start: "top 20%",
        end: "top 10%",
        // scrub: 3,
      },
})
t1.from(`#page1-left`,{
    opacity:0,
    x:-100,
    // delay:2,
    duration:1
},"abc")
t1.from(`#page1-right`,{
    opacity:0,
    x:100,
    // delay:2,
    duration:1
},"abc")}
{var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page2`,
        scroller: "body",
        
        start: "top 30%",
        end: "top 10%",
        // scrub: 3,
      },
})
t2.from(`#page2-left`,{
    opacity:0,
    x:-100,
    // delay:2,
    duration:1
},"abcd")
t2.from(`#page2-right`,{
    opacity:0,
    x:100,
    // delay:2,
    duration:1
},"abcd")}
{var t3 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page3`,
        scroller: "body",
        
        start: "top 30%",
        end: "top 10%",
        // scrub: 3,
      },
})
t3.from(`#page3-left`,{
    opacity:0,
    x:-100,
    // delay:2,
    duration:1
},"abcde")
t3.from(`#page3-right`,{
    opacity:0,
    x:100,
    // delay:2,
    duration:1
},"abcde")}
gsap.from("#page4",{
    opacity:0,
    y:200,
    duration:2,
    scrollTrigger: {
        trigger: `#page4`,
        scroller: "body",
        
        start: "top 70%",
        end: "top 50%",
        // scrub: 3,
      }
})

gsap.from("#page5",{
    opacity:0,
    y:200,
    duration:2,
    scrollTrigger: {
        trigger: `#page5`,
        scroller: "body",
        
        start: "top 70%",
        end: "top 50%",
        // scrub: 3,
      }
})
gsap.from("#page6",{
    opacity:0,
    y:200,
    duration:2,
    scrollTrigger: {
        trigger: `#page6`,
        scroller: "body",
        
        start: "top 70%",
        end: "top 50%",
        // scrub: 3,
      }
})
var ab = document.querySelector("#page6 #right i");
var rt = document.querySelector("#page6 #right")
ab.addEventListener("click",function(){
    
    gsap.to("#page6 #right hr",{
        opacity:0,
        duration:3
    },"e")
    gsap.to("#page6 #right",{
        rotation:360,
        duration:3
    },"e")
    
    gsap.to("#page6 #right i",{
        x:-95,
        duration:3
        
    },"e")
    gsap.to("#page6 #right h2",{
        y:-140,
        x:140,
        duration:3,
        scale:1.8
    },"e")
    document.querySelector("#page6 #right h2").innerHTML = "Sent"
    
    document.querySelector("#page6 #right #icon").innerHtml = `<i class="ri-check-double-line"></i>`
   
})