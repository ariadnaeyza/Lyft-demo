$(document).ready(function() {
    $("form").validate({
        rules: {
            phone: "required",  
        },
        messages: {
            phone: "Please enter your phone",
        },
    });
});