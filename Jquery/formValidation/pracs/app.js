// $(document).ready(function () {
//     $('#myForm').validate({
//         rules: {
//             name: {
//                 //digits: true,
//                 minlength: 2,
//                 required: true
//             },
//             email: {
//                 required: true,
//                 semail: true
//             }
//         },
//         messages: {
//             name: {
//                 required: ' Name is Mandatory'
//             },
//             email: {
//                 required: ' Enter Email id'
//             }

//         }
//     });
//     $.validator.addMethod("semail", function (value, element) {
//         // allow any non-whitespace characters as the host part
//         return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test(value);
//     },
//         'Please!  Enter the Valid Email Address');
//     //validator.resetForm();
// })

$(document).ready(function () {
    $('#pass').click(function () {
        var passF = $('#password');
        var passTy = passF.attr('type');
        if (passTy == 'password') {
            passF.attr('type', 'text');
            $('#pass').text('hide');
        }
        else {
            passF.attr('type', 'password');
            $('#pass').text('show');
        }
    })

})