$(".icon").click(function(){
    $(".mobile-menu-lists").css("margin-right", "0px");
    $(".menu-popup").show();
})

$(".menu-popup").click(function(){
  $(".mobile-menu-lists").css("margin-right", "-304px");
  $(".menu-popup").hide();
});
$(".close-btn").click(function(){
    $(".mobile-menu-lists").css("margin-right", "-304px");
    $(".menu-popup").hide();
  });