// Get Value From Span Tag
var span_Text = document.getElementById("getValue").innerText;
var span_Text1 = document.getElementById("getValue1").innerText;
var span_Text2 = document.getElementById("getValue2").innerText;
var span_Text3 = document.getElementById("getValue3").innerText;




// Set Value from Span Tag
var set = document.getElementById("itemval").innerHTML;
document.getElementById("itemval").innerHTML = "0";

var set1 = document.getElementById("itemval1").innerHTML;
document.getElementById("itemval1").innerHTML = "0";

var set2 = document.getElementById("itemval2").innerHTML;
document.getElementById("itemval2").innerHTML = "0";


var set3 = document.getElementById("itemval3").innerHTML;
document.getElementById("itemval3").innerHTML = "0";





var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var total_cart_amt2 = document.getElementById('total_cart_amt2');
var discountCode = document.getElementById('discount_code1');

const decreaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    console.log(itemprice.innerHTML);
    // console.log(itemval.value);

    if (itemval.value <= 0) {
        itemval.value = 0;

    } else {

        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - parseInt(span_Text) ;

        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - parseInt(span_Text) ;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        total_cart_amt2.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        var productValue = product_total_amt.innerHTML;
        localStorage.setItem("productValue",productValue);
        var productValue2 = total_cart_amt.innerHTML ;
        localStorage.setItem("productValue2",productValue2);
    }
}
const increaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval.value);
    if (itemval.value >= 5) {
        itemval.value = 5;
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + parseInt(span_Text) ;

        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(span_Text) ;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        total_cart_amt2.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        var productValue = product_total_amt.innerHTML;
        localStorage.setItem("productValue",productValue);
        var productValue2 = total_cart_amt.innerHTML ;
        localStorage.setItem("productValue2",productValue2);
    }
}
const decreaseNumber1 = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    console.log(itemprice.innerHTML);
    // console.log(itemval.value);
    if (itemval.value <= 1) {
        itemval.value = 1;
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - parseInt(span_Text1) ;

        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - parseInt(span_Text1) ;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        total_cart_amt2.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        var productValue = product_total_amt.innerHTML;
        localStorage.setItem("productValue",productValue);
        var productValue2 = total_cart_amt.innerHTML ;
        localStorage.setItem("productValue2",productValue2);
    }
}
const increaseNumber1 = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval.value);
    if (itemval.value >= 5) {
        itemval.value = 5;
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + parseInt(span_Text1) ;

        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(span_Text1) ;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        total_cart_amt2.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        var productValue = product_total_amt.innerHTML;
        localStorage.setItem("productValue",productValue);
        var productValue2 = total_cart_amt.innerHTML ;
        localStorage.setItem("productValue2",productValue2);
    }
}

const decreaseNumber2 = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    console.log(itemprice.innerHTML);
    // console.log(itemval.value);
    if (itemval.value <= 1) {
        itemval.value = 1;
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - parseInt(span_Text2) ;

        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - parseInt(span_Text2) ;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        total_cart_amt2.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        var productValue = product_total_amt.innerHTML;
        localStorage.setItem("productValue",productValue);
        var productValue2 = total_cart_amt.innerHTML ;
        localStorage.setItem("productValue2",productValue2);
    }
}
const increaseNumber2 = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval.value);
    if (itemval.value >= 5) {
        itemval.value = 5;
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + parseInt(span_Text2) ;

        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(span_Text2) ;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        total_cart_amt2.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        var productValue = product_total_amt.innerHTML;
        localStorage.setItem("productValue",productValue);
        var productValue2 = total_cart_amt.innerHTML ;
        localStorage.setItem("productValue2",productValue2);
    }
}


const decreaseNumber3 = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    console.log(itemprice.innerHTML);
    // console.log(itemval.value);
    if (itemval.value <= 1) {
        itemval.value = 1;
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - parseInt(span_Text3) ;

        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - parseInt(span_Text3) ;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        total_cart_amt2.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        var productValue = product_total_amt.innerHTML;
        localStorage.setItem("productValue",productValue);
        var productValue2 = total_cart_amt.innerHTML ;
        localStorage.setItem("productValue2",productValue2);
    }
}
const increaseNumber3 = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval.value);
    if (itemval.value >= 5) {
        itemval.value = 5;
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + parseInt(span_Text3) ;

        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(span_Text3) ;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        total_cart_amt2.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        var productValue = product_total_amt.innerHTML;
        localStorage.setItem("productValue",productValue);
        var productValue2 = total_cart_amt.innerHTML ;
        localStorage.setItem("productValue2",productValue2);
    }
}











var codeGet = 0;
const discount_code = () => {
    let totalamtcurr = parseInt(total_cart_amt.innerHTML);
    let totalamtcurr2 = parseInt(total_cart_amt2.innerHTML);


    let error_trw = document.getElementById('error_trw');
    if (discountCode.value === 'KnightFlix' && codeGet == 0) {
        let newtotalamt = totalamtcurr - 500;
        let newtotalamt2 = totalamtcurr2 - 500;


        total_cart_amt.innerHTML = newtotalamt;
        total_cart_amt2.innerHTML = newtotalamt2;

        error_trw.innerHTML = "Hurray! code is valid";
        codeGet =1;
    } else {
        error_trw.innerHTML = "Try Again! Valid code is KnightFlix";
    }
}









function cartCheckoutSummeryShow() {
    
  
    if(localStorage.getItem('SignUpText') !== "none"){
        localStorage.setItem('CheckoutDisplay2',"");
        localStorage.setItem('easyPaisaRemove',"none");
        localStorage.setItem('CheckoutDisplay',"none");
        localStorage.setItem('addressRemove',"");
        window.location.href = "checkout.html";
      }else{
       
        $("#alertMessgae3").show()
        .fadeIn(500);
    document.getElementById("alertInnerText").style.color = "red";
    document.getElementById("alertInnerText").innerHTML = "Please SignUp or Login First than you Purchase any items";
    
      }
  };
