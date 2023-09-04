function loginController(){
    var username = tById('username').value;
    var password = tById('password').value;


    var usernameerror = tById('usernameerror');
    var passworderror = tById('passworderror');

    checklengthuser=getStringLength(username)
    checklengthpass=getStringLength(password)
    checkpasswordstreng=tPasswordValidation(password)

    if (checklengthuser==0) {
        usernameerror.style.display = "block"
    }

    if (checklengthpass==0) {
        passworderror.style.display = "block"
        passworderror.innerHTML="Please fill in password!!!"
    }else if(checkpasswordstreng==false){
        passworderror.style.display = "block"
        passworderror.innerHTML="Pasword Should have At least one uppercase letter, one lowercase letter,one digit,one special symbol, more than 4 characters"
    }
    else{
        direct('home') 
    }

    //alert(capitalizeFirstLetter(username))
    
}


function disableinputs() {
    var usernameerror = tById('usernameerror');
    var passworderror = tById('passworderror');

    usernameerror.style.display = "none"
    passworderror.style.display = "none"
  }



