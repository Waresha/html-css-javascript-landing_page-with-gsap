let vl = gsap.timeline();

vl
.from(".nav" , {
  opacity : 0 ,
  y : 20,
  delay:1
})
.from(".Contant h1" , {
  opacity : 0 ,
  scale:1.3,
  duration:1
})
.from("#button" ,{
  y:20 ,
  opacity : 0
})
.from(["#i1" , "#i3"] ,{
  x : -40 ,
  scale : 1,
  opacity : 0,
  duration : 1 
})
.from(["#i2 , #i4"],{
  x : 40,
  scale:1,
  opacity:0,
  duration:1,
  delay : "-1"
})
