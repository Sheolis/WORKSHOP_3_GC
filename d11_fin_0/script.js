$(document).ready(function(){
    $('video').on('ended',function(){
      $('video').addClass('hide');
      $('#fin').removeClass('hide');
      setTimeout(function(){
        $("body").fadeOut(1000,function(){
          document.location.href = 'credit.html';
        });
      }, 7000);
    });
  });
