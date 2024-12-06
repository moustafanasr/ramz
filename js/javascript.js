// Select the elements
const mainHeaderScroll = document.querySelector('.section-main-header .main-header-scroll');
const supHeader = document.querySelector('.section-main-sup-header .section-main-header');

// Define media query breakpoints and their corresponding transform limits
const transformLimits = {
  xs: -419, // For screens less than 430px
  sm: -419, // For screens between 430px and 600px
  md: -419, // For screens between 601px and 767px
  lg: -440  // For screens between 768px and 991px
};

// Function to get the appropriate transform limit based on screen size
function getCurrentTransformLimit() {
  if (window.matchMedia('(max-width: 430px)').matches) {
    return transformLimits.xs;
  } else if (window.matchMedia('(min-width: 430px) and (max-width: 600px)').matches) {
    return transformLimits.sm;
  } else if (window.matchMedia('(min-width: 601px) and (max-width: 767px)').matches) {
    return transformLimits.md;
  } else if (window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
    return transformLimits.lg;
  } else {
    return -440; // Default value for larger screens
  }
}

// Add scroll event listener
window.addEventListener('scroll', () => {
  const scrollsY = window.scrollY; // Current scroll position

  // Get the current transform limit dynamically based on screen size
  const supHeaderMaxTransform = getCurrentTransformLimit();

  // Calculate the transform values
  const mainHeaderTransformY = Math.min(scrollsY, 400); // Clamp at 400px
  const supHeaderTransformY = Math.min(supHeaderMaxTransform + scrollsY, 0); // Clamp at 0px

  // Apply the transform styles
  mainHeaderScroll.style.transform = `translateY(${mainHeaderTransformY}px)`;
  supHeader.style.transform = `translateY(${supHeaderTransformY}px)`;
});

// Initial setup to apply transform based on the initial screen size
window.addEventListener('resize', () => {
  const supHeaderMaxTransform = getCurrentTransformLimit();
  supHeader.style.transform = `translateY(${Math.min(supHeaderMaxTransform + window.scrollY, 0)}px)`;
});

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