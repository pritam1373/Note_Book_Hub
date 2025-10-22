

b11=document.getElementById("bt11")
b12=document.getElementById("bt12")

n1=document.getElementById("nb1")
n1len=document.querySelectorAll("n1")
totallen=n1len.length
console.log(totallen)










b11.addEventListener("click", () =>{
    n1.style.transform="translateX(-39vw)"
 
})
b12.addEventListener("click", () =>{
    n1.style.transform="translateX(39vw)"
 
})
