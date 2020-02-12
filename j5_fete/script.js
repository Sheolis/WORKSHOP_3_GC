function allowDrop(ev) {
  ev.preventDefault();

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  objet_deplace=ev.target.id;
}





function drop(ev) {
	ev.preventDefault();
  	if (ev.target.id==('poubelle')) {
  		$('#'+objet_deplace).remove();
	}

}
