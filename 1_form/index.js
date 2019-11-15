function init() {

    for (var i = 1; i < 13; i++) {

        select = document.getElementById('m-Bday');
        select.options[select.options.length] = new Option(i, i);
    }


    for (var i = 1; i < 32; i++) {

        select = document.getElementById('d-Bday');
        select.options[select.options.length] = new Option(i, i);
    }

    var year_today = new Date().getFullYear() + 1;
    for (var i = 1900; i < year_today; i++) {

        select = document.getElementById('y-Bday');
        select.options[select.options.length] = new Option(i, i);
    }

}

window.onload = init();

function validate() {

    var username_inpt = document.getElementById('user_name').value;
    var email_inpt = document.getElementById('email').value;
    var pass1_inpt = document.getElementById('pass1').value;
    var pass2_inpt = document.getElementById('pass2').value;
    var mbday_inpt = document.getElementById('m-Bday').value;
    var dbday_inpt = document.getElementById('d-Bday').value;
    var ybday_inpt = document.getElementById('y-Bday').value;

    var bday = mbday_inpt + '/' + dbday_inpt + '/' + ybday_inpt;


    var errorString = '';

    document.getElementById('errors').innerHTML = '';

    var pass = true;

    function username_test() {
        if (username_inpt == '') {

            append_errors('You need to specify a username');
        }
    }

    function pass_length_test() {

        if (pass1_inpt.length < 6 || pass1_inpt.length > 8) {

            append_errors('You need to specify password between 6 and 8 characters');

        }
    }

    function pass_match_test() {

        if (pass1_inpt != pass2_inpt) {

            append_errors('Your passwords need to match!');
            pass = false;
        }
    }

    function email_test() {

        var is_it = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_inpt);

        if (!is_it) {

            append_errors('That email is no good!');

        }

    }

    function append_errors(error_str = '') {

        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(error_str);
        node.appendChild(textnode);
        document.getElementById('errors').append(node);
        pass = false;
    }

    username_test();
    pass_length_test();
    pass_match_test();
    email_test();

    console.log('pass-' + pass);

    if (pass) {

        console.log('server time');
        var xhr = new XMLHttpRequest();


        var sendArray = [{
            username: username_inpt,
            email: email_inpt,
            pass1: pass1_inpt,
            bday: bday
        }];
        //console.dir( JSON.stringify(sendArray));
        xhr.open('POST', 'api.php');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                display_server_response(xhr.responseText);
            }
        }

        xhr.send('sendArray=' + JSON.stringify(sendArray));


        function display_server_response(response) {
            console.dir('response' + response);
            if (response.toString() == "true" ) {
                console.log('Success redirect');
                alert('Nice work your signed up');
            } else if (response == "dupe") {
                alert('This email already exists');
            } else {
                console.log('not true');
                alert('Add failed');

            }
        }
    }


}





