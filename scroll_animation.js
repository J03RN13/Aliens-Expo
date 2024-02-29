$(document).ready(function () {
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle the scroll event
  function handleScroll() {
    $('.scroll-fade').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('visible');
      } else {
        $(this).removeClass('visible');
      }
    });
  }

  // Attach the scroll event handler
  $(window).on('scroll', handleScroll);

  // Initial check on page load
  handleScroll();
});