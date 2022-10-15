document.getElementById("SignUpText").style.display = localStorage.getItem("SignUpText");
$("#alertMessgae").hide();
$("#alertMessgae3").hide()

function subCheckoutSummeryShow() {


  if(localStorage.getItem('SignUpText') !== "none"){

    localStorage.setItem('CheckoutDisplay',"");
    localStorage.setItem('easyPaisaRemove',"");
    localStorage.setItem('addressRemove',"none");
    localStorage.setItem('CheckoutDisplay2',"none");
    window.location.href = "checkout.html";
  }else{
   
    $("#alertMessgae3").show()
    .fadeIn(500);
document.getElementById("alertInnerText").style.color = "red";
document.getElementById("alertInnerText").innerHTML = "Please SignUp or Login First than you Purchase this Subscription ";

  }


};
function subCheckAndNavigate() {


  if(localStorage.getItem('SignUpText') !== "none"){
    window.location.href = "movie_watch.html";
  }else{
   
    $("#alertMessgae").show()
    .fadeIn(500);
document.getElementById("alertInnerText").style.color = "red";
document.getElementById("alertInnerText").innerHTML = "First you have to buy a subscription, then you can watch movies and if you like the subscription plan, click on the purchase button.";

  }


};
function subCheckAndNavigate2() {


  if(localStorage.getItem('SignUpText') !== "none"){
    window.location.href = "genre.html";
  }else{
   
    $("#alertMessgae").show()
    .fadeIn(500);
document.getElementById("alertInnerText").style.color = "red";
document.getElementById("alertInnerText").innerHTML = "First you have to buy a subscription, then you can watch movies and if you like the subscription plan, click on the purchase button.";

  }


};

$(".alertClose").click(function() {
    $(this)
      .parent("#alertMessgae")
      .fadeOut();
  });
  $(".alertClose").click(function() {
    $(this)
      .parent("#alertMessgae2")
      .fadeOut();
  });
  $(".alertClose").click(function() {
    $(this)
      .parent("#alertMessgae3")
      .fadeOut();
  });
 


  $(".navlink-lock").click(function() {
    $(this)
      $("#alertMessgae").show(300)
      .fadeIn(500);
     

  });

  $("#SubscriptionLogOut").click(function() {
    $(this)
      $(".navlink-lock").show(200);
      var countertime = '11 , 7, 2021, 00:00:00';
      document.getElementById("lockDropDown").style.display = "none";
      document.getElementById("SubsSideBar").style.display = "none";
      localStorage.setItem('lockStorage',"none");
      localStorage.setItem('lockStorage2',"");
      localStorage.setItem('SubsStorage',"none");
      localStorage.setItem('counterTime',countertime);

      document.getElementById("SignUpText").style.display = "none";
      localStorage.setItem("SignUpText",'none')


  });



// Set the date we're counting down to

var countDownDate = new Date(localStorage.getItem("counterTime")).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

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




