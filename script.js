/* jQuery function to fade boxes at hover */
$(document).ready(function() {
    
    $(".box").on("mouseenter", function(){
        $(this).fadeTo("fast", 0.4);
        var text = $(this).children("h2").css("display", "block");
        text.animate({fontSize: '30pt'}, "slow");
        
        $(this).on("mouseleave", function(){
            $(this).fadeTo("fast", 1);
            $(this).children("h2").css("display", "none");
            $(this).children("h2").css("font-size", "10pt");
        });
    });
});
$(document).ready(function() {
    
    

    
    
//Adding a new light to the room //
    
$(".addlight").on("click", function() {
  var value = $('.light').val()    
   var domElement = $('<div class="col-md-3 col-sm-6 own text-center"><h3>'+value+'</h3><div class="lightbox"></div><button type="button" class="lampknapp btn btn-md btn-success">  ON  </button></div>');
    $(document).find("div.active").find(".room").append(domElement);
    $(".light").val(null);
});    
    
    
 
    

/* Eventlistener for confirmation when adding a new room to the list */

var rum = document.getElementById("addroom");
rum.addEventListener("click", addaRoom, false);    
    
/* Function that list called when a new room should be added to the tab-list*/
function addaRoom() {
var roomName = document.getElementById('rum').value; /* store name of room */


if (roomName.length > 10) {
    this.textContent = "För långt namn (max 10 tecken)";
    alert("För långt namn (max 10 tecken)");
} else if (roomName == "") {
    alert("Du måste ange ett namn");
} else {
    var ul = document.getElementById("rumlista");
    var list = document.createElement("li");
    ul.appendChild(list);
    
    var atag = document.createElement("a");
    atag.setAttribute("href", "#"+roomName);
    atag.setAttribute("data-toggle", "tab");
    atag.innerHTML= (roomName);
    list.appendChild(atag);
}
    var room = document.getElementsByClassName("tab-pane");
//    var lastdiv = 
    
    };
});
    



// Turn the light on and off    
// Bootstap plugin (Bootstaptoggle.com) (currently does not work)
    $(this).find(".toggleknapp").change(function(){
        console.log ($(this).siblings());
        console.log ($(this).prevAll(".lightbox"));
        $(this).prevAll().css("background-color", "yellow");
    });



    
//Turn the light on and off
    
    var tand = "false";
    $(document).on("click", ".lampknapp", function (){
            if (tand=="false") {
                $(this).siblings(".lightbox").css("background-color", "yellow");
                $(this).css("background-color", "red");
                $(this).html("OFF");
                tand="true";
                
            }
            else {
                $(this).siblings(".lightbox").css("background-color", "#3c3c3c");
                $(this).css("background-color", "green");
                $(this).html("ON");
                tand="false";
                }
            
    });
    

        
//        var lampaDiv = $(this).parent().attr("id"); // Vi kollar om id på diven runt lampan är det samma
//        var lampKnappen= $(this).parent().attr("id");
//        console.log(onoff);
//        console.log(rumlampa);
//        
//        if (lampKnappen == lampaDiv) {
//            $("#"+lampaDiv).toggleClass("rumbox-light");
//        }
//    
//        if  (on == "true") {
//            $(this).addClass("btn-danger");
//            $(this).html("OFF");
//            on ="false";
//        }
//        else {
//            $(this).removeClass("btn-danger");
//            $(this).html("ON");
//            on ="true";
//        }   
//    });
    
//    
//



    

