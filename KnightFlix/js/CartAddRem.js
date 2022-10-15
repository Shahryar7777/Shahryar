

var counter = document.getElementById("lblCartCount");


var count = 0;
var mincount = 0;
var count2 = 0;
var mincount2 = 0;
var count3 = 0;
var mincount3 = 0;
var count4 = 0;
var mincount4= 0;


function addCart1() {
    var test = "";
    const num = parseInt(counter.innerHTML); 
    if(count == 0){
    counter.innerHTML = num  + 1;
    count = 1;
    mincount = 0;
    };
    var countervalue = counter.innerHTML
    localStorage.setItem("cartCount", countervalue);
    localStorage.setItem("cartAdd1",test );
    document.getElementById("cart1").style.display = "";


}
function removeCart1() {
    var test = "none";
    const num = parseInt(counter.innerHTML);
    if(mincount == 0){
    counter.innerHTML =  num  - 1;
    count = 0;
    mincount = 1;
    };
    var countervalue = counter.innerHTML
    localStorage.setItem("cartCount", countervalue);
    localStorage.setItem("cartAdd1", test);
    document.getElementById("cart1").style.display = "none";

}
function addCart2() {
    var test = "";
    const num = parseInt(counter.innerHTML);
    if(count2 == 0){
    counter.innerHTML = num  + 1;
    count2 = 1;
    mincount2 = 0;
    };
    var countervalue = counter.innerHTML
    localStorage.setItem("cartCount", countervalue);
    localStorage.setItem("cartAdd2", test);
    document.getElementById("cart2").style.display = "";

}

function removeCart2() {
    var test = "none";
    const num = parseInt(counter.innerHTML);
    if(mincount2 == 0){
    counter.innerHTML =  num  - 1;
    count2 = 0;
    mincount2 = 1;
    };
    var countervalue = counter.innerHTML
    localStorage.setItem("cartCount", countervalue);
    localStorage.setItem("cartAdd2", test);
    document.getElementById("cart2").style.display = "none";
}


function addCart3() {
    var test = "";
    const num = parseInt(counter.innerHTML);
    if(count3 == 0){
    counter.innerHTML = num  + 1;
    count3 = 1;
    mincount3 = 0;
    };
    var countervalue = counter.innerHTML
    localStorage.setItem("cartCount", countervalue);
    localStorage.setItem("cartAdd3", test);
    document.getElementById("cart3").style.display = "";


}
function removeCart3() {
    var test = "none";
    const num = parseInt(counter.innerHTML);
    if(mincount3 == 0){
        counter.innerHTML =  num  - 1;
        count3 = 0;
        mincount3 = 1;
        };
        var countervalue = counter.innerHTML

    localStorage.setItem("cartCount", countervalue);
    localStorage.setItem("cartAdd3", test);
    document.getElementById("cart3").style.display = "none";

}
function addCart4() {
    var test = "";
    const num = parseInt(counter.innerHTML);
    if(count4 == 0){
        counter.innerHTML = num  + 1;
        count4 = 1;
        mincount4 = 0;
        };
        var countervalue = counter.innerHTML

        localStorage.setItem("cartCount", countervalue);
    localStorage.setItem("cartAdd4", test);
    document.getElementById("cart4").style.display = "";

}

function removeCart4() {
    var test = "none";
    const num = parseInt(counter.innerHTML);
    if(mincount4 == 0){
        counter.innerHTML =  num  - 1;
        count4 = 0;
        mincount4 = 1;
        };
        var countervalue = counter.innerHTML

        localStorage.setItem("cartCount", countervalue);
    localStorage.setItem("cartAdd4", test);
    document.getElementById("cart4").style.display = "none";
}

