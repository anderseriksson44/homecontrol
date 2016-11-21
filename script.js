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
            $("rum1").addClass("rumbox-light");
        });
    });
});
    


    
var onoff = document.querySelector("#onoff");
var lampa = document.querySelector("#rum2");

onoff.addEventListener("click", function(){
    lampa.classList.toggle("rumbox-light");
    
    if (onoff = true) {
        this.classList.add("btn-danger");
        this.innerHTML = "OFF";
        onoff = false;
    }
    else {
        this.innerHTML = "ON";
        onoff.classList.add("btn-warning");
        onoff = true; 
    }

    });    



});


    

