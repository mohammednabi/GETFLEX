let myimg = document.createElement("img");

myimg.src ="https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-poster.jpg";
  

let SwiperSlide = document.createElement("div");
let cardy = document.createElement("div");
let SwiperWrapper = document.querySelector(".swiper-wrapper");

SwiperSlide.classList.add("swiper-slide");
cardy.classList.add("cardy");
cardy.classList.add("mb-5");
cardy.classList.add("ms-2");
cardy.classList.add("me-2");

  



let addbtn = document.getElementById("addmovie");

addbtn.addEventListener("click", function ()
{
   
   
        cardy.appendChild(myimg);
        SwiperSlide.appendChild(cardy);
        SwiperWrapper.appendChild(SwiperSlide);
  
    // console.log("hello");
 body.appendChild(myimg);
   
});
