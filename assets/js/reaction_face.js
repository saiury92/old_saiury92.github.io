$(function(){
  $(".like-btn").hover(function() {
    $(".reaction-icon").each(function(index, element) {
      setTimeout(function(){
        $(element).addClass("show");
      }, index * 100);
    });
  }, function() {
    $(".reaction-icon").removeClass("show")
  });
});