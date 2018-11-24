$("#bold").click(function(){
    $("textarea").toggleClass("textbold");
    alert("Click again to remove or add the Bold Style");
});
  

$("#italic").click(function(){
    $("textarea").toggleClass("textitalic");
    alert("Click again to remove or add the Italic Style")
});

$("#underline").click(function(){
    $("textarea").toggleClass("textunderline");
    alert( " you probably know from the annoying first alerts so i'm going to shut up")
});

$('select').on('change', function() {
    $("textarea").css("font-family",$(this).val());
  });

  $('select').on('change', function() {
    $("textarea").css("font-size",$(this).val());
  });





