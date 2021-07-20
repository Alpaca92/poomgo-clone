// header
const gnb = document.querySelector('.gnb');

window.addEventListener('load', () => {
  if (window.innerWidth <= 1024) {
    gnb.style.height = `${document.documentElement.clientHeight}px`;
  } else {
    gnb.style.height = `100%`;
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth <= 1024) {
    gnb.style.height = `${document.documentElement.clientHeight}px`;
  } else {
    gnb.style.height = `100%`;
  }
})

const hamburger = document.querySelector('.tnb__hamburger');
const gnbClose = gnb.querySelector('.gnb__close');

hamburger.addEventListener('click', () => {
  const gnbUl = gnb.querySelector('ul');

  gnbUl.style.display = 'block';
})

gnbClose.addEventListener('click', () => {
  const gnbUl = gnb.querySelector('ul');
  
  gnbUl.style.display = 'none';
})

// swiper init
var swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// get idx
const swiperSlide = document.querySelectorAll(".mySwiper .swiper-slide");

function getIdx() {
  for (let i = 0; i < swiperSlide.length; i++) {
    if (swiperSlide[i].classList.contains("swiper-slide-active")) {
      return i;
    }
  }
}

function setIdx() {
  const swiperIdx = document.querySelector(".swiper__idx");
  const idx = getIdx();

  const classListArr = Array.from(swiperSlide[idx].classList);
  const includeIdx = classListArr.filter((el) => el.includes("bigvisual__img"));

  return (swiperIdx.innerHTML = includeIdx[0][includeIdx[0].length - 1]);
}

function init() {
  setIdx();
  setInterval(setIdx, 100);
}

init();

// since
var swiper = new Swiper(".poomgo-history__container", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.poomgo-history__pagination',
  },
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
});

// poomgo-is
const textBox = document.querySelectorAll('.poomgo-is .poomgo-is__textbox');

textBox.forEach((el, idx) => {
  el.addEventListener('mouseenter', () => {
    el.childNodes[1].attributes[1].nodeValue = `src/images/poomgo-is_hover_0${idx + 1}.png`;
  });

  el.addEventListener('mouseleave', () => {
    el.childNodes[1].attributes[1].nodeValue = `src/images/poomgo-is_0${idx + 1}.png`;
  });
})

// difference
const differenceLists = document.querySelectorAll(".difference__lists li");
const differenceImages = document.querySelectorAll(
  ".difference__img-container .difference__screen"
);

function getDifferenceListsIdx(list) {
  const idx = list.innerHTML.trim().slice(1, 2);

  return idx;
}

function removeListActive() {
  differenceLists.forEach((list) => list.classList.remove("list-Active"));
}

function addListActive(idx) {
  differenceLists[idx].classList.add("list-Active");
}

function removeScreenActive() {
  differenceImages.forEach((img) => img.classList.remove("screen-Active"));
}

function addScreenActive(idx) {
  differenceImages[idx].classList.add("screen-Active");
}

function handleDifferenceClick() {
  if (!this.classList.contains("list-Active")) {
    const idx = getDifferenceListsIdx(this) - 1;

    removeListActive();
    removeScreenActive();

    addListActive(idx);
    addScreenActive(idx);
  }
}

differenceLists.forEach((list) =>
  list.addEventListener("click", handleDifferenceClick)
);

// footer
const familySiteBtn = document.querySelector('.family-site > span');
const familyList = document.querySelector('.family-site-list');

familySiteBtn.addEventListener('click', () => {
  familyList.classList.toggle('family-active');
})

