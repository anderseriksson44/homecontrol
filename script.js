/* jQuery function to fade boxes at hover */
$(document).ready(function() {
    $(".box").on("mouseenter", function(){
        $(this).fadeTo("fast", 0.4);
            $(this).on("mouseleave", function(){
                $(this).fadeTo("fast", 1);
            });
        });

/* jQuery function to to add a new light */
    var lightcount = 5;
    $("#addlight").on("click", function(){
        
        var domElement = $('<div class="col-md-3 col-sm-6 own text-center"><div id="L' + lightcount +'" class="rumbox"></div><button id="L' + lightcount +'" type="button" class="lampknapp btn btn-md btn-success">  ON  </button></div>');
//        var lid = $(domElement).attr("id");

        //Add it to the DOM
        $("#aa").append(domElement)
        console.log(domElement);
//        var lid= (domElement).attr("id");
//        console.log(lid);
//        
//        $("#"+lid).after(domElement);
        lightcount++;
    });
    


/* jQuery plugin-function for a nice toggle-switch */
//$(function() {
//      $("#toggle").change(function(){
//          console.log("hej");
//        $("#rum").css("background-color", "yellow");
//        });
//    });
    
/* Eventlistener for confirmation when adding a new room to the list */

var rum = document.getElementById("addroom");
rum.addEventListener("click", addaRoom, false);    
    

/* Function that list called when a new room should be added to the tab-list*/

function addaRoom() {
var roomName = document.getElementById('rum').value; /* store name of room */
var result = document.getElementById('result')

if (roomName.length > 10) {
    result.textContent = "För långt namn (max 10 tecken)";
    alert("För långt namn (max 10 tecken)");
} else {
    var ul = document.getElementById("rumlista");
    var list = document.createElement("li");
    ul.appendChild(list);
    
    var atag = document.createElement("a");
    atag.setAttribute("href", "#6");
    atag.setAttribute("data-toggle", "tab");
    atag.innerHTML= (roomName);
    
    list.appendChild(atag);
    
    
        }
}
    

//var knapp = lid.querySelectorAll("#id");
//console.log(knapp);    


// Turn the light on and off    


    $("#L2").on("click", function(){
        var onoff = $(this).attr("id");
        var rumlampa = $(this).siblings("div");
        console.log(onoff);
        console.log(rumlampa);
        $(rumlampa).toggleClass("rumbox-light");
});

    var on ="true";
$(".lampknapp").on("click", function () {
        var onoff = $(this).attr("id");
        var rumlampa = $(this).siblings("div").attr("id");
        console.log(onoff);
        console.log(rumlampa);
        
        if (onoff==rumlampa) {
            $("#"+rumlampa).toggleClass("rumbox-light");
        }
    
        if  (on == "true") {
            $(this).addClass("btn-danger");
            $(this).html("OFF");
            on ="false";
        }
        else {
            $(this).removeClass("btn-danger");
            $(this).html("ON");
            on ="true";
        }   
        
    });
    
    
//    
//var onoff = document.querySelector("#onoff");
//var lampa = document.querySelector("#rum2");
//var tand = true;
//    
//onoff.addEventListener("click", function(){
//    lampa.classList.toggle("rumbox-light");
//    
//    if (tand == true) {
//        this.classList.add("btn-danger");
//        this.innerHTML = "OFF";
//        tand = false;
//    }
//    else {
//        this.classList.remove("btn-danger");
//        this.classList.add("btn-success");
//        this.innerHTML = "ON";
//        tand = true; 
//        
//    }
//
//    }); 



});


    

