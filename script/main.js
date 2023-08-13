let range = document.querySelector(".slider");
var redEl = document.getElementById("redSquare");
var blueEl = document.getElementById("blueSquare");

range.oninput = function () {      

    redEl.style.position = "absolute";
    blueEl.style.position = "absolute";   

     var rX=redEl.style.right = (+this.value) + '0' + 'px';   
     var bX=blueEl.style.left = (+this.value) + '0' + 'px';
     
     if(+this.value>33){
        document.body.style.background='gray';
     }
     if(+this.value>66){
        document.body.style.background='white';
     }
     if(+this.value<33){
        document.body.style.background='black';
     }
 }