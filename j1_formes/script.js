var victoire = 0;

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
      victoire ++;
      if (victoire==4) {
        $("body").fadeOut(1000,function(){
          document.location.href = '../d1_formes/index.html';
        });
      }
	}

}
