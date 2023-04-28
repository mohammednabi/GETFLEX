let loader = document.getElementById("loading");
let page = document.getElementById("page");

window.addEventListener("load", function () {
 

  loader.style.display = "none";
  page.style.display = "block";
});



// these for the swiper cards


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,

  //  scrollbar: {
  //    el: ".swiper-scrollbar",
  //     hide: true,
  //  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    centeredSlides: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 35,
    },
  },
});

// these for random recommend

let links = [
  "https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-poster.jpg",
  "https://cdn.shopify.com/s/files/1/1057/4964/products/Avengers-Infinity-War-Vintage-Movie-Poster-Original-1-Sheet-27x41_3598eaae-2806-4429-986b-218cc4f08b73_300x@2x.jpg?v=1670360456",
  "https://rukminim1.flixcart.com/image/416/416/k0h12fk0/poster/g/3/t/medium-joker-movie-poster-for-room-office-13-inch-x-19-inch-original-imafk9kg4hczamuz.jpeg?q=70",
  "https://i5.walmartimages.com/asr/deaf2e49-0946-4bae-996a-befc2d602ba1.13a380cc3fd906e3d918e67b593e138a.jpeg",
  "https://images.photowall.com/products/51078/movie-poster-jaws.jpg?h=699&q=85",
  "https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-ron-poster.jpg",
  "https://www.filmpostergallery.co.nz/wp-content/uploads/2022/10/Moana-One-Sheet-Movie-Poster-1.jpg",
  "https://webneel.com/daily/sites/default/files/images/daily/09-2019/2-movie-poster-design-aladdin-disney-glossy-composite.jpg",
  "https://images.thedirect.com/media/photos/posd1_1.jpg",
  "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
  "https://i2.wp.com/raisingwhasians.com/wp-content/uploads/2015/06/Ant-Man-Avengers-movie-poster.jpg",
  "https://media.comicbook.com/2018/07/aqamn-vert-tsr-dom-2764x4096-r01-master-1122913.jpeg",
  "https://i0.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2021/08/E8XGL0OUcAMqFKJ.jpeg?fit=640%2C800&ssl=1",
  "https://wellgousa.com/sites/default/files/2023-03/Unwelcome-AmericanMysteryHorrorThriller-WellGoUSA-812x1200-KeyArtPoster.jpeg",
  "https://lumiere-a.akamaihd.net/v1/images/image_76dc8ad9.jpeg?region=0%2C0%2C1400%2C2100",
  "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/07/munsters-poster.png?ssl=1",
  "https://media.comicbook.com/2017/10/ant-man-movie-poster-marvel-cinematic-universe-1038903.jpg",
  "https://i.etsystatic.com/34708433/r/il/15fb83/4498029997/il_1080xN.4498029997_cjib.jpg",
];


MovieImg = document.querySelectorAll(".mySwiper .swiper-slide .cardy img");

let ImgLink = randomUniqueNum(links.length, MovieImg.length);

ImgLink.forEach(sub1)


for (let i = 0; i < ImgLink.length; i++)
{
  MovieImg[i].src = links[ImgLink[i]]; 
}


function sub1 (value, index, result)
{
  result[index] = value - 1;
  
}

function randomUniqueNum(range, outputCount) {
  let arr = [];
  for (let i = 1; i <= range; i++) {
    arr.push(i);
  }

  let result = [];

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - i];
  }

  return result;
}