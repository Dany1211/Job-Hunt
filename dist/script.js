var tl = gsap.timeline()
gsap.from("nav h1,nav a,nav button,nav .profile",{
    y : -30 ,
    delay : 0.5 ,
    duration : 1 ,
    opacity : 0,
    stagger : 0.1

})
gsap.from(".heroimg",{
    x : 500 ,
    opacity : 0 ,
    delay :0.5 ,
    // rotate : 30 ,
    duration : 1 ,
})
tl.from(".hero",{
    x : -500 ,
    opacity : 0 ,
    delay :0.5 ,
    // rotate : -30 ,
    duration : 1 ,
})
tl.from(".btns1",{
    opacity:0,
    y:10,
    duration : 1 ,
})
gsap.from(".job1,.job2,.job3",{
    stagger: 0.25,
    y : 40 ,
    duration: 0.5,
    opacity : 0 ,
    // scale : 0 ,
    scrollTrigger : {
        trigger : ".job1,.job2,.job3",
        scroller :"body",
        // markers : true ,
        start : "top 70%"
    }
})
gsap.from(".job4,.job5,.job6",{
    stagger: 0.25,
    y : 40 ,
    duration: 0.5,
    opacity : 0 ,
    // scale : 0 ,
    scrollTrigger : {
        trigger : ".job4,.job5,.job6",
        scroller :"body",
        // markers : true ,
        start : "top 70%"
    }
})
gsap.from(".cover1",{
    x : 400 ,
    duration : 1 ,
    opacity : 0 ,
    scrollTrigger :{
        trigger : ".cover1",
        scroller : "body",
        // markers : true ,
        start : "Top 95%" ,
        end : "top 80%",
        scrub : 2,
    }

})
gsap.from(".feature1,.feature2",{
    y : -600 ,

    duration : 1 ,
    opacity : 0 ,
    scrollTrigger :{
        trigger : ".feature1,.feature2",
        scroller : "body",
        // markers : true ,
        start : "Top 5%" ,
        scrub : 2,
    }

})
gsap.from(".feature3,.feature4",{
    y : -600 ,

    duration : 1 ,
    opacity : 0 ,
    scrollTrigger :{
        trigger : ".feature3,.feature4",
        scroller : "body",
        // markers : true ,
        start : "Top 5%" ,
        scrub : 2,
    }

})
gsap.from(".feature5,.feature6",{
    y : -600 ,

    duration : 1 ,
    opacity : 0 ,
    scrollTrigger :{
        trigger : ".feature5,.feature6",
        scroller : "body",
        // markers : true ,
        start : "Top 5%" ,
        scrub : 2,
    }

})
gsap.from("#stats1",{
    x :500 ,
    duration : 10 ,
    opacity : 0 ,
    scrollTrigger :{
        trigger : "#stats1",
        scroller : "body",
        // markers : true ,
        start : "Top 95%" ,
        scrub : 2,
        end : "top 40%"
    }

})
gsap.from(".basic",{
    x :500 ,
    duration : 10 ,
    opacity : 0 ,
    scrollTrigger :{
        trigger : ".basic",
        scroller : "body",
        // markers : true ,
        start : "Top 95%" ,
        scrub : 2,
        end : "top 60%"
    }

})
gsap.from(".popular",{
    x :-500 ,
    duration : 10 ,
    opacity : 0 ,
    scrollTrigger :{
        trigger : ".popular",
        scroller : "body",
        // markers : true ,
        start : "Top 95%" ,
        scrub : 2,
        end : "top 70%"
    }

})
gsap.from(".enterprise",{
    x :500 ,
    duration : 10 ,
    opacity : 0 ,
    scrollTrigger :{
        trigger : ".enterprise",
        scroller : "body",
        // markers : true ,
        start : "Top 95%" ,
        scrub : 2,
        end : "top 80s%"
    }

})
gsap.from(".email",{
    x :-1200 ,
    duration : 10 ,
    opacity : 0 ,
    scrollTrigger :{
        trigger : ".email",
        scroller : "body",
        // markers : true ,
        start : "Top 95%" ,
        scrub : 2,
        end : "top 80%"
    }

})




