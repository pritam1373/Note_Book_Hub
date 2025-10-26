let b11 = document.getElementById("bt11"); 
let b12 = document.getElementById("bt12"); 
let b21 = document.getElementById("bt21"); 
let b22 = document.getElementById("bt22"); 
let b31 = document.getElementById("bt31"); 
let b32= document.getElementById("bt32"); 
let b41 = document.getElementById("bt41"); 
let b42 = document.getElementById("bt42"); 
let b51 = document.getElementById("bt51"); 
let b52 = document.getElementById("bt52"); 
let b61 = document.getElementById("bt61"); 
let b62 = document.getElementById("bt62"); 
let b71 = document.getElementById("bt71"); 
let b72 = document.getElementById("bt72"); 
let b81 = document.getElementById("bt81"); 
let b82 = document.getElementById("bt82"); 
let b91 = document.getElementById("bt91"); 
let b92 = document.getElementById("bt92"); 
let b101 = document.getElementById("bt101"); 
let b102= document.getElementById("bt102"); 

let n1 = document.getElementById("nb1");  
let n2 = document.getElementById("nb2");  
let n3 = document.getElementById("nb3");  
let n4 = document.getElementById("nb4");  
let n5 = document.getElementById("nb5");  
let n6 = document.getElementById("nb6");  
let n7 = document.getElementById("nb7");  
let n8 = document.getElementById("nb8");  
let n9 = document.getElementById("nb9");  
let n10 = document.getElementById("nb10");


let index = 0; 
totalImages = 3; 

       // 1st Noot Book design
b12.addEventListener("click", () => {
  index = (index + 1) % totalImages;
  n1.style.transform = `translateX(-${index * 33}%)`;
  n1.style.transition = "0.6s";
});

b11.addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages;
  n1.style.transform = `translateX(-${index * 33}%)`;
  n1.style.transition = "0.5s";
});


             // 2nd note book design


b22.addEventListener("click", () => {
  index = (index + 1) % totalImages;
  n2.style.transform = `translateX(-${index * 33}%)`;
  n2.style.transition = "0.6s";
});

b21.addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages;
  n2.style.transform = `translateX(-${index * 33}%)`;
  n2.style.transition = "0.5s";
});


        //3rd note book design


b32.addEventListener("click", () => {
  index = (index + 1) % totalImages;
  n3.style.transform = `translateX(-${index * 33}%)`;
  n3.style.transition = "0.6s";
});

b31.addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages;
  n3.style.transform = `translateX(-${index * 33}%)`;
  n3.style.transition = "0.5s";
});        

        //4th note book design
b42.addEventListener("click", () => {
  index = (index + 1) % totalImages;
  n4.style.transform = `translateX(-${index * 33}%)`;
  n4.style.transition = "0.6s";
});

b41.addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages;
  n4.style.transform = `translateX(-${index * 33}%)`;
  n4.style.transition = "0.5s";
});  

              //5th note book design
b52.addEventListener("click", () => {
  index = (index + 1) % totalImages;
  n5.style.transform = `translateX(-${index * 33}%)`;
  n5.style.transition = "0.6s";
});

b51.addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages;
  n5.style.transform = `translateX(-${index * 33}%)`;
  n5.style.transition = "0.5s";
}); 

              //6th note book design
b62.addEventListener("click", () => {
  index = (index + 1) % totalImages;
  n6.style.transform = `translateX(-${index * 33}%)`;
  n6.style.transition = "0.6s";
});

b61.addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages;
  n6.style.transform = `translateX(-${index * 33}%)`;
  n6.style.transition = "0.5s";
})



              //7th note book design
let totalimg7=5
b72.addEventListener("click", () => {
  index = (index + 1) % totalimg7;
  n7.style.transform = `translateX(-${index * 20}%)`;
  n7.style.transition = "0.6s";
});

b71.addEventListener("click", () => {
  index = (index - 1 + totalimg7) % totalimg7;
  n7.style.transform = `translateX(-${index * 20}%)`;
  n7.style.transition = "0.5s";
})


           // End of 8th note book design


b82.addEventListener("click", () => {
  index = (index + 1) % totalImages;
  n8.style.transform = `translateX(-${index * 33}%)`;
  n8.style.transition = "0.6s";
});

b81.addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages;
  n8.style.transform = `translateX(-${index * 33}%)`;
  n8.style.transition = "0.5s";
})
          
            // End of 9th note book design
 
b92.addEventListener("click", () => {
  index = (index + 1) % totalImages;
  n9.style.transform = `translateX(-${index * 33}%)`;
  n9.style.transition = "0.6s";
});

b91.addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages;
  n9.style.transform = `translateX(-${index * 33}%)`;
  n9.style.transition = "0.5s";
})

            // End of 10th note book design
                 
totalimg10=4
b102.addEventListener("click", () => {
  index = (index + 1) % totalimg10;
  n10.style.transform = `translateX(-${index * 25}%)`;
  n10.style.transition = "0.6s";
});

b101.addEventListener("click", () => {
  index = (index - 1 + totalimg10) % totalimg10;
  n10.style.transform = `translateX(-${index * 25}%)`;
  n10.style.transition = "0.5s";
})            
