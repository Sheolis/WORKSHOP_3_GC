var qte_txt=$('#qte_txt').html();
var id_txt;
var txt=1;

$('#dialogue').on('click',function(){
  if(txt<qte_txt) {
      id_txt='txt_'+txt;
      $('#'+id_txt).addClass("hide");
      txt++;
      id_txt='txt_'+txt;
      $('#'+id_txt).removeClass("hide");
  }
})
