$(document).ready(function () {

   $('#formValid').validate({
    rules : {
        gender : {
            // genderr : true,
            required: true
           
        },
        uname: {
            required: true 
        },
        age : {
            required:true,
            minlength: 2
        },
        mobile : {
            required: true,
            minlength: 10,
            digits: true
        },
        email : {
            email: true,
            required: true
        },
        password: {
          
            passwordValidation: true,
            required: true
        },
        education: {
            required: true,
            education: true
        },
        sfile : {
            sofile: true,
            required: true
        }

    },

    messages : {
       gender : {
           required: ' click the gender!'
       },
       uname: {
             required: 'Enter the Name!'
       },
       age : {
           required: ' Age is required! '
       },
       mobile: {
           required: ' Mobile number is mandatory!',
           minlength: ' Mobile number should be in 10 digits',
           digits: ' Must be enter number only'
       },
       email : {
           email: ' Enter the valid Email address',
        required: ' Must enter Email'
    },
    password: {
        required: ' Must enter Password'
    },
    sfile: {
        required: ' File is mandatory!!!'
    }
    }
   });


   $.validator.addMethod('passwordValidation', function(){
       return $('#password').val().match(/^[A-Za-z]\w{7,14}$/);

   },
   'Passwor should contain 1 Numeric, 2 small and 2 Capital letter');

   $.validator.addMethod('education', function(){
       return $('#education').val() > 0;
   },
   ' must select any degree');
   $.validator.addMethod('sofile', function(){
       return $('#sfile').val().toLowerCase().match(/(\.jpg)$/)
   },
   'jpg  file only !')
   


//    $.validator.addMethod('genderr', function() {
//        return ($('#male:checked') == true) && ($('#female:checked') == true);

//    },
//    ' Click the gender');

    // $.validator.addMethod('mypassword', function (value, element) {
    //     return this.optional(element) || (value.match(/[a-zA-Z]/) && value.match(/[0-9]/));
    // },
    //     'Password must contain at least one numeric and one alphabetic character.');

//    $('#button').click(function(){
//     console.log($('#formValid').val())
//    });

  

});
