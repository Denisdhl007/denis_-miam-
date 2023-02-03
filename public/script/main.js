  // SECTION 3






  // SECTION 4

  let count1 = document.getElementById('counter1');
let count2 = document.getElementById('counter2');
let count3 = document.getElementById('counter3');
let count4 = document.getElementById('counter4');

function counterAnimation(counterNum, start, end, duration){
    let startTimestamp = null;
    function step(timestamp){
        if(!startTimestamp ){
            startTimestamp = timestamp;
        }
        let progress = Math.min((timestamp - startTimestamp) / duration, 1);
        counterNum.innerText = Math.floor(progress * (end - start) + start);
        if(progress < 1){
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

counterAnimation(count1, 0, 232, 2000)
counterAnimation(count2, 0, 521, 4500)
counterAnimation(count3, 0, 1453, 3000)
counterAnimation(count4, 0, 32, 1000)

  // SECTION 5

  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
  }
  
  function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
  
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btnFilter");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }



  // SECTION 6

let testimonialCarouselBtn = document.querySelectorAll(".carouselBtn > button");
let carouselItems = document.querySelector(".containerCarousel");

//btn carousel testimonial
for (let i = 0; i < testimonialCarouselBtn.length; i++) {
    testimonialCarouselBtn[i].addEventListener("click", ()=>{
        carouselItems.style.transform = `translateX(${-(testimonialCarouselBtn[i].value)*25}%)`;
        //btn active color
        document.querySelector(".btnActive").className="";
        testimonialCarouselBtn[i].className="btnActive";
    })
}




  // // Structure possible TEST
  // var swiper = new Swiper('.slides-1', {
  //   // Options de configuration de la glissière ici
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });



  // new Swiper('.slides-1', {
  //   speed: 600,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   }
  // });





  // SECTION ??

  // /**
  //  * Init swiper slider with 3 slides at once in desktop view
  //  */
  // new Swiper('.slides-3', {
  //   speed: 600,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 40
  //     },

  //     1200: {
  //       slidesPerView: 3,
  //     }
  //   }
  // });















// SECTION ??

  // /**
  //  * Gallery Slider
  //  */
  // new Swiper('.gallery-slider', {
  //   speed: 400,
  //   loop: true,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 20
  //     },
  //     640: {
  //       slidesPerView: 3,
  //       spaceBetween: 20
  //     },
  //     992: {
  //       slidesPerView: 5,
  //       spaceBetween: 20
  //     }
  //   }
  // });

