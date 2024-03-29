//Check off specific todos by clicking
$("ul").on("click", "li", function() {
  //if li is grey, turn it black.
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
  if (event.which === 13) {
    //grab todo-text from input
    let todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append(
      "<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").click(function() {
  $('input[type="text"]').fadeToggle();
});
