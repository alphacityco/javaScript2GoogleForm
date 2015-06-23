// http://stackoverflow.com/questions/28546969/cors-authorization-on-google-sheets-api-requests/29152936#29152936
window.googleDocCallback = function () { return true; };

$('document').ready(function(){

      $('#form').validate({
        rules:{
            "entry.1673767957":{
                required:true,
                maxlength:40
            },

            "entry.522036821":{
                required:true,
                email:true,
                maxlength:100
            },

            "entry.1025000276":{
                required:true
            }},

        messages:{
            "name":{
                required:"This field is required"
            },

            "email":{
                required:"This field is required",
                email:"Please enter a valid email address"
            },

            "message":{
                required:"This field is required"
            }},

        submitHandler: function(form){

          // cross origin problem cause success callback not execute, so implement the same function in both callbacks
          $(form).ajaxSubmit({
            target: '#preview',
            success: emptyFieldsAndShowMessage,
            error: emptyFieldsAndShowMessage
          });

        }

    });

});

function emptyFieldsAndShowMessage() {
  $('#entry_1673767957').val('');
  $('#entry_522036821').val('');
  $('#entry_1025000276').val('');

  // mensaje de exito
  // $('.form-messages').html('success!!!!');
  swal('Good job!', 'You clicked the button!', 'success');

  var formQueryParams = $(form).serialize();
  window.location.href = 'http://localhost/dranavarrete/contacto/exito?' + formQueryParams;
}
