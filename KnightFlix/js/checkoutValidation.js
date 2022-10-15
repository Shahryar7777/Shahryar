
document.getElementById("paymentTotal").style.display = localStorage.getItem('CheckoutDisplay2');
document.getElementById("paymentTotal2").style.display = localStorage.getItem('CheckoutDisplay');
document.getElementById("addressDetails").style.display = localStorage.getItem('addressRemove');
document.getElementById("easyPasiaPayment").style.display = localStorage.getItem('easyPaisaRemove');
document.getElementById("productTotalValue").innerHTML = localStorage.getItem("productValue");
document.getElementById("productTotalValue2").innerHTML = localStorage.getItem("productValue2");




function checkoutSummeryRem() {
    document.getElementById("paymentTotal2").style.display = "none";
    localStorage.setItem('CheckoutDisplay', 'none');
};
function checkoutSummeryRem2() {
    document.getElementById("paymentTotal").style.display = "none";
    localStorage.setItem('CheckoutDisplay2', 'none');
};
$("#alertMessgae2").hide();


document.getElementById("paymentButton").innerHTML = "Next";
// $("#easyPasiaPayment").hide();

var form = document.getElementById('addressNumberForm');
var firstNameAd = document.getElementById('firstname');
var lastNameAd = document.getElementById('lastname');
var addressAd = document.getElementById('address');
var townAd = document.getElementById('Town');
var postcodead = document.getElementById('Postcode');
var easypaisaPd = document.getElementById('easypaisaPd');




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
var PaymentShow = 0;
var paymentButton = 0;
function CheckDetails() {
    if (document.getElementById("paymentTotal").style.display == "") {


        var isFirstNameValid = checkFirstName(),
            isLastNameValid = checkLastname(),
            isAddressValid = checkAddress(),
            isTowndValid = checkTown(),
            isPostCodeValid = checkPostCode();
        var isFormValid = isFirstNameValid &&
            isLastNameValid &&
            isAddressValid &&
            isTowndValid &&
            isPostCodeValid;
        if (isFormValid && PaymentShow == 0) {
            $("#addressDetails").hide(700);
            $("#easyPasiaPayment").show(700);
            document.getElementById("paymentButton").innerHTML = "Pay now";
            PaymentShow = 1;
        }



        else if (PaymentShow == 1) {
            var isEpNumberValid = checkEpNumber();
            var isFormValid2 = isEpNumberValid;
            if (isFormValid2) {


                var firstName = document.getElementById("firstname").value;
                var lastEmail = document.getElementById("lastname").value;
                var address = document.getElementById("address").value;
                var city = document.getElementById("Town").value;
                var postcode = document.getElementById("Postcode").value;
                
                var tempParam = {
                    from_name: firstName +" "+ lastEmail,
                    to_name: "Sherry",
                    country:"Pakistan",
                    address: address,
                    city: city,
                    postcode: postcode,
                    totalCost: localStorage.getItem("productValue2")
                }
                const serviceId = "service_xl127sl";
                const templateId = "template_bbfgvqc"
                
                emailjs.send(serviceId, templateId, tempParam)
                    .then(function (response) {
                        //    success
                        $("#alertMessgae2").show()
                    .fadeIn(500);
                document.getElementById("alertInnerText").style.color = "green";
                document.getElementById("alertInnerText").innerHTML = "You've bought a ticket to this movie.";
                document.getElementById("paymentTotal").style.display = "none";
                localStorage.setItem('CheckoutDisplay2', 'none');
                PaymentShow = 2;
                
                
                    }, function (error) {
                        //    error 
                        $("#alertMessgae2").show()
                        .fadeIn(500);
                    document.getElementById("alertInnerText").style.color = "red";
                    document.getElementById("alertInnerText").innerHTML = "Please check your internet connection";
                    });
                


               
            }
        }
    }







    else if (document.getElementById("paymentTotal2").style.display == "") {


        if (paymentButton == 0) {
            var isEpNumberValid = checkEpNumber();
            var isFormValid2 = isEpNumberValid;
            if (isFormValid2 && document.getElementById("SubsSideBar").style.display == "none") {
                var userName = localStorage.getItem("textvalue2");
                var userEmail = localStorage.getItem("textvalue3");
                var userMessage = " bought a premium subscription to his website, emailed by: ";
                var tempParam = {
                    from_name: userName,
                    to_name: "Sherry",
                    message: userName + userMessage + userEmail
                }
                const serviceId = "service_xl127sl";
                const templateId = "template_vpz92pk"

                emailjs.send(serviceId, templateId, tempParam)
                    .then(function (response) {
                        //    success
                        $("#addressDetails").hide(700);
                        $("#easyPasiaPayment").show(700);
                        document.getElementById("paymentButton").innerHTML = "Pay now";
                        $("#alertMessgae2").show()
                            .fadeIn(500);
                        document.getElementById("alertInnerText").style.color = "green";
                        document.getElementById("alertInnerText").innerHTML = "You have successfully Purchased this Subscription";
                        document.getElementById("paymentTotal2").style.display = "none";
                        localStorage.setItem('CheckoutDisplay', 'none');
                        paymentButton = 1;
                        $(".navlink-lock").hide(200);


                        var countertime = '11 , 7, 2022, 00:00:00';
                        document.getElementById("lockDropDown").style.display = "";
                        document.getElementById("SubsSideBar").style.display = "";
                        localStorage.setItem('lockStorage', "");
                        localStorage.setItem('lockStorage2', "none");
                        localStorage.setItem('SubsStorage', "");
                        localStorage.setItem('counterTime', countertime);
                        // Set the date we're counting down to

                        var countDownDate = new Date('11 , 7, 2022, 00:00:00').getTime();

                        // Update the count down every 1 second
                        var x = setInterval(function () {

                            // Get today's date and time
                            var now = new Date().getTime();

                            // Find the distance between now and the count down date
                            var distance = countDownDate - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                            // Output the result in an element with id="demo"
                            document.getElementById("SubsConter").innerHTML = days + "d " + hours + "h "
                                + minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            if (distance < 0) {
                                clearInterval(x);
                                document.getElementById("SubsConter").innerHTML = "";
                            }
                        }, 1000);


                    }, function (error) {
                        //    error 
                        $("#alertMessgae2").show()
                            .fadeIn(500);
                        document.getElementById("alertInnerText").style.color = "red";
                        document.getElementById("alertInnerText").innerHTML = "Please check your internet connection";
                    });

            }
            else if(document.getElementById("SubsSideBar").style.display == "") {
                $("#alertMessgae2").show()
                    .fadeIn(500);
                document.getElementById("alertInnerText").style.color = "red";
                document.getElementById("alertInnerText").innerHTML = "You have alredy Purchased this Subscription";
            }

        }

    }
    else {
        $("#alertMessgae2").show()
            .fadeIn(500);
        document.getElementById("alertInnerText").style.color = "red";
        document.getElementById("alertInnerText").innerHTML = "Please select the item which you want to purchase";
    }
    return false;
}



var checkFirstName = () => {
    var valid = false;

    var min = 4, max = 10;

    var firstname = firstNameAd.value.trim();

    if (!isRequired(firstname)) {
        showError(firstNameAd, 'First Name cannot be blank .');
        document.getElementById("firstname").style.backgroundColor = "transparent";

    } else if (!isBetween(firstname.length, min, max)) {
        showError(firstNameAd, 'First Name Must be between 4 and 10 characters');
    } else {
        showSuccess(firstNameAd);
        valid = true;
    }
    return valid;
};
var checkLastname = () => {
    var valid = false;

    var min = 4, max = 10;

    var lastname = lastNameAd.value.trim();

    if (!isRequired(lastname)) {
        showError(lastNameAd, 'Last Name cannot be blank .');
        document.getElementById("lastname").style.backgroundColor = "transparent";

    } else if (!isBetween(lastname.length, min, max)) {
        showError(lastNameAd, 'Last Name Must be between 4 and 10 characters');
    } else {
        showSuccess(lastNameAd);
        valid = true;
    }
    return valid;
};
var checkAddress = () => {
    var valid = false;

    var min = 12, max = 25;

    var address = addressAd.value.trim();

    if (!isRequired(address)) {
        showError(addressAd, 'Address cannot be blank .');
        document.getElementById("address").style.backgroundColor = "transparent";

    } else if (!isBetween(address.length, min, max)) {
        showError(addressAd, 'Address Must be between 12 and 25 characters');
    } else {
        showSuccess(addressAd);
        valid = true;
    }
    return valid;
};

var checkTown = () => {
    var valid = false;

    var min = 4, max = 20;

    var town = townAd.value.trim();

    if (!isRequired(town)) {
        showError(townAd, 'Town/ City cannot be blank .');
        document.getElementById("Town").style.backgroundColor = "transparent";

    } else if (!isBetween(town.length, min, max)) {
        showError(townAd, 'Town/ City Must be Valid');
    } else {
        showSuccess(townAd);
        valid = true;
    }
    return valid;
};
var checkPostCode = () => {
    var valid = false;

    var min = 5, max = 10;

    var postCode = postcodead.value.trim();

    if (!isRequired(postCode)) {
        showError(postcodead, 'Postcode / Zip cannot be blank .');
        document.getElementById("Postcode").style.backgroundColor = "transparent";

    } else if (!isBetween(postCode.length, min, max)) {
        showError(postcodead, 'Postcode / Zip Must be Valid');
    } else {
        showSuccess(postcodead);
        valid = true;
    }
    return valid;
};
var checkEpNumber = () => {
    var valid = false;

    max = 11;

    var epNumber = easypaisaPd.value.trim();

    if (!isRequired(epNumber)) {
        showError(easypaisaPd, 'Please fill this number field .');
        document.getElementById("easypaisaPd").style.backgroundColor = "transparent";

    } else if (isNumber(epNumber.length, max)) {
        showError(easypaisaPd, 'Not a Valid Easypaisa account number');
    } else {
        showSuccess(easypaisaPd);
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
        case 'firstname':
            checkFirstName();
            break;
        case 'lastname':
            checkLastname();
            break;
        case 'address':
            checkAddress();
            break;
        case 'Town':
            checkTown();
            break;
        case 'Postcode':
            checkPostCode();
            break;
        case 'easypaisaPd':
            checkEpNumber();
            break;
    }
}));












