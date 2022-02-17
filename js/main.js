//  Au chargement de la page, changez la couleur de fond de la page index.html
$(function($){
  $('body').css('background-color', 'green');
  $('div').css('background-color', 'pink');
});

$(document).ready(function(){

$("body").css("background-color", "white");

});

//  Au chargement de la page, insérez un <li>Lorem</li> à la fin de la liste 1.
$(document).ready(function(){
  $("button").click(function(){
    $("#langages").append('<li><a href="#">Lorem</a></li>');
  });
});


$(document).ready(function(){

  $("#liste1").append("<li>Lorem</li>");
    
});

//  Au clic sur le bouton 1, supprimez le dernier <li> dans la liste 1.

$(function() {
  $("#btn1").click( function()
       {
        // alert('button clicked');
         $('#liste1 li:last-child').remove(); 
       }
  );
});


$(document).ready(function(){

   $("#btn1").click(function() {
   
    $("#liste1 li:nth-child(4)").remove();

   });
      
  });


//  Au clic sur le bouton 2, repliez la liste 2.

$(function() {
  $("#btn2").click( function()
       {
         //alert('button clicked');
  
         $('#liste2').click(function(){
          $('#a').slideUp();
          $('#b').slideUp(1000);
          $('#c').slideUp('slow');
          $('#d').slideUp('slow', function(){
              console.log('Élément #d est plié');
          });
      });


       }
  );
});



$(document).ready(function(){

    $("#btn2").click(function() {
    
     $("#liste2").hide();
 
    });
       
   });


//  Au clic sur le bouton 3, ajoutez une classe CSS au bouton 1 pour qu'ilrécupère une marge supérieure supplémentaire.
$(function() {
  $("#btn3").click( function()
       {
        // alert('button clicked');
          $("#btn1").addClass("important blue");
          $("#btn1").css("margin", "2rem");
       }
  );
});



$(document).ready(function(){

    $("#btn3").click(function() {
    
     $("#btn1").css("margin", "2rem");
     console.log("hello")
 
    });
       
   });


// Au clic sur le bouton 4, changez de classe CSS pour qu'il change de couleur.

$(function() {
  $("#btn4").click( function()
       {
        // alert('button clicked');
          $("#btn1").addClass("important blue");
          $("#btn1").css("color","black");
       }
  );
});


$(document).ready(function(){

    $("#btn4").click(function() {
    
    $("#btn4").css("color","red");
     
 
    });
       
   });



// Au clic sur le bouton 5, chargez l'image "background.jpg" en image de fondsur la section #section-1
$(function() {
  $("#btn5").click( function()
       {
        // alert('button clicked');
       }
  );
});



$(document).ready(function(){

    $("#btn5").click(function() {
        
        var imageUrl = "./img/background.jpg"
    
    $("#section-1").css("background-image","url("+ imageUrl+")");
     
 
    });
       
   });


   // Au survol du bouton 6, changez la couleur de tous les boutons en vert.

   $(function() {
    $("#btn6").hover( function()
         {
            $(".btn-primary").css("color","green");
         }
    );
  });
 //le background des buttons reste bleu, mais le texte
 //des buttons change en vert


   $(document).ready(function(){

    $("#btn6").on({

        mouseenter: function(){
            $("#btn6").css("background", "green");
        },

 
    
    mouseleave: function() {
        
    
        $("#btn6").css("background", "yellow");
      
 
    },
       
   });
});




// Annulez le clic sur le bouton 7 et changez sa couleur lors d'un double clic.

$("#btn7").click(function(){
  $("#btn7").off("click");
  $(this).css('color','black');
});
//c'est le texte du btn qui change de couleur

var timesClicked = 0;
$("#btn7").bind( "click", function( event ) {
  timesClicked++;
   
  
  if ( timesClicked == 2 ) {
    $( this ).unbind( event );
    $( this ).css("background", "red");
  }
});





//  Au clic sur le bouton 8, faites disparaître/apparaitre tous les <h2> de la page.
$("#btn8").click(function(){
  //$("h2").show();
  $("h2").hide();
});



$(document).ready(function(){

    $("#btn8").click(function() {
    
     $("h2").hide();
 
    });
       
   });




//    Plugins&DOM

// Utilisez Bootstrap pour créer un accordéon dans la première <div> de la#section-2.


// Sur le site www.bxslider.com, suivez les directives pour intégrer un sliderdans la seconde <div> de la #section-2.


$(document).ready(function(){
    $('.slider').bxSlider();
  });


// A l'aide de jQuery UI, rendez la liste 3 sélectionnable
$( function() {
  $( "#liste3" ).selectable();
} );


$(document).ready(function(){
    $("#liste3").selectable();
    console.log("hello");
  });
 


//   ADVANCED DOM

//  Dans la #section-2, affichez une horloge dynamique au format suivant :HH:MM:SS où HH = heures, MM = minutes et SS = secondes, en nombres.
function refresh(){
  var t = 1000; // rafraîchissement en millisecondes
  setTimeout('showDate()',t)
}

function showDate() {
  var date = new Date()
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  if( h < 10 ){ h = '0' + h; }
  if( m < 10 ){ m = '0' + m; }
  if( s < 10 ){ s = '0' + s; }
  var time = h + ':' + m + ':' + s
  document.getElementById('horloge').innerHTML = time;
  refresh();
}



//variable qui permet d'identifier le timer afin de pouvoir l'arrêter
var timerID = null;
var timerActif = false;

function stopClock() {
  if (timerActif) clearTimeout(timerID);
  timerActif = false;
}

function startClock() {
  stopClock();
  showtime();
}

function showtime() {
  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  heure = (hour > 9? hour:"0" + hour);
  heure += ":" + (min > 9? min:"0" + min);
  heure += ":" + (sec > 9? sec:"0" + sec);
  document.Clock.Horloge.value = heure;
  //pour mettre l'horloge dans la barre de status :
  //window.status = heure;
  timerID = setTimeout("showtime()",1000);
  timerActif = true;
}

//  A l'aide du formulaire #formulaire-title, utilisez javascript ou jQuery pourremplacer le contenu du <h1> de la page par le contenu du champ textedu formulaire.

const title = document.getElementById("titre");
const change = document.getElementById("changer");
const titre = document.querySelector(".titl");
change.addEventListener("click",changeTitle);

function changeTitle() {
    console.log("hey")
titre.innerHTML = title.value;

}





