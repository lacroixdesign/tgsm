$(function() {

  $('#metrics').one('inview', function(event, isInView) {
    if (isInView) {
      // element is now visible in the viewport
      $('.CountTo').countTo();
    }
  });

});
