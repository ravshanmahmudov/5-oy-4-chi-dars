let texts =document.getElementById("textss")
let texts2 =document.getElementById("textss2")
let texts3 =document.getElementById("textss3")
let desc =document.getElementById("desc")
let desc2 =document.getElementById("desc2")
let desc3 =document.getElementById("desc3")
let p =document.getElementById("p")
let c =document.getElementById("c")
let d =document.getElementById("d")

texts.addEventListener('click',function(){
desc.style.backgroundColor = 'white'
p.style.color ='red'
})
texts2.addEventListener('click',function(){
 desc2.style.backgroundColor = 'white'
 c.style.color ='#000'
})
texts3.addEventListener('click',function(){
    desc3.style.backgroundColor = 'white'
    d.style.color ='#0, 204, 255'
})


