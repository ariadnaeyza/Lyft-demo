$(document).ready(function () {
    $("#btn-next" ).addClass("disabled");
    $("#btn-next-2").addClass("disabled");
    
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
            $("#btn-next").removeClass("disabled");
        }
    });
    
    $("#btn-next").click(function(){
        if($("#section-sign-up").valid()){
            var phone = document.getElementById("phone").value;
            var numRandom = Math.floor((Math.random() * 9000) + 1000);
            alert("Your code is LAB-" + numRandom);
            /*localStorage.setItem("phoneNumber", phone);
            localStorage.setItem("randomNum",numRandom);*/
            window.location.href= "verify.html";
        }
    });
    
    $("#section-date").validate({
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
            $("#btn-next-2").removeClass("disabled");
        }
        
    });
    $("#btn-next-2").click(function(){
        if($("#section-date").valid()){
            
            window.location.href= "geolocation.html";
        }
    });
    
});