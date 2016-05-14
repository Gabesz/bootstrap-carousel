$(document).ready(function() {

  $(".carousel-inner").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      $(this).parent().carousel('next');
    },
    swipeRight: function() {
      $(this).parent().carousel('prev');
    },
    threshold:0
  });


  function doAnimations( elems ) {

    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }


  var $myCarousel = $('#carousel-example-generic'),
    $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

  $myCarousel.carousel();

  doAnimations($firstAnimatingElems);

  $myCarousel.carousel('pause');

  $myCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });

});