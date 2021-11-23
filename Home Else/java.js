window.onload = init;
 function init() {
   var wide=  document.getElementsByClassName("wide");
   var narr= document.getElementsByClassName("narr");
   for (var i=0;i<wide.length;i++){
      wide[i].style.display="block";
      narr[i].style.display="none";
   }

// function init() {
//    // document.forms[0].onsubmit = function() {
//    //    if (this.checkValidity()) alert("Data passes initial validation tests");
//    //    return false;
//    // }
   
document.getElementById("web").onclick = turnOnWeb;
document.getElementById("mobile").onclick=turnOnMobile;
// }

function turnOnWeb() {
   var wide=  document.getElementsByClassName("wide");
   var narr= document.getElementsByClassName("narr");
   for (var i=0;i<wide.length;i++){
      wide[i].style.display="block";
      narr[i].style.display="none";
   }

   // document.getElementById("delBox").disabled=false;
   // document.getElementById("pickupBox").disabled=true;
   // document.getElementById("pickupBox").style.display="none";
   // document.getElementById("addressBox").style.display="block";
   // document.getElementById("delBox").style.display="block";
}

function turnOnMobile() {
   var wide=  document.getElementsByClassName("wide");
   var narr= document.getElementsByClassName("narr");
   for (var i=0;i<wide.length;i++){
      wide[i].style.display="none";
      narr[i].style.display="block";
   }
}
   }