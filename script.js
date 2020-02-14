$('#start').on('click', function() {
  $.session.set('etat_jeu',1);
  $.session.set('score',0);
  $.session.set('nom_joueur',$('#nom_joueur').val());
  $("body").fadeOut(1000,function(){
    document.location.href = 'd0_naissance/index.html';
  });
})
