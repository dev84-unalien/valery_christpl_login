$(document).ready(function() {

    $('#log').click(function() {
        userlog();
    });

    $('#facebook').click(function() {
        userlog();
    });

    function userlog() {
        var login = $('#login').val();
        var password = $('#password').val();

        $.ajax({
            url: "http://192.168.1.112:8001/login",
            type: "POST",
            data: {
                login: login,
                password: password
            },
            success: function(result) {
            console.log(result);
            },
            error: function() {
                alert("il y a une erreur!");
            }
        });
    }
});