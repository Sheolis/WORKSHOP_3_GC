var etat_jeu=$.session.get('etat_jeu');
var indexhtml_suivant='../d11_fin_'+etat_jeu+'/index.html';


var joueur = $.session.get('nom_joueur');


var pseudo_liste=[
    '',
    'Sam',
    ''
  ];
var perso_asset_liste=[
  ['', 0],
  ['petit_fils_', 1],
  ['petit_fils_', 1]
]; //Contient le nom d'asset des perso et le slot d'affichage à l'écran de l'image
var decors_liste=[['plateau_dames_', 0]];
var dialogue_liste=[ // contient la liste des dialogues [le dialogue1[ligne de dialogue, l'index du nom(pseudo_list) de celui qui parle], le dialogue2 ...]
  [
    ['Je t\'ai battu, je suis trop fort !', 1],
    ['choix', 0]
  ],
  [
    ['Papa a jamais été très bon aux jeux, je le bats déjà aux petits chevaux.', 1],
    ['Vous rigolez ensemble avant de reprendre une nouvelle partie.', 2],
    ['Après quelques parties, vous vous rappelez soudainement que vous deviez effectuer des courses pour les préparatifs de la fête.', 2],
    ['choix', 1]
  ],
  [
    ['Normal, j\'ai un très bon professeur !', 1],
    ['La phrase de votre petit-fils vous touche et vous fait esquisser un sourire.', 2],
    ['Vous continuez de jouer ensemble.', 2],
    ['Après quelques parties, vous vous rappelez soudainement que vous deviez effectuer des courses pour les préparatifs de la fête.', 2],
    ['choix', 1]
  ],
  [
    ['Oh ok, mais quand tu reviens, on rejoue aux dames !', 1],
    ['choix', 2] // si le dialogue est égal à 'choix' on va aller chercher l'affichage du choix suivant dans la liste de choix, permettant au joueur de prendre une décision. Le 0 n'a pas d'importance
  ],
  [
    ['Vous quittez votre domicile en direction du magasin.', 0],
    ['fin', 0] // si le dialogue est égal à 'choix' on va aller chercher l'affichage du choix suivant dans la liste de choix, permettant au joueur de prendre une décision. Le 0 n'a pas d'importance
  ]
];
var choix_liste = [ //contient plusieurs groupes de choix. Chaque choix est composé d'une phrase et de l'index du dialogue qu'il appelle.
  [
    ['Déjà plus fort que ton père',1],
    ['J\'ai rien pu faire, tu apprends très vite.',2]
  ],
  [
    ['Sam, je dois aller faire les courses c\'est important, je te laisse rejoindre Mamie ?', 3]
  ],
  [
    ['D\'accord, pas de soucis.', 4]
  ]
];

var dialogue_statut=1; // 1 le dialogue est en cours, 0 le dialogue est terminé
var dialogue_index=0; //index du dialogue
var dialogue_ligne=1; //index de la ligne de texte du dialogue
var choix_index; // index du choix proposé

///////////////////////////////////////////////FONCTIONS/////////////////////////////////////////////////////
var intervalId;


function load_speak(id_sprite) {
  $(id_sprite).animateSprite({
  fps: 5,
  animations: {
      speak: [7, 8, 9, 10, 11, 12, 13]
  },
  loop: true,
  });
  $(id_sprite).animateSprite('restart');
}

function stop_anim(id_sprite) {
  $(id_sprite).animateSprite('stop');
}

function print_ligne_dialogue(dialogue_index,dialogue_ligne) {
    //clearInterval(blink_anim_interv);
    $('#dialogue').html('');
    var i = 0;
    var texte=dialogue_liste[dialogue_index][dialogue_ligne][0];
    var index_perso = dialogue_liste[dialogue_index][dialogue_ligne][1];
    if ( perso_asset_liste[index_perso][0] != '') {
      load_speak('#emplacement_'+perso_asset_liste[index_perso][1]);
    }
    intervalId = window.setInterval(function() {
        $('#dialogue').append(texte.charAt(i++));
        if (i > texte.length)
            window.clearInterval(intervalId);
            //stop_anim('#emplacement_'+perso_asset_liste[index_perso][1]);
            //blink_anim_f();
           // $('#emplacement_'+perso_asset_liste[index_perso][1]).animateSprite('stop');

    }, 30);
  }
function upload_environnement(i) {
  $("#environnement").empty();
  $("#environnement").append('<img id="env_001" class="" src="../_graph/img/decors/'+decors_liste[i][0]+etat_jeu+'.png" alt="fond violet."/>');
}

function clean_emplacements_perso(){
    for (i=0; i<3; i++) $('#emplacement_'+i).css("background-image","");
    }

function print_personnage(i, l) { //fonction chargée de l'update de l'image à charger et du nom à afficher
  var index_perso = dialogue_liste[i][l][1];
  $('#nom_du_locuteur').html(pseudo_liste[index_perso]);
  clean_emplacements_perso();
  if (perso_asset_liste[index_perso][0]!='') {
    $('#emplacement_'+perso_asset_liste[index_perso][1]).css("background-image",'url(../_graph/img/perso/'+perso_asset_liste[index_perso][0]+etat_jeu+'.png)');
    load_speak('#emplacement_'+perso_asset_liste[dialogue_liste[i][l][1]][1]);
  }
}


function f_choix(choix_index) { //fonction_choix
    for (var i = 0; i < choix_liste[choix_index].length; i++) {
        $( "#boite_choix_multiples" ).append( "<p id=\"choix_"+i+"\" class=\"choix\">"+choix_liste[choix_index][i][0]+"</p>" ); // !! code valable pour un nombre de choix inférieur ou égal à 10
    }
    $('#nom_du_locuteur').addClass('hide');
    $('#boite_de_dialogue').addClass('hide');
    $('#relire_dialogue').removeClass('hide');

    $('.choix').on('click', function() {
        $( ".choix" ).remove();
        dialogue_index=choix_liste[choix_index][this.id[6]][1];//on reccup l'index du dialogue de réponse au choix effectué
        print_personnage(dialogue_index,0); //début du dialogue
        print_ligne_dialogue(dialogue_index,0);
        dialogue_ligne=1;
        $('#boite_de_dialogue').removeClass('hide');
        $('#nom_du_locuteur').removeClass('hide');
        $('#relire_dialogue').addClass('hide');
    })

    $('#relire_dialogue').on('click', function() {
        window.clearInterval(intervalId);
        $( ".choix" ).remove();
        $('#boite_de_dialogue').removeClass('hide');
        $('#nom_du_locuteur').removeClass('hide');
        $('#relire_dialogue').addClass('hide');
        print_ligne_dialogue(dialogue_index,dialogue_ligne-1);//$('#dialogue').html(dialogue_liste[dialogue_index][dialogue_ligne-1][0]);
    })


}



///////////////////////////////////////////////MAIN/////////////////////////////////////////////////////



upload_environnement(0); //charge le premier décors de la liste
print_personnage(dialogue_index,0);
print_ligne_dialogue(dialogue_index,0);//appelle la première ligne du premier dialogue à s'afficher sur le html

$('#boite_de_dialogue').on('click',function(){
    if ($('#dialogue').html().length < dialogue_liste[dialogue_index][dialogue_ligne-1][0].length) { //permet d'accelerer le dialogue si il n'est pas fini
      if (dialogue_liste[dialogue_index][dialogue_ligne][0]!="fin" && dialogue_liste[dialogue_index][dialogue_ligne][0]!="choix"){
          if ( perso_asset_liste[dialogue_liste[dialogue_index][dialogue_ligne][1]][0] != '') {
              stop_anim('#emplacement_'+perso_asset_liste[dialogue_liste[dialogue_index][dialogue_ligne-1][1]][1]);
          }
      }
        window.clearInterval(intervalId);
        $('#dialogue').html('');
        $('#dialogue').html(dialogue_liste[dialogue_index][dialogue_ligne-1][0]);
    }
    else {
        if (dialogue_liste[dialogue_index][dialogue_ligne][0]=='choix'){
            choix_index=dialogue_liste[dialogue_index][dialogue_ligne][1];
            f_choix(choix_index);
        }
        else if(dialogue_liste[dialogue_index][dialogue_ligne][0]=='decors') {
          var index_environnement = dialogue_liste[dialogue_index][dialogue_ligne][1];
          upload_environnement(index_environnement);
          dialogue_index = decors_liste[index_environnement][1];
          print_personnage(dialogue_index,0);
          print_ligne_dialogue(dialogue_index,0);
          dialogue_ligne=1;
        }
        else if(dialogue_liste[dialogue_index][dialogue_ligne][0]=='fin') {
          $("body").fadeOut(3000,function(){
            document.location.href = indexhtml_suivant;
          });
        }
        else if(dialogue_ligne<dialogue_liste[dialogue_index].length){
            print_personnage(dialogue_index,dialogue_ligne);
            print_ligne_dialogue(dialogue_index,dialogue_ligne);//$('#dialogue').html(dialogue_liste[dialogue_index][dialogue_ligne][0]);
            dialogue_ligne ++;
        }
    }
})
