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



// Correctly structured array of image objects
const images = [
  {
    src: "img/1.jpg",
    title: "يُسر فيلج",
    supTitle1: "شقق سكنية",
    supTitle2: "حي السلامة",
    link: "link1",
  },
  {
    src: "img/2.jpg",
    title: "جديل",
    supTitle1: "أدوار سكنية",
    supTitle2: "حي النرجس",
    link: "link2",
  },
  {
    src: "img/3.jpg",
    title: "ستون كومبليكس",
    supTitle1: "شقق سكنية",
    supTitle2: "حي العقيق",
    link: "link3",
  },
  {
    src: "img/4.jpg",
    title: "رمز 45",
    supTitle1: "شقق سكنية",
    supTitle2: "حي الشبيلي",
    link: "link4",
  },
  {
    src: "img/5.jpg",
    title: "رمز المعالي",
    supTitle1: "فلل سكنية",
    supTitle2: "حي المعالي",
    link: "link5",
  },
  {
    src: "img/6.jpg",
    title: "تَلّ الرمال 2",
    supTitle1: "شقق سكنية",
    supTitle2: "حي الرمال",
    link: "link6",
  },
  {
    src: "img/7.jpg",
    title: "رافــد - مجمع مكتبي",
    supTitle1: "مكاتب",
    supTitle2: "حي حطين",
    link: "link7",
  },
];

// Select image elements and titles
const containers = Array.from(document.querySelectorAll('.scroll-horizontal .div-img img'));
const titles = Array.from(document.querySelectorAll('.scroll-horizontal .horizontal-title'));
const supTitles1 = Array.from(document.querySelectorAll('.scroll-horizontal .details .div-line-button .supTitle1'));
const supTitles2 = Array.from(document.querySelectorAll('.scroll-horizontal .details .div-line-button .supTitle2'));

// Ensure elements exist
if (!containers.length || !titles.length || !supTitles1.length || !supTitles2.length) {
  console.error('One or more containers, titles, or supTitle elements are missing. Please check your HTML.');
}

// Set initial images, titles, and supTitles
const setInitialContent = () => {
  containers.forEach((container, index) => {
    container.src = images[index % images.length].src;
  });

  titles.forEach((title, index) => {
    title.textContent = images[index % images.length].title;
  });

  supTitles1.forEach((supTitle, index) => {
    supTitle.textContent = images[index % images.length].supTitle1;
  });

  supTitles2.forEach((supTitle, index) => {
    supTitle.textContent = images[index % images.length].supTitle2;
  });
};

setInitialContent();

// Trigger enter animations
const triggerEnterAnimations = (element) => {
  element.classList.remove('scale-up-remove', 'slideRight-remove');
  element.classList.add('scale-up', 'slideRight');
};

// Trigger leave animations
const triggerLeaveAnimations = (element) => {
  element.classList.remove('scale-up', 'slideRight');
  element.classList.add('scale-up-remove', 'slideRight-remove');
};

// Current index for tracking the displayed images
let currentIndex = 0;

// Function to shift images, titles, and supTitles
const shift = () => {
  const nextIndex = (currentIndex + 1) % images.length;

  // Trigger animations for leaving images
  containers.forEach(triggerLeaveAnimations);

  // Delay updating the images, titles, and supTitles for smooth transitions
  setTimeout(() => {
    containers.forEach((container, index) => {
      container.src = images[(nextIndex + index) % images.length].src;
    });

    titles.forEach((title, index) => {
      title.textContent = images[(nextIndex + index) % images.length].title;
    });

    supTitles1.forEach((supTitle, index) => {
      supTitle.textContent = images[(nextIndex + index) % images.length].supTitle1;
    });

    supTitles2.forEach((supTitle, index) => {
      supTitle.textContent = images[(nextIndex + index) % images.length].supTitle2;
    });

    // Trigger animations for entering images
    containers.forEach(triggerEnterAnimations);

    // Update current index
    currentIndex = nextIndex;
  }, 500); // Adjust delay for your animation duration
};

// Call the shift function every 3 seconds
setInterval(shift, 3000);
