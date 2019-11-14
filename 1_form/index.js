function validate() {

    var username_inpt = document.getElementById('user_name').value;
    var email_inpt = document.getElementById('email').value;
    var pass1_inpt = document.getElementById('pass1').value;
    var pass2_inpt = document.getElementById('pass2').value;
    var mbday_inpt = document.getElementById('m-bday').value;
    var dbday_inpt = document.getElementById('d-bday').value;
    var ybday_inpt = document.getElementById('y-bday').value;

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
        xhr.open('POST', 'api.php');
        xhr.onload = function() {
            if (xhr.status === 200) {

                display_server_response(xhr.responseText);

            }
            else {
                alert('Request failed.  Returned status of ' + xhr.status);
            }
        };
        xhr.send();
    }



    function display_server_response(response){
        console.log('response'+response);
       if(!response) {
           console.log('not true');
           append_errors(response);
       }else{

            console.log('Success redirect');


        }
    }
}





