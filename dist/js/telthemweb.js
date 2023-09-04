
function tById(atribute){
    return document.getElementById(atribute);
}

// validate email address
function tEmailValidation(emaailaddress){
    let result=false;
    const emailrex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(emailrex.test(emaailaddress)==true)
    {
        result=true
    }
    return result;
}

// validate PhoneNumber address
function tPhoneNumberValidation(phone){
    let result=false;
    const phonevaliregrex =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phonevaliregrex.test(phone)==true)
    {
        result=true
    }
    
    return result;
}

// Regex for password validation 
//Pasword Should have At least one uppercase letter, one lowercase letter,
// one digit,one special symbol, more than 4 characters
function tPasswordValidation(password){
    let result =false;
    const passwordregrex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/;
    if(passwordregrex.test(password)==true)
    {
        result=true
    }
    return result;
}


function tIsVisaCardNumber(cardNumber) {
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    return visaRegex.test(cardNumber);
  }
  
  function tIsMastercard(creditCardNumber) {
    const mastercardRegex = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
    return mastercardRegex.test(creditCardNumber);
  }


  function isValidCVV(cvv) {
    return /^[0-9]{3,4}$/.test(cvv);
  }
  
  function getStringLength(str) {
    return str.length;
  }
  
  function checkExpiryDate(expiryDate) {
    const currentDate = new Date();
    const parsedExpiryDate = new Date(expiryDate);
  
    return parsedExpiryDate >= currentDate;
  }
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().substr(-2);
    return `${month}/${year}`;
  }

  function isValidcardDate(input) {
    var regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return regex.test(input);
  }



  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  
  function direct(address) {
	
    var windowlocation = window.location.href;
    var directory = windowlocation.substring(0,windowlocation.lastIndexOf("/") +1);
    window.location.href=directory+address+".html";
  }


  function AutoComplete(array,element) {
	
    dataList=tById('element');
    dataList.innerHTML="";
    for (var i = 0; i < array.length; i++) {
      var option = document.createElement('option');
          
          option.value = array[i];
          dataList.appendChild(option);
    }
  }

  function showPass(){
    var x = tById("password");
    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type="password";
    }
}
  