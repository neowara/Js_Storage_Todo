$(document).ready(function() {
    $('#username').focus();

    $('#submit').click(function() {

       event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#username').val() === 'test'; // User validate
       var ValidPassword = $('#password').val() === 'password'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});