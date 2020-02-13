$('#start').on('click', function() {
  $.session.set('nom_joueur',$('#nom_joueur').val());
  $("body").fadeOut(1000,function(){
    document.location.href = 'dialogue_00/index.html';
  });
})
