$(document).ready(function() {
    /* js files must be started with this line ↑ */
    /* this will make the code run after the document has been loaded */

  /*     Sticky Navigation     */
  $('.js--section-features').waypoint(function(direction) {
    /* direction will detect if user is scrolling up or down */
    /* this is a functionality of the waypoint script */
    if (direction == "down") {
      $('nav').addClass('sticky');
      /* so instead of adding class "sticky" in our html, */
      /* it will be added when the user scrolls down through our webpage */
      /* the addClass functionality exists in jquery and has nothing to do with waypoint script */
    } else {
      $('nav').removeClass('sticky');
      /* on scroll up */
    }
  }, {
    offset: '60px'
    /* makes the nav bar appear 60px above section-features so there can be space between */
  });
  
  /*     Scroll-down on button click     */
  $('.js--scroll-to-plans').click(function() {
    $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000);
    /* clicking the buttons will trigger an animation */
    /* which scrolls the page to section plans in 1000ms, or 1 second */
  });
  $('.js--scroll-to-start').click(function() {
    $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);
    /* clicking the buttons will trigger an animation */
    /* which scrolls the page to section plans in 1000ms, or 1 second */
  });

  /*     Smooth scrolling     */
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /*     Animation on waypoint     */
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animate__fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animate__pulse');
  }, {
    offset: '50%'
  });

  /*     Mobile nav     */

  /* Opening and closing mobile nav icon */
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);
    /* slideToggle opens and closes a box */
    if(icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
      /* replacing icons when opening and closing nav */
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });
});