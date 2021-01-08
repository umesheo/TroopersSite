var front = document.querySelector('.face-front');
var back = document.querySelector('.face-back');
var flip = document.querySelector('.book-content');
var uno = document.querySelectorAll('.book');
var portada = document.querySelectorAll('#portada');

var contZindex = 2;
var customZindex = 1;


for (var i = 0; i < uno.length; i++) {
  uno[i].style.zIndex = customZindex;
  customZindex--;

  uno[i].addEventListener('click', function(e){

    var tgt = e.target;
    var unoThis = this;

    unoThis.style.zIndex = contZindex;
    contZindex++;

    if (tgt.getAttribute('class') == 'face-front') {
      unoThis.style.zIndex = contZindex;
      contZindex +=20;
      setTimeout(function(){
        unoThis.style.transform = 'rotateY(-180deg)';
      }, 500);
    }
    if (tgt.getAttribute("class") == 'face-back') {
      unoThis.style.zIndex = contZindex;
      contZindex +=20;

      setTimeout(function(){
        unoThis.style.transform = 'rotateY(0deg)';
      }, 500);
    }

    if (tgt.getAttribute('id') == 'portada') {
      flip.classList.remove("trnsf-reset");
      flip.classList.add("trnsf");
    }
    if (tgt.getAttribute('id') == 'trsf') {
      flip.classList.remove("trnsf");
      flip.classList.add("trnsf-reset");
    }

  });
}
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});