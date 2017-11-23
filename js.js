$(document).ready(function() {
    //page loads



start();

if (sessionStorage.ourUser != null){
    // om någon är inloggad
    console.log ("inloggad")
    loggedin()
} else {
    start()
    // Om någon inte är inloggad
    console.log ("ej inloggad")

    $('#username').focus();
    
        $('#login').click(function() {
    
           event.preventDefault(); // prevent PageReLoad
    
           var ValidEmail = $('#username').val() === 'Test'; // User validate
           var ValidPassword = $('#password').val() === 'password'; // Password validate
    
            if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
                console.log("user ok")
                loggedin();
                sessionStorage.ourUser = $('#username').val();
    
            }        
            else {
                wrongpass(); // show error msg
            }
        });
}

    
function start(){
    $(".forgotpass").hide();
    $(".array").hide();
    $("#logout").hide();
    $(".error").hide();
    $(".valid").hide();

}
function loggedin(){
    $(".loginform").hide();
    $(".hejString").text("Welcome " + sessionStorage.ourUser);
    /* skrivautlista(); */ 
    $(".array").show();
    $(".forgotpass").hide();
    $("#logout").show();
    $("#login").hide();
    $(".welcomemsg").hide();
    $(".valid").show();
    $(".welcomemsg").hide();
}
function wrongpass(){
    $(".array").hide();
    $("#forgotpass").show();
    $(".error").show();
}
    

    $('#logout').click(function() {
        sessionStorage.clear();
        location.reload();



    });
});