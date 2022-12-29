const tabs = document.querySelectorAll('.tab');
const tabs_container = document.querySelector('.tab-container')
const text_container = document.querySelectorAll('.text-container')
const education_container = document.querySelector('.education-container');
const nav = document.querySelector('.nav');
tabs_container.addEventListener('click', function (e) {
  tabs.forEach(t => t.classList.remove('active-tab'));
  text_container.forEach(t => t.classList.remove('active-container'))
  e.target.classList.add('active-tab');
  for (let i = 1; i < 4; i++) {
    if (e.target.classList.contains(`tab-${i}`)) {
      document.querySelector(`.tab-container${i}`).classList.add('active-container')
      console.log(`tab-${i}`);
    }
  }

})
// const scroll_coords = education_container.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   console.log(scroll_coords);
//   if (window.scrollY > scroll_coords.top)
//     nav.classList.add('sticky-nav')
//   else
//     nav.classList.remove('sticky-nav')
// })

const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  })
};
const obsOptions = {
  root: null,
  threshold: [0, 0.2]
}
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(education_container);


const main = document.querySelector('.main');
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting)
    nav.classList.add('sticky-nav');
  else nav.classList.remove('sticky-nav')
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
})

headerObserver.observe(main);
////////////////////////////////////////////

document.querySelectorAll('.btn_nav').forEach(t => t.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('btn_nav')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
}));

///////////////////////////////////////////////////
const allSections = document.querySelectorAll('.section')
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('hidden');
  observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.30
})
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('hidden');
})

///////////////////////////////////////////////////////
const img_box = document.querySelector('.img-box')
const abhi_image = document.querySelector('.niwesh_img');
niwe_image.addEventListener('mouseover', function () {
  img_box.classList.add('img-hover');

})

const btns = document.querySelectorAll('.btn_nav');


document.querySelector('.nav_list').addEventListener('click', function (e) {
  btns.forEach(btn => btn.classList.remove('active_link'))
  e.target.classList.add('active_link');
})






const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const mainNav = document.querySelector('.main-nav');



menu.addEventListener('click', function () {
  mainNav.classList.toggle('active')
  close.classList.toggle('close-active')
  menu.classList.toggle('menu-active')
});

close.addEventListener('click', function () {
  mainNav.classList.toggle('active')
  close.classList.toggle('close-active')
  menu.classList.toggle('menu-active')
})
