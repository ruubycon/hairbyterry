
$(document).ready(function() {
  var currentTab = $(".content-active");
  // $("#gateway").scrollspy({ offset: -150, animate: true });

  $('.btn-choose').click(function() {

    var tabValue = $(this).data("value");
    var selectedTab = $("#" + tabValue);

    $(".btn-choose").removeClass("btn-active");
    $(this).addClass("btn-active");
    if(selectedTab != currentTab) {
      currentTab.hide();
      selectedTab.fadeIn(1500);

      currentTab = selectedTab;
    }

  });

  $('#menu-btn').click(function() {
    if (!$('#site-main').hasClass('blur')) {
      $('#site-main').addClass('blur');
    } else {
      $('#site-main').removeClass('blur');
    }
  });

  $('.gateway-link').click(function() {
    $('#site-main').removeClass('blur')
    // $('#gateway-collapse').css('max-height', '0');
    $('#menu-btn').prop('checked', false);
  })

});
