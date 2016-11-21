$(document).ready(function() {
    $(".box").on("mouseenter", function(){
        $(this).fadeTo("fast", 0.4);
            $(this).on("mouseleave", function(){
                $(this).fadeTo("fast", 1);
            });
        });
    $(".plusbox").click(function(){
        var domElement = $('<div class="col-md-4 col-sm-6"><div class="rumbox"></div></div>');
        $(this).before(domElement);
    });
    
        
  $( function() {
    $( "#slider" ).slider();
  } );
  


$(function() {
      $("#toggle-one").bootstrapToggle(function(){
        $(this).change(function() {
            $("#rum").addClass("rumbox-light");
        });
    });
});
    

function nyttRum() {
        alert("Hej");
//        var node = document.createElement("li");
//        var textnode = document.createTextNode(text);
//        node.appendChild(textnode);
//        document.getElementById("exTab1").appendChild(node);
};

    
    
    
var onoff = document.querySelector("#onoff");
var lampa = document.querySelector("#rum2");
var tand = true;
    
onoff.addEventListener("click", function(){
    lampa.classList.toggle("rumbox-light");
    
    if (tand == true) {
        this.classList.add("btn-danger");
        this.innerHTML = "OFF";
        tand = false;
    }
    else {
        this.innerHTML = "ON";
        this.classList.toggle("btn-warning");
        tand = true; 
        console.log(this.classList);
    }

    });    



});


    

