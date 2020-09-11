function validate() {
    var uname = document.getElementById('uname').value;
    var pass = document.getElementById('pass').value;

    var stored_data = {
        uname: 'user1',
        pass: 'user1',
    };

    var n = uname.length;
    var m = pass.length;

    var tag = document.getElementById('warning-box');
    if (uname === stored_data.uname && pass === stored_data.pass) {
        window.location = "editor.html";
        return;
    } else if (n == 0 && m == 0) {
        tag.innerHTML = '<br><br>Please enter your Username and Password.<br>';
    } else if (n == 0) {
        tag.innerHTML = '<br><br>Please enter your Username.';
    } else if (m == 0) {
        tag.innerHTML = '<br><br>Please enter your Password.';
    } else {
        tag.innerHTML = '<br><br>You have entered wrong Username or Password.';
    }
    window.location = "index.html";
}

function check() {
    var pass = document.getElementById('pass');
    var repass = document.getElementById('repass');

    pass = pass.value;
    repass = repass.value;

    var tag = document.getElementById('warning-box');
    if (pass !== repass || pass.length === 0) {
        tag.innerHTML = '<br><br>Please re-enter your Password.<br>';
        return;
    }
    window.location = "index.html";
}