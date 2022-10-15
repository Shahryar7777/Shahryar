
// Preloader JS
$(function () {
    $('body').addClass('loaded');
});




document.getElementById("getName").innerHTML = localStorage.getItem("textvalue2");
document.getElementById("getEmail").innerHTML = localStorage.getItem("textvalue3");



//declearing html elements

const imgDiv = document.querySelector('.image');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div 

imgDiv.addEventListener('mouseenter', function () {
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function () {
    uploadBtn.style.display = "none";
});

//lets work for image showing functionality when we choose an image to upload

//when we choose a foto to upload

file.addEventListener('change', function () {
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);

        //Allright is done

        //please like the video
        //comment if have any issue related to vide & also rate my work in comment section

        //And aslo please subscribe for more tutorial like this

        //thanks for watching
    }
});




body = document.querySelector('body'),
    sidebar = body.querySelector('#nav1'),

    toggle = body.querySelector(".toggle1"),
    toggle1 = body.querySelector("#toggle1"),

    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");



    body.classList.toggle(localStorage.getItem('localDark'));

 

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");

})
toggle1.addEventListener("click", () => {
    sidebar.classList.toggle("close");

})


modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains(localStorage.getItem('localDark'))) {
        localStorage.setItem('localDark',"dark");
        modeText.innerText = "Light mode";
    } else {
        localStorage.setItem('localDark',"light");
        modeText.innerText = "Dark mode";

    }
});



$(".search-btn").click(function(){
    $(".wrapper").addClass("active");
    $(this).css("display", "none");
    $(".wrap").fadeIn(500);
    $(".close-btn").fadeIn(500);
    setTimeout(function(){
      $("input").focus();
      $(".wrap input").fadeIn(500);
      $(".wrap button").fadeIn(500);
    }, 800);
  });
  $(".close-btn").click(function(){
    $(".wrapper").removeClass("active");
    $(".search-btn").fadeIn(800);
    $(".wrap").fadeOut(500);
    $(".close-btn").fadeOut(500);
    $("input").val("");
    $(".wrap input").fadeOut(500);
    $(".wrap button").fadeOut(500);
  });



  