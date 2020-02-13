
var victoire = 0;
document.getElementById("button").style.visibility ="hidden";

function allowDrop(ev) {
  ev.preventDefault();

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  objet_deplace=ev.target.id;
}





function drop(ev) {
	ev.preventDefault();
  	if (ev.target.id==(objet_deplace[0]+"_bac")) {
  		$('#'+objet_deplace).remove();
  		victoire ++ ;
  		if (victoire == 9){
  			document.getElementById("button").style.visibility = "visible";
  		}
	}
}
