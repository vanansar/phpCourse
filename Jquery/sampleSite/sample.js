 $(document).ready(function() {
	 function get() {
		$('p').show();
			
	 }

  $('#btn').click(function() {
	  
	   /*var value = $('#txt').val();
       alert(value);*/
	  // $('#txt').hide();
	 // $('p').slideDown();
	   $('p').hide();
	   fun();
	   
	   
	   /*$('p').slideUp();
	   $('h1').html('<h4>saravan</h4>');
	   $('h1').append('<h2>saravanan</h2>');*/
	   
  });
  function fun()
  { 
	  $('#btn').click(function() {
	   $('p').hide();
	   get();
  });  
  }
  var a = 'sara';

  $("#btn1").click(function(){
    $("p").append(" <b>Appended text  " + a  +" </b>.");
  });



  $("button").click(function(){
	$(this).text($(this).text() == 'Order by Alphabet' ? 'Order by Category' : 'Order by Alphabet');
});
  
}); 



