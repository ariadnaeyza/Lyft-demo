$(document).ready(function () {
    $("#section-sign-up").submit(function() {
        $("#btn-next").attr('disabled');
    });
    $("#section-sign-up").validate({
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
            $("#btn-next").removeAttr("disabled");
        }
    });
    
    $("#btn-next").click(function(){
        var numRandom = Math.floor((Math.random() * 9000) + 1000);
        alert("This is your code" + numRandom);
    });
    
    /*$("#section-date").validate({
        rules: {
            firstName:{
                required: true,
                number: false,                
                minlength: 2
            },
            lastName:{
                required: true,
                number: false,                
                minlength: 2
            },
            email:{
                required: true,
                email: true,
                minlength: 2
            }
        },
        messages: {
            firstName: {
                required: "Please enter your name",
                number:"Please enter only letters"
            },
            lastName: {
                required: "Please enter your last name",
                number: "Please enter only letters"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter your email with @"
            }
            
        },
        submitHandler: function(form){
            $("#btn-next").removeAttr("disabled");
        }
    });*/
    
});