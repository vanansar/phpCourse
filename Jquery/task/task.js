$(document).ready(function () {
	//$('p').hide();
    $('#btn').click(function () {
		//$('p').show();
		//$('p').text('click the DropDown!');
//$('p').css("color", "red");
        var value = $('#txt').val();
        if (value == '') {
            alert('pls Enter any value');
        }
        else {
            $('#dropDown').append('<option>' + value + '</option>');
            $('#txt').val(' ');
        }
    });
/* 	$("input").
keypress
(function(){
  $(this).slideUp(3000).slideDown();
}); */
	/* $("p").click(function(){
  $(this).
hide
(
"slow"
);
}); */


});
$(document).bind("contextmenu",function(e){
  return false;
    });