function getValidation() {
	var name = document.getElementById('name').value;
	var age = document.getElementById('age').value;
	var mobile = document.getElementById('mobile').value;
	var male = document.getElementById('male');
	var female = document.getElementById('female');
	var qualification = document.getElementById('qualification').value;
	var file = document.getElementById('file').value;
		//var btn = document.getElementById('btn');
    var check = file.toLowerCase();
	
	var passw=  /^[A-Za-z]\w{7,14}$/;
	/* var mail =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; */

	var pin = document.getElementById('password');
	var email = document.getElementById('email');
	
	
	if(name=='')
	{
		alert('Enter the Name');
		return false;
		
	}
	else if(age=='')
	{
		alert('Enter the age');
		return false;
	}
	
	else if(mobile=='')
	{
		alert('Enter the mobile');
		return false;
	}
	else if(mobile.length != 10 )
	{
		alert('Enter the correct mobile number ');
		return false;
	}
	else if(male.checked == false && female.checked == false)
	{
		alert('click the gender');
		return false;
	}
	/* else if(female.checked == false)
	{
		alert('click the gender');
		return false;
	}
	 */
	 else if(qualification == 0)
	{
		alert('Select the qualification ');
		return false;
	}
	else if(file == false)
	{
		
		alert('pls select file to upload');
		return false;
	}
		
	else if(!check.match(/(\.jpg)$/))
	{
		alert(' pls select img only');
		document.getElementById('file').focus();
		return false;
	}
	 else if(email.value.indexOf("@")==-1)	
		{
			alert('email should contain @ symbol')
			return false;
		} 
		else if(email.value.indexOf(".com")==-1)	
		{
			alert('email should contain .com symbol')
			return false;
		}

	else if(!pin.value.match(passw))	
		{
			alert('password should be correct')
			return false;
		}
		
	else {
		return true;
	}
}