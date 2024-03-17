//   // Function to handle scroll event
//   function handleScroll() {
//     const rightElements = document.querySelectorAll(".slide-in-from-right");
//     const leftElements = document.querySelectorAll(".slide-in-from-left");
//
//     rightElements.forEach((element) => {
//       if (isInViewport(element)) {
//         element.classList.add("slide-in-from-right-active");
//       } else {
//         element.classList.remove("slide-in-from-right-active"); // Remove the class if element is not in view
//       }
//     });
//
//     leftElements.forEach((element) => {
//       if (isInViewport(element)) {
//         element.classList.add("slide-in-from-left-active");
//       } else {
//         element.classList.remove("slide-in-from-left-active"); // Remove the class if element is not in view
//       }
//     });
//   }
//
//   // Function to check if an element is in the viewport
//   function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
//
//   // Add event listener for scroll event
//   window.addEventListener("scroll", handleScroll);
//
//   // Initial check when the page loads
//   handleScroll();
//
window.addEventListener("scroll", function () {
  const parallaxContent1 = document.querySelector(".parallax-content1");
  const distanceFromTop = parallaxContent1.getBoundingClientRect().top;

  // If the element is in the viewport
  if (distanceFromTop < window.innerHeight * 0.75) {
    parallaxContent1.classList.add("visible");
  } else {
    parallaxContent1.classList.remove("visible");
  }
});
window.addEventListener("scroll", function () {
  const parallaxContent2 = document.querySelector(".parallax-content2");
  const distanceFromTop = parallaxContent2.getBoundingClientRect().top;

  // If the element is in the viewport
  if (distanceFromTop < window.innerHeight * 0.75) {
    parallaxContent2.classList.add("visible");
  } else {
    parallaxContent2.classList.remove("visible");
  }
});
