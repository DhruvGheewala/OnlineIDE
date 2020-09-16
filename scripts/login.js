function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$(document).ready(function() {
    $('#email-note').css('visibility', 'hidden');
    $('#pass-note').css('visibility', 'hidden');
});

$(document).ready($('#login').click(function() {
    var valid = true;
    var email = $('#email').val();
    var pass = $('#pass').val();

    // if (email === '') {
    //     $('#email-note').css('visibility', 'visible');
    //     $('#email-note').text("Field is required.");
    //     return;
    // }

    if (!validEmail(email)) {
        $('#email-note').css('visibility', 'visible');
        $('#email-note').text('You have entered incorrect email-id.');
        valid = false;
    } else {
        // Removing note
        $('#email-note').css('visibility', 'hidden');
    }

    if (pass.length < 8) {
        $('#pass-note').css('visibility', 'visible');
        $('#pass-note').text("Password must be of atleast 8 characters.");
        valid = false;
    } else {
        // Removing note
        $('#pass-note').css('visibility', 'hidden');
    }

    if (!valid)
        return;

    // Valid Credentials
    $('#email-note').css('visibility', 'hidden');
    $('#pass-note').css('visibility', 'hidden');
    window.location = 'index.html';
}));