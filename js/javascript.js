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




const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
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



const content = [
  { src: "img/image1.jpg", title: "يُسر فيلج", history: "12-3-2020", paragraph: "حي السلامة", link: "link1" },
  { src: "img/image2.jpg", title: "جديل", history: "12-3-2020", paragraph: "حي النرجس", link: "link2" },
  { src: "img/image3.jpg", title: "ستون كومبليكس", history: "12-3-2020", paragraph: "حي العقيق", link: "link3" },
  { src: "img/news1.jpeg", title: "رمز 45", history: "12-3-2020", paragraph: "حي الشبيلي", link: "link4" },
  { src: "img/news2.png", title: "رمز المعالي", history: "12-3-2020", paragraph: "حي المعالي", link: "link5" },
  { src: "img/news3.png", title: "تَلّ الرمال 2", history: "12-3-2020", paragraph: "حي الرمال", link: "link6" },
  { src: "img/news4.png", title: "رافــد - مجمع مكتبي", history: "12-3-2020", paragraph: "حي حطين", link: "link7" },
  { src: "img/RamzPlaceholderDark.svg", title: "رافــد - مجمع مكتبي", history: "12-3-2020", paragraph: "حي حطين", link: "link8" },
];

// Select all video containers
const videocontainers = document.querySelectorAll('.about-left .div-video');

// Iterate over each video container
videocontainers.forEach((div, index) => {
  const img = div.querySelector('img');
  const title = div.querySelector('.items-details #title');
  const history = div.querySelector('.items-details #history');
  const paragraph = document.querySelector('.section-service .about-right .about-line2 #paragraph');
  const mainTitle = document.querySelector('.section-service .about-right .about-line2 #mainTitle');

  if (img && title && history && paragraph && mainTitle) {
    let itemIndex = index; // Track the current index
    let translateX = 0; // Current translateX value
    let lastMouseX = 0; // Last X-coordinate of the mouse
    let isDragging = false; // Dragging state

    // Function to update content based on the current index
    const updateContent = () => {
      const item = content[itemIndex];
      img.src = item.src;
      title.textContent = item.title;
      history.textContent = item.history;
      paragraph.textContent = item.paragraph;
      mainTitle.textContent = item.title;
    };

    // Initialize the content for the current div
    updateContent();

    // const serviceMouse = document.querySelector('.section-service .about-left');

    // // Mouse down event
    // serviceMouse.addEventListener('mousedown', (event) => {
    //   isDragging = true;
    //   lastMouseX = event.clientX; // Record starting mouse position
    //   // Mouse move event
    //   serviceMouse.addEventListener('mousemove', (event) => {
    //     if (isDragging) {
    //       console.log(event.clientX, lastMouseX)
    //       // console.log()
    //       // console.log(Math.floor(lastMouseX / 100))
    //       if (event.clientX > lastMouseX) {
    //         console.log("good")
    //         const potentialIndex = index + 1;
    //         console.log(potentialIndex)
    //         const currentIndexInArray = potentialIndex * 100
    //         console.log(currentIndexInArray)

    //         if (potentialIndex >= 0 && potentialIndex < content.length) {
    //           itemIndex = potentialIndex;
    //           updateContent(); // Update the displayed content
    //         }
    //         div.style.transform = `translateX(${currentIndexInArray}%)`; // Update the element's transform
    //       }
    //       else {
    //         console.log("fail")
    //         const potentialIndex = index - 1;
    //         const currentIndexInArray = potentialIndex * 100
    //         console.log(currentIndexInArray)
    //         if (potentialIndex >= 0 && potentialIndex < content.length) {
    //           itemIndex = potentialIndex;
    //           updateContent();
    //         }
    //         div.style.transform = `translateX(-${currentIndexInArray}%)`; // Update the element's transform
    //       }
    //     }
    //   });
    // });
    // // Mouse up event
    // document.addEventListener('mouseup', () => {
    //   isDragging = false; // Reset dragging state
    // });
  }
});





let loops = gsap.utils.toArray('.section-service .about-left .div-video').map((line, i) => {
  const links = line.querySelectorAll(".section-service .about-left .div-video"),
    tickerDirection = isEven(i),
    tl = horizontalLoop(links, {
      repeat: -1,
      speed: 1 + i * 0.25,
      draggable: true,
      reversed: tickerDirection,
      paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px"))
    });
  links.forEach(link => {
    link.addEventListener("mouseenter", () => gsap.to(tl, { timeScale: 0, overwrite: true }));
    link.addEventListener("mouseleave", () => gsap.to(tl, { timeScale: 1, overwrite: true }));
  });
});

let currentScroll = 0;
let scrollDirection = 1;

function isEven(n) {
  return n % 2 == 0;
}

function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    populateWidths = () => items.forEach((el, i) => {
      widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
    }),
    getTotalWidth = () => items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0),
    totalWidth, curX, distanceToStart, distanceToLoop, item, i;
  populateWidths();
  gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: i => xPercents[i]
  });
  gsap.set(items, { x: 0 });
  totalWidth = getTotalWidth();
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
      .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = vars => toIndex(curIndex + 1, vars);
  tl.previous = vars => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.updateIndex = () => curIndex = Math.round(tl.progress() * (items.length - 1));
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  if (config.draggable && typeof (Draggable) === "function") {
    let proxy = document.createElement("div"),
      wrap = gsap.utils.wrap(0, 1),
      ratio, startProgress, draggable, dragSnap, roundFactor,
      align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
      syncIndex = () => tl.updateIndex();
    typeof (InertiaPlugin) === "undefined" && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club");
    draggable = Draggable.create(proxy, {
      trigger: items[0].parentNode,
      type: "x",
      onPress() {
        startProgress = tl.progress();
        tl.progress(0);
        populateWidths();
        totalWidth = getTotalWidth();
        ratio = 1 / totalWidth;
        dragSnap = totalWidth / items.length;
        roundFactor = Math.pow(10, ((dragSnap + "").split(".")[1] || "").length);
        tl.progress(startProgress);
      },
      onDrag: align,
      onThrowUpdate: align,
      inertia: true,
      snap: value => {
        let n = Math.round(parseFloat(value) / dragSnap) * dragSnap * roundFactor;
        return (n - n % 1) / roundFactor;
      },
      onRelease: syncIndex,
      onThrowComplete: () => gsap.set(proxy, { x: 0 }) && syncIndex()
    })[0];
  }

  return tl;
}


