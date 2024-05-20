let list = document.querySelectorAll('.carousel .list .item');
let carousel = document.querySelector('.carousel');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let mockup = document.querySelector('.mockup');

let count = list.length;
let active = 0;
let leftMockup = 0;
let left_each_item = 100 / (list.length - 1);


next.onclick = () => {
    active = active >= count - 1 ? 0 : active + 1;
    leftMockup = leftMockup + left_each_item;
    carousel.classList.remove('right');
    changeCarousel();
}
prev.onclick = () => {
    active = active <= 0 ? count - 1 : active - 1;
    leftMockup = leftMockup - left_each_item;
    carousel.classList.add('right');
    changeCarousel();
}
function changeCarousel() {
    // find item has class hidden to remove it
    let hidden_old = document.querySelector('.item.hidden');
    if(hidden_old) hidden_old.classList.remove('hidden');

    // find item old active to remove it and add class hidden
    let active_old = document.querySelector('.item.active');
    active_old.classList.remove('active');
    active_old.classList.add('hidden');
    // add class active in position active new
    list[active].classList.add('active');
    // change mockup background
    mockup.style.setProperty('--left', leftMockup + '%');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}


// auto run 3s
let refreshInterval = setInterval(()=> {next.click()}, 3000);









// getting HTML elements
const nav = document.querySelector("nav"),
      toggleBtn = nav.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click" , () =>{
    nav.classList.toggle("open");
  });

// js code to make draggable nav
function onDrag({movementY}) { //movementY gets mouse vertical value
  const navStyle = window.getComputedStyle(nav), //getting all css style of nav
        navTop = parseInt(navStyle.top), // getting nav top value & convert it into string
        navHeight = parseInt(navStyle.height), // getting nav height value & convert it into string
        windHeight = window.innerHeight; // getting window height

  nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
  if(navTop > windHeight - navHeight){
    nav.style.top = `${windHeight - navHeight}px`;
  }
}

//this function will call when user click mouse's button and  move mouse on nav
nav.addEventListener("mousedown", () =>{
  nav.addEventListener("mousemove", onDrag);
});

//these function will call when user relase mouse button and leave mouse from nav
nav.addEventListener("mouseup", () =>{
  nav.removeEventListener("mousemove", onDrag);
});
nav.addEventListener("mouseleave", () =>{
  nav.removeEventListener("mousemove", onDrag);
});
