

// b11=document.getElementById("bt11")
// b12=document.getElementById("bt12")

// n1=document.getElementById("nb1")
// // n1len=document.querySelectorAll("#n1")
// // totallen=n1len.length
// // console.log(totallen)

// b11.addEventListener("click", () =>{
//     n1.style.transform="translateX(-39vw)"
 
// })
// b12.addEventListener("click", () =>{
//     n1.style.transform="translateX(39vw)"
 
// })







let b11 = document.getElementById("bt11"); // previous button
let b12 = document.getElementById("bt12"); // next button
let n1 = document.getElementById("nb1");   // slide container

let index = 0; 
const totalImages = 3; // total number of photos

b12.addEventListener("click", () => {
  index = (index + 1) % totalImages;
  n1.style.transform = `translateX(-${index * 33}%)`;
  n1.style.transition = "transform 0.6s ease";
});

b11.addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages;
  n1.style.transform = `translateX(-${index * 100}%)`;
  n1.style.transition = "transform 0.6s ease";
});

