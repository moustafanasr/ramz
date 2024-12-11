document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const scrollWrap = document.querySelector(".smooth-scroll-wrapper");
  
  if (!scrollWrap) {
    console.error("Element with class 'smooth-scroll-wrapper' not found.");
    return;
  }

  const height = scrollWrap.getBoundingClientRect().height - 1;
  // console.log(height)
  const speed = 0.02;

  let offset = 0;

  // Set the body's height to enable native scrolling
  body.style.height = `${Math.floor(height)}px`;

  function smoothScroll() {
    // Calculate the interpolation value for the scroll position
    offset += (window.pageYOffset - offset) * speed;

    // Apply a smooth translation to the wrapper
    const scroll = `translateY(-${offset}px) translateZ(0)`;
    scrollWrap.style.transform = scroll;

    // Keep animating using requestAnimationFrame
    requestAnimationFrame(smoothScroll);
  }

  // Start the smooth scroll animation
  smoothScroll();
});




// Select the elements
const mainHeaderScroll = document.querySelector('.section-main-header .main-header-scroll');
const supHeader = document.querySelector('.section-main-sup-header .section-main-header');

// Define transform limits for different breakpoints
const transformLimits = {
  xs: -460, // Max-width 430px
  sm: -460, // Min-width 430px and max-width 600px
  md: -460, // Min-width 601px and max-width 767px
  lg: -460, // Min-width 768px and max-width 991px
  xl: -482, // Min-width 992px and max-width 1199px
  xxl: -482 // Min-width 1200px and above
};

// Function to determine the transform limit based on screen size
function getCurrentTransformLimit() {
  if (window.matchMedia('(max-width: 430px)').matches) {
    return transformLimits.xs;
  } else if (window.matchMedia('(min-width: 430px) and (max-width: 600px)').matches) {
    return transformLimits.sm;
  } else if (window.matchMedia('(min-width: 601px) and (max-width: 767px)').matches) {
    return transformLimits.md;
  } else if (window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
    return transformLimits.lg;
  } else if (window.matchMedia('(min-width: 992px) and (max-width: 1199px)').matches) {
    return transformLimits.xl;
  } else {
    return transformLimits.xxl; // Default for larger screens
  }
}

// Add scroll event listener
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // Current scroll position

  // Get the current transform limit
  const supHeaderMaxTransform = getCurrentTransformLimit();

  // Calculate the transform values
  const mainHeaderTransformY = Math.min(scrollY, 400); // Clamp at 400px

  // Adjust `supHeaderTransformY` based on screen size
  let supHeaderClamp = 0;
  if (window.matchMedia('(max-width: 600px)').matches) {
    supHeaderClamp = -100; // Max clamp for smaller devices
  }

  const supHeaderTransformY = Math.min(supHeaderMaxTransform + scrollY, supHeaderClamp);

  // Apply the transform styles
  mainHeaderScroll.style.transform = `translateY(${mainHeaderTransformY}px)`;
  supHeader.style.transform = `translateY(${supHeaderTransformY}px)`;
});

// Add resize event listener to update transform limits dynamically
window.addEventListener('resize', () => {
  const supHeaderMaxTransform = getCurrentTransformLimit();
  const scrollY = window.scrollY; // Ensure scroll position is factored in
  let supHeaderClamp = 0;
  if (window.matchMedia('(max-width: 600px)').matches) {
    supHeaderClamp = -100; // Max clamp for smaller devices
  }
  const supHeaderTransformY = Math.min(supHeaderMaxTransform + scrollY, supHeaderClamp);
  supHeader.style.transform = `translateY(${supHeaderTransformY}px)`;
});



// window.addEventListener('scroll', () => {
//   const viewportHeight = window.innerHeight; // Get the viewport height
//   console.log(viewportHeight); // Log the viewport height

//   const scrollY = window.scrollY; // Current scroll position
//   console.log(scrollY); // Log the scroll position


// });
// window.addEventListener('touchstart', () => {
//   console.log('Touch started!');
// });

// window.addEventListener('touchmove', () => {
//   console.log('Touch moving...');
// });

// window.addEventListener('scroll', () => {
//   console.log('Scrolling completed!');
// });
// function throttle(callback, delay) {
//   let lastCall = 0;
//   return () => {
//     const now = Date.now();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       callback();
//     }
//   };
// }

// window.addEventListener('scroll', throttle(() => {
//   console.log(`Scrolled to: ${window.scrollY}px`);
// }, 0));



// Select the elements
const divVideo = document.querySelector('.section-main-sup-header .div-video');

// Add scroll event listener
window.addEventListener('scroll', () => {
  const scrollsY = window.scrollY; // Current scroll position

  // Calculate the scale factor (range from 1 to 1.14 based on scrollY)
  const scaleFactor = Math.min(1 + scrollsY / 10000, 1.2); // Adjust the 1000 to control the scaling speed

  // Apply the scale transform to the div-video element
  divVideo.style.transform = `scaleX(${scaleFactor})`;

  // Optionally, add more transformation or effects if needed
});



// // Correctly structured array of image objects
// const images = [
//   {
//     src: "img/1.jpg",
//     title: "يُسر فيلج",
//     supTitle1: "شقق سكنية",
//     supTitle2: "حي السلامة",
//     link: "link1",
//   },
//   {
//     src: "img/2.jpg",
//     title: "جديل",
//     supTitle1: "أدوار سكنية",
//     supTitle2: "حي النرجس",
//     link: "link2",
//   },
//   {
//     src: "img/3.jpg",
//     title: "ستون كومبليكس",
//     supTitle1: "شقق سكنية",
//     supTitle2: "حي العقيق",
//     link: "link3",
//   },
//   {
//     src: "img/4.jpg",
//     title: "رمز 45",
//     supTitle1: "شقق سكنية",
//     supTitle2: "حي الشبيلي",
//     link: "link4",
//   },
//   {
//     src: "img/5.jpg",
//     title: "رمز المعالي",
//     supTitle1: "فلل سكنية",
//     supTitle2: "حي المعالي",
//     link: "link5",
//   },
//   {
//     src: "img/6.jpg",
//     title: "تَلّ الرمال 2",
//     supTitle1: "شقق سكنية",
//     supTitle2: "حي الرمال",
//     link: "link6",
//   },
//   {
//     src: "img/7.jpg",
//     title: "رافــد - مجمع مكتبي",
//     supTitle1: "مكاتب",
//     supTitle2: "حي حطين",
//     link: "link7",
//   },
// ];

// // Select image elements and titles
// const containers = Array.from(document.querySelectorAll('.scroll-horizontal .div-img img'));
// const titles = Array.from(document.querySelectorAll('.scroll-horizontal .horizontal-title'));
// const supTitles1 = Array.from(document.querySelectorAll('.scroll-horizontal .details .div-line-button .supTitle1'));
// const supTitles2 = Array.from(document.querySelectorAll('.scroll-horizontal .details .div-line-button .supTitle2'));

// // Ensure elements exist
// if (!containers.length || !titles.length || !supTitles1.length || !supTitles2.length) {
//   console.error('One or more containers, titles, or supTitle elements are missing. Please check your HTML.');
// }

// // Set initial images, titles, and supTitles
// const setInitialContent = () => {
//   containers.forEach((container, index) => {
//     container.src = images[index % images.length].src;
//   });

//   titles.forEach((title, index) => {
//     title.textContent = images[index % images.length].title;
//   });

//   supTitles1.forEach((supTitle, index) => {
//     supTitle.textContent = images[index % images.length].supTitle1;
//   });

//   supTitles2.forEach((supTitle, index) => {
//     supTitle.textContent = images[index % images.length].supTitle2;
//   });
// };

// setInitialContent();

// // Trigger enter animations
// const triggerEnterAnimations = (element) => {
//   element.classList.remove('scale-up-remove', 'slideRight-remove');
//   element.classList.add('scale-up', 'slideRight');
// };

// // Trigger leave animations
// const triggerLeaveAnimations = (element) => {
//   element.classList.remove('scale-up', 'slideRight');
//   element.classList.add('scale-up-remove', 'slideRight-remove');
// };

// // Current index for tracking the displayed images
// let currentIndex = 0;

// // Function to shift images, titles, and supTitles
// const shift = () => {
//   const nextIndex = (currentIndex + 1) % images.length;

//   // Trigger animations for leaving images
//   containers.forEach(triggerLeaveAnimations);

//   // Delay updating the images, titles, and supTitles for smooth transitions
//   setTimeout(() => {
//     containers.forEach((container, index) => {
//       container.src = images[(nextIndex + index) % images.length].src;
//     });

//     titles.forEach((title, index) => {
//       title.textContent = images[(nextIndex + index) % images.length].title;
//     });

//     supTitles1.forEach((supTitle, index) => {
//       supTitle.textContent = images[(nextIndex + index) % images.length].supTitle1;
//     });

//     supTitles2.forEach((supTitle, index) => {
//       supTitle.textContent = images[(nextIndex + index) % images.length].supTitle2;
//     });

//     // Trigger animations for entering images
//     containers.forEach(triggerEnterAnimations);

//     // Update current index
//     currentIndex = nextIndex;
//   }, 500); // Adjust delay for your animation duration
// };

// // Call the shift function every 3 seconds
// setInterval(shift, 3000);



// Function to update the clone-details based on the active slide
function updateCloneDetails() {
  // Find all elements with the class "swiper-slide" within ".swiper1"
  const slides = Array.from(document.querySelectorAll('.swiper1 .swiper-slide'));

  slides.forEach((slide, index) => {
    // Check if the slide is active
    if (slide.classList.contains('swiper-slide-active')) {
      // Calculate indices for adjacent slides
      const nextIndex = (index + 1) % slides.length; // Wrap around for overflow
      const secondPrevIndex = (index + 2 + slides.length) % slides.length; // Wrap around for underflow
      const thirdNextIndex = (index + 3) % slides.length; // Wrap around for overflow

      // Log indices (for debugging)
      console.log('Active Index:', index);
      console.log('Next Index:', nextIndex);
      console.log('Second Previous Index:', secondPrevIndex);
      console.log('Third Next Index:', thirdNextIndex);

      // Extract titles from adjacent slides
      const nextSlideTitle = slides[nextIndex]?.querySelector('.horizontal-title')?.textContent || '';
      const secondPrevSlideTitle = slides[secondPrevIndex]?.querySelector('.horizontal-title')?.textContent || '';
      const thirdNextSlideTitle = slides[thirdNextIndex]?.querySelector('.horizontal-title')?.textContent || '';

      // Update clone elements
      const clone1HorizontalTitle = document.querySelector('.clone1-horizontal-title');
      const clone2HorizontalTitle = document.querySelector('.clone2-horizontal-title');
      const clone3HorizontalTitle = document.querySelector('.clone3-horizontal-title');

      if (clone1HorizontalTitle) clone1HorizontalTitle.textContent = nextSlideTitle;
      if (clone2HorizontalTitle) clone2HorizontalTitle.textContent = secondPrevSlideTitle;
      if (clone3HorizontalTitle) clone3HorizontalTitle.textContent = thirdNextSlideTitle;

      // Update the active slide's details
      const supTitle2 = slide.querySelector('.supTitle2')?.textContent || '';
      const supTitle1 = slide.querySelector('.supTitle1')?.textContent || '';
      const horizontalTitle = slide.querySelector('.horizontal-title')?.textContent || '';
      const cloneSupTitle2 = document.querySelector('.clone-supTitle2');
      const cloneSupTitle1 = document.querySelector('.clone-supTitle1');
      const cloneHorizontalTitle = document.querySelector('.clone-details .clone-horizontal-title');
      const numbersSwiper = document.querySelector('.clone-numbers');
      const ariaLabel = slide.getAttribute('aria-label'); // Example: "3 / 6"
      const [currentIndex, totalSlides] = ariaLabel?.split(' / ').map(Number) || [0, 0];

      if (cloneSupTitle2) cloneSupTitle2.textContent = supTitle2;
      if (cloneSupTitle1) cloneSupTitle1.textContent = supTitle1;
      if (cloneHorizontalTitle) cloneHorizontalTitle.textContent = horizontalTitle;

      if (numbersSwiper) {
        numbersSwiper.innerHTML = `${currentIndex} <hr/> ${totalSlides}`;
      }
    }
  });
}

// Call the function initially to ensure the clone details are updated
updateCloneDetails();

// Add an event listener to update clone details on swiper transition
const swiperContainer = document.querySelector('.swiper1');
if (swiperContainer) {
  swiperContainer.addEventListener('transitionend', updateCloneDetails);
}







const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for reduced motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
  adjustScrollEffect();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

function adjustScrollEffect() {
  const section = document.querySelector(".section-dimensions");
  const scrollerRight = section.querySelector('.scroller[data-direction="right"]');
  const scrollerLeft = section.querySelector('.scroller[data-direction="left"]');

  window.addEventListener("scroll", () => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY >= (sectionTop - 1000) && scrollY <= (sectionTop + 1000) + sectionHeight) {
      // Calculate the percentage scrolled within the section
      const progress = (scrollY - sectionTop) / sectionHeight;
      console.log(progress)
      // Update transforms based on scroll progress
      // const translateXLeft = Math.min(0, -10 - 10 * progress); // From -10% to 0%

      // const translateXRight = Math.max(-150, -150 + 140 * progress); // From -150% to -10%
      const translateXRight = Math.max(-200, -50 - 40 * progress); // From -10% to -200%
      const translateXLeft = Math.max(-200, -200 + 40 * progress); // From -200% to -10%

      scrollerRight.style.transform = `translateX(${translateXRight}%)`;
      scrollerLeft.style.transform = `translateX(${translateXLeft}%)`;
      scrollerRight.style.webkitTransform = `translateX(${translateXRight}%)`;
      scrollerLeft.style.webkitTransform = `translateX(${translateXLeft}%)`;
    }
  });
}


const section = document.querySelector(".section-about");
const videoRghtToLeft1 = section.querySelector('.section-about .about-left .div-video .animate1');
const videoRghtToLeft2 = section.querySelector('.section-about .about-left .div-video .animate2');

window.addEventListener("scroll", () => {
  const sectionTop = section.offsetTop;
  // const sectionHeight = section.offsetHeight;
  const scrollY = window.scrollY;

  if (scrollY >= (sectionTop - 900)) {
    console.log("Section About");
    videoRghtToLeft1.style.animation = "move 1s ease-out forwards"; // Apply animation to the first element
    videoRghtToLeft2.style.animation = "move 1s ease-out forwards"; // Apply animation to the second element
  }
});


// Select all elements with the class "number1"
const numbers = document.querySelectorAll('.number1');

const animateNumbers = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const numberElement = entry.target;
      const finalValue = parseInt(numberElement.textContent.replace(/[^\d]/g, ''), 10); // Extract the number
      let currentValue = 0;

      // Animate the number from 0 to the final value
      const increment = Math.ceil(finalValue / 100); // Define increment steps
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(interval);
        }
        numberElement.textContent = `+${currentValue.toLocaleString()}`; // Update the content
      }, 20);

      // Stop observing the element once animation is done
      observer.unobserve(numberElement);
    }
  });
};

// Set up the IntersectionObserver
const observer = new IntersectionObserver(animateNumbers, {
  threshold: 0.5, // Trigger when 50% of the element is visible
});

// Observe each number element
numbers.forEach((number) => observer.observe(number));






document.addEventListener('click', (event) => {
  console.log(`Mouse position: X = ${event.clientX}, Y = ${event.clientY}`);
});




// const img = document.querySelector('.section-service .div-video .video-container #sasa');
// console.log(img.src)



// const content = [
//   { src: "img/image1.jpg", title: "يُسر فيلج", history: "12-3-2020", paragraph: "حي السلامة", link: "link1" },
//   { src: "img/image2.jpg", title: "جديل", history: "12-3-2020", paragraph: "حي النرجس", link: "link2" },
//   { src: "img/image3.jpg", title: "ستون كومبليكس", history: "12-3-2020", paragraph: "حي العقيق", link: "link3" },
//   { src: "img/news1.jpeg", title: "رمز 45", history: "12-3-2020", paragraph: "حي الشبيلي", link: "link4" },
//   { src: "img/news2.png", title: "رمز المعالي", history: "12-3-2020", paragraph: "حي المعالي", link: "link5" },
//   { src: "img/news3.png", title: "تَلّ الرمال 2", history: "12-3-2020", paragraph: "حي الرمال", link: "link6" },
//   { src: "img/news4.png", title: "رافــد - مجمع مكتبي", history: "12-3-2020", paragraph: "حي حطين", link: "link7" },
//   { src: "img/RamzPlaceholderDark.svg", title: "رافــد - مجمع مكتبي", history: "12-3-2020", paragraph: "حي حطين", link: "link8" },
// ];

// // Select all video containers
// const videocontainers = document.querySelectorAll('.about-left .div-video');

// // Iterate over each video container
// videocontainers.forEach((div, index) => {
//   const img = div.querySelector('img');
//   const title = div.querySelector('.items-details #title');
//   const history = div.querySelector('.items-details #history');
//   const paragraph = document.querySelector('.section-service .about-right .about-line2 #paragraph');
//   const mainTitle = document.querySelector('.section-service .about-right .about-line2 #mainTitle');

//   if (img && title && history && paragraph && mainTitle) {
//     let itemIndex = index; // Track the current index

//     // Function to update content based on the current index
//     const updateContent = () => {
//       const item = content[itemIndex];
//       // img.src = item.src;
//       title.textContent = item.title;
//       history.textContent = item.history;
//       paragraph.textContent = item.paragraph;
//       mainTitle.textContent = item.title;
//     };

//     // Initialize the content for the current div
//     updateContent();
//   }
// });





// // Function to update the clone-details based on the active slide
// function updateCloneDetails2() {
//   // Select all slides within the swiper
//   const slides2 = Array.from(document.querySelectorAll('.section-service .swiper2 .swiper-slide'));

//   // Loop through all slides
//   slides2.forEach((slide, index) => {
//     // Add a click event listener to each slide
//     // slide.addEventListener('click', () => {
//     // Check if the slide has the class 'swiper-slide-active' (meaning it's the active slide)
//     if (slide.classList.contains('swiper-slide-active')) {
//       // Update the cloneMainTitle text with the active slide's title
//       const title = slide.querySelector('.mainTitle')?.textContent.trim();
//       const paragraph = slide.querySelector('.mainHistory')?.textContent.trim();

//       document.querySelector('.cloneMainTitle').textContent = title || 'No title available';
//       document.querySelector('.cloneParagraph').textContent = paragraph || 'No history available';
//     }
//     // });
//   });
// }

// // Initialize the updateCloneDetails2 function when the DOM content is loaded
// document.addEventListener('DOMContentLoaded', updateCloneDetails2);
