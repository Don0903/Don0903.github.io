let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".front-page",
    start: "top",
    end: "98%",
    scrub: true,
    pin: true,
  },
});

// animations
tl.fromTo(
  ".front-page",
  { clipPath: "circle(5%)" },
  { clipPath: "circle(100%)", duration: 3}
);
tl.fromTo(".icon", { scale: 1 }, { scale: 0, opacity: 0,duration:1 },"-=3");
//the "-=3 basically starts the animation of icon and circle at the same time"
tl.fromTo(".title", { opacity: 0 }, { opacity: 1,duration:1 },"-=2");
tl.fromTo(".sub-title", { opacity: 0 }, { opacity: 1,duration:1 },"-=1.5");

//sticky for the header
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");


// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}