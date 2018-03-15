var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var icon = document.getElementById("icon");
var z = window.pageYOffset;
window.onscroll = function(){


  var y = window.pageYOffset;

  console.log(y);

  counter.style.top = 400 + y * .97 + "px";

  counter.innerHTML = y + "px";

  if (y > 2000) {
    counter.style.backgroundColor = "green";
  }else{
    counter.style.backgroundColor = "blue";}

    icon.style.top = 1 + y  + "px";

  if(y-z > 0){

      icon.src="images/rocket.png";

  }else{

  icon.src="images/rocket-01.png";
 }
 z = window.pageYOffset;

};

window.addEventListener("scroll", function(){

  var y = window.pageYOffset;

  //console.log(y);

     if(y > 300){
       document.getElementById("message1").style.left = "5px";
       } else {
       document.getElementById("message1").style.left = "-95px";
       }

    });

    window.addEventListener("scroll", function(){

      var y = window.pageYOffset;

      //console.log(y);

         if(y > 300){
           document.getElementById("message3").style.right = "5px";
           } else {
           document.getElementById("message3").style.right = "-95px";
           }

        });
