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
    offset: '60px;'
    /* makes the nav bar appear 60px above section-features so there can be space between */
  });
  
  /*     Scroll-down on button click     */
  
});