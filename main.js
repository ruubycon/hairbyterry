
$(document).ready(function() {
  var currentTab;
  $("#gateway").scrollspy({ offset: -125, animate: true });

  $(function() {
    $('.tab--hidden').hide();

    $('.btn-choose').click(function() {
      var selectedTab = $(this).data("value");
      $('.tab--hidden').slideUp();
      $('.tab--hidden').removeClass('tab-reveal');

      $('.btn-choose').removeClass('btn-active');
      $(this).addClass('btn-active');

      if(selectedTab != currentTab) {
        $("#hidden-" + $(this).data("value")).slideDown();
        $("#hidden-" + $(this).data("value")).addClass('tab-reveal');
        currentTab = selectedTab;
      } else {
        currentTab = null;
        $('.btn-choose').removeClass('btn-active');
      }

    });
  });



  // $('.')

  // $('a').click( function() {
  //   $('html, body').animate({
  //     scrollTop: $( $(this).attr('href') ).offset().top - 70
  //   }, 700);

  //   // event.preventDefault();
  // });

});

