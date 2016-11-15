$(document).ready(function () {
    $('form').submit(function() {
        $('#btn-next').attr('disabled');
    });
    $('form').validate({
        rules: {
            phone:{
                required: true,
                number: true,                
                minlength: 9
            }  
        },
        messages: {
            phone: {
                required: "Please enter your phone",
                number:"Please enter only number"
            }
        },
        submitHandler: function(form){
            $('#btn-next').removeAttr('disabled');
        }
    });
/*    $('#btn-next').click(function(){
        
    });*/
});