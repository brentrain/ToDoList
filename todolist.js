//check off with Click function //
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
 });

// Click on X to delete event //

 $("ul").on("click", "span", function(event) {
 	$(this).parent().fadeOut(500,function() {
 		$(this).remove();
 	});
 	event.stopPropagation();
 });

 // Adding a new To DO//
 $("input[type='text']").keypress(function(event){
 	if(event.which === 13) {
 		//grabbing new to do text from input
 		var todoText = $(this).val();
 		$(this).val("");
 		//create a new li and add to ul
 		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " +  todoText + "</li>")
 	}
 });

 //  //
 $(".fa-plus").on("click", function() {
 	$("input[type='text']").fadeToggle()
 });