$('#start').on('click', function() {
  $.session.set('nom_joueur',$('#nom_joueur').val());
  document.location.href = 'dialogue_00/index.html';
})
