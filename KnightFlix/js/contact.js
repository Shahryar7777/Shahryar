
var form = document.getElementById('contactForm');
var nameCf = document.getElementById('name');
var emailCf = document.getElementById('email');
var subjectCf = document.getElementById('subject');
var messageCf = document.getElementById('message');






var showError = function (input, message) {
    var formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    var error = formField.querySelector('small');
    error.textContent = message;

};
var isNumber = function (lenght, max) {
    if (lenght == max)
        return false;
    else
        return true;
};

var showSuccess = function (input) {
    var formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    var error = formField.querySelector('small');
    error.textContent = ' ';
};

var isRequired = function (value) {
    if (value == '')
        return false;

    else
        return true;
};


var isBetween = function (lenght, min, max) {
    if (lenght < min || lenght > max)
        return false;
    else
        return true;
};
var isEmailValid = function(email){
    var re = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    return re.test(email);
    };

    var isPasswordSecure = function(password) {

        var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        
        return re.test(password);
        };
function CheckDetails() {
    


        var isNameValid = checkName(),
            isEmailValid = checkEmail(),
            isSubjectValid = checkSubject(),
            isMessageValid = checkMessage();
        var isFormValid =
        isNameValid &&
        isEmailValid &&
        isSubjectValid &&
        isMessageValid;
        if (isFormValid) {

                var sName=document.getElementById("name").value;
                var sEmail=document.getElementById("email").value;
                var sSubject=document.getElementById("subject").value;
                var sMessage=document.getElementById("message").value;
              
                var success=document.getElementById("form-message-success");
                var warning=document.getElementById("form-message-warning");
                
                var tempParam = {
                    from_name: sName,
                    to_name: "Aman",
                    subject: sSubject,
                    email: sEmail,
                    message: sMessage
                }
            
            
                emailjs.send('service_pyu1gtg','template_xxg83ti', tempParam)
            .then(function(response){
                //    success
               warning.style.display="none";
               success.style.display= "inline-block";
            }, function(error){  
            //    error 
                success.style.display="none";
                warning.innerHTML="Error:" +error.status;
                warning.style.display= "inline-block";
             });
            
            
        }



}


var checkName = () => {
    var valid = false;

    var min = 4, max = 15;

    var firstname = nameCf.value.trim();

    if (!isRequired(firstname)) {
        showError(nameCf, 'Name cannot be blank .');
        document.getElementById("name").style.backgroundColor = "transparent";


    } else if (!isBetween(firstname.length, min, max)) {
        showError(nameCf, 'Name Must be between 4 and 15 characters');
    } else {
        showSuccess(nameCf);
        valid = true;
    }
    return valid;
};

var checkEmail = function() {
    var valid = false;

     var email = emailCf.value.trim();

     if (!isRequired (email)){
         showError(emailCf, 'Email cannot be blank .') 
         document.getElementById("email").style.backgroundColor = "transparent";
         ;
     } else if (!isEmailValid(email)){
         showError(emailCf, 'Email is not valid ')     
     } else{
         showSuccess(emailCf) ;
         valid = true ;
     }
     return valid ;
} ;
var checkSubject = () => {
    var valid = false;

    var min = 10, max = 20;

    var subject = subjectCf.value.trim();

    if (!isRequired(subject)) {
        showError(subjectCf, 'Subject cannot be blank .');
        document.getElementById("subject").style.backgroundColor = "transparent";


    } else if (!isBetween(subject.length, min, max)) {
        showError(subjectCf, 'Subject Must be between 10 and 20 characters');
    } else {
        showSuccess(subjectCf);
        valid = true;
    }
    return valid;
};
var checkMessage = () => {
    var valid = false;

    var min = 12, max = 25;

    var message = messageCf.value.trim();

    if (!isRequired(message)) {
        showError(messageCf, 'Message cannot be blank .');
        
        document.getElementById("message").style.backgroundColor = "transparent";

    } else if (!isBetween(message.length, min, max)) {
        showError(messageCf, 'Message Must be between 12 and 25 characters');
    } else {
        showSuccess(messageCf);
        valid = true;
    }
    return valid;
};


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();


});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};


form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'subject':
            checkSubject();
            break;
        case 'message':
            checkMessage();
            break;
     
    }
}));












