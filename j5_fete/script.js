
var victoire = 0;
document.getElementById("button").style.visibility ="hidden";

function allowDrop(ev) {
  ev.preventDefault();

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  objet_deplace=ev.target.id;
}


var count = 20;

var fenetre = window.setInterval(function(){
  count --;

  $("#chrono").html('Temps Restant :'+count);

  if (count <= 0 ){
    window.clearInterval(fenetre);
   var score=$.session.get('score');
   score= parseInt(score) - 2;
   if (score>=1) {
     $.session.set('etat_jeu',2);
   }
   else if (score<2 && score>=(-2)) {
     $.session.set('etat_jeu',1);
   }
   else {
     $.session.set('etat_jeu',0);
   }
   $.session.set('score',score);
   $("body").fadeOut(1000,function(){
     document.location.href = '../d4_dame1/indexD.html';
   });
  }

},1000)


function drop(ev) {
	ev.preventDefault();
  	if (ev.target.id==(objet_deplace[0]+"_bac")) {
  		$('#'+objet_deplace).remove();
  		victoire ++ ;
  		if (victoire == 9){
        var score=$.session.get('score');
       score= 1 + parseInt(score);
       if (score>=1) {
         $.session.set('etat_jeu',2);
       }
       else if (score<2 && score>=(-2)) {
         $.session.set('etat_jeu',1);
       }
       else {
         $.session.set('etat_jeu',0);
       }
       $.session.set('score',score);
       $("body").fadeOut(1000,function(){
         document.location.href = '../d4_dame1/indexV.html';
       });
  		}
	}
}
