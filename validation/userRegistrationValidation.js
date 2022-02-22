
function ValidateUserName() {
    var status = true;
    var num = false;
    var username = document.getElementById("username").value;
    var usernameerror = document.getElementById("usernameerror");
    for (var i = 0; i < username.length; i++) {
        if (!(isNaN(username.charAt(i)))) {
            num = true;
            break;
        }

    }

    if (username == "") {
        status = false;
        usernameerror.innerHTML = "please enter name";
        usernameerror.style.color = "red";
    }
    else if (num) {
        status = false;
        usernameerror.innerHTML = "only alphabate allowed";
        usernameerror.style.color = "red";
    }
    else
        usernameerror.innerHTML = "";
    return status;
}

function ValidateEmail() {
    var status = true;
    var regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    var email = document.getElementById("email").value;
    var emailerror = document.getElementById("emailerror");
    if (email == "") {
        status = false;
        emailerror.innerHTML = "please enter valid email";
        emailerror.style.color = "red";

    }
    else if (!regex.test(email)) {
        status = false;
        emailerror.innerHTML = "Invalid email";
        emailerror.style.color = "red"
    }
    else
        emailerror.innerHTML = "";
    return status;
}
function ValidateNumber() {
    var status = true;
    var number = document.getElementById("number").value;
    var numbererror = document.getElementById("numbererror");
    if (number == "") {
        status = false;
        numbererror.innerHTML = "please enter mobile number";
        numbererror.style.color = "red";

    }
    else if (isNaN(number)) {
        status = false;
        numbererror.innerHTML = "only digit allowed";
        numbererror.style.color = "red";

    }
    else if (number.length != 10) {
        status = false;
        numbererror.innerHTML = "mobile number must content 10 digit";
        numbererror.style.color = "red";
    }
    else
        numbererror.innerHTML = "";
    return status;
}
function ValidatePassword() {
    var status = true;
    var regex = new RegExp('/^[a-zA-Z0-9!@#$%^&*]{6,16}$/');
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var password= document.getElementById("password").value;
    var passworderror = document.getElementById("passworderror");
    if (password == "") {
        status = false;
        passworderror.innerHTML = "please enter password";
        passworderror.style.color = "red";

    }
    else if(Password.length < minNumberofChars || password.length > maxNumberofChars){
        return false;
    }
    else
        passworderror.innerHTML = "";
    return status;
}


function ValidateData() {
    var usernamestatus = ValidateUserName();
    var emailstatus = ValidateEmail();
    var numberstatus = ValidateNUmber();
    if (usernamestatus && emailstatus && numberstatus &&passwordstatus)
        return true;
    return false;

}


