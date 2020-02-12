var objet_deplace;

function allowDrop(ev) {
  ev.preventDefault();

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  objet_deplace=ev.target.id;
}





function drop(ev) {
	ev.preventDefault();
  	if (ev.target.id==(objet_deplace+'_bloc')) {
		var data = ev.dataTransfer.getData("text");
	  	ev.target.appendChild(document.getElementById(data));
	}

}
