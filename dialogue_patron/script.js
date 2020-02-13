var etat_jeu=2;
var indexhtml_suivant='../j4_recree/index.html';
var joueur = $.session.get('nom_joueur');


var pseudo_liste=[
    'Lui',
    'Elle',
    'Ça'
  ];
var perso_asset_liste=[
  ['SHcopain_d_enfance_12ans_',2],
  ['SHcopain_d_enfance_18ans_',1],
  ['SHgrand_mere_',0]
]; //Contient le nom d'asset des perso et le slot d'affichage à l'écran de l'image
var decors_liste=[
  ['recree_',0]
];
var dialogue_liste=[ // contient la liste des dialogues [le dialogue1[ligne de dialogue, l'index du nom(pseudo_list) de celui qui parle], le dialogue2 ...]
  [
    ['Bonjour', 0],
    ['Textecourt',1],
    ['TexteLong TexteLongTexteLong TexteLongTexteLongText LongTexteLongTexteLong TexteLongTexteLongTexteLongTexteLongTexteLong TexteLongTexteLong exteLongTexteLong',2],
    ['TextemoinslongTextemoinslongTextemoinslongTextemoinslongTextemoinslong',0],
    ['choix',0,] // si le dialogue est égal à 'choix' on va aller chercher l'affichage du choix suivant dans la liste de choix, permettant au joueur de prendre une décision. Le 0 n'a pas d'importance
  ],
  [
    ['Début du texte 2',1],
    ['Fin du texte 2',0],
    ['choix',1]
  ]
];
var choix_liste = [ //contient plusieurs groupes de choix. Chaque choix est composé d'une phrase et de l'index du dialogue qu'il appelle.
  [
    ['oui',1],
    ['non',1],
    ['peut-etre',0]
  ],
  [
    ['da',0],
    ['nee',1],
    ['poporotski',0]
  ]
];



function load_speak(id_sprite) {
  $(id_sprite).animateSprite({
  fps: 5,
  animations: {
      speak: [7, 8, 9, 10, 11, 12, 13]
  },
  loop: true,
  });
  //$(id_sprite).animateSprite('stop');
  $(id_sprite).animateSprite('restart');
}
function load_blink(id_sprite) {
  $(id_sprite).animateSprite({
  fps: 30,
  animations: {
      blink: [0, 1, 2, 3, 4, 5, 6]
  },
  loop: true,
  });
  //$(id_sprite).animateSprite('stop');
}

function play_speak(id_sprite) {
  $(id_sprite).animateSprite('play','speak');
}
function play_blink(id_sprite) {
  $(id_sprite).animateSprite('play','blink');
}

function stop_anim(id_sprite) {
  $(id_sprite).animateSprite('stop');
}







var dialogue_statut=1; // 1 le dialogue est en cours, 0 le dialogue est terminé
var dialogue_index=0; //index du dialogue
var dialogue_ligne=1; //index de la ligne de texte du dialogue
var choix_index; // index du choix proposé


///////////////////////////////////////////////FONCTIONS/////////////////////////////////////////////////////
var intervalId;


/*function blink_anim_f() {
  blink_anim_interv = setInterval(function() {
    $('#emplacement_'+perso_asset_liste[dialogue_liste[dialogue_index][dialogue_ligne][1]][1]).animateSprite({
      fps: 5,
      animations: {
        blink: [0, 1, 2, 3, 4, 5, 6],
      },
      loop: false,
      complete: function(){}
    });
  } , 1000);
}*/

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


//clearInterval();
upload_environnement(0); //charge le premier décors de la liste
print_personnage(dialogue_index,0);
//blink_anim_f();
print_ligne_dialogue(dialogue_index,0);//appelle la première ligne du premier dialogue à s'afficher sur le html

$('#boite_de_dialogue').on('click',function(){
    if ($('#dialogue').html().length < dialogue_liste[dialogue_index][dialogue_ligne-1][0].length) { //permet d'accelerer le dialogue si il n'est pas fini
        if ( perso_asset_liste[dialogue_liste[dialogue_index][dialogue_ligne][1]][0] != '') {
            //$('#emplacement_'+perso_asset_liste[dialogue_liste[dialogue_index][dialogue_ligne][1]][1]).animateSprite('stop');
            //blink_anim_f();
            stop_anim('#emplacement_'+perso_asset_liste[dialogue_liste[dialogue_index][dialogue_ligne-1][1]][1]);
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
          document.location.href = indexhtml_suivant;

        }
        else if(dialogue_ligne<dialogue_liste[dialogue_index].length){
            print_personnage(dialogue_index,dialogue_ligne);
            print_ligne_dialogue(dialogue_index,dialogue_ligne);//$('#dialogue').html(dialogue_liste[dialogue_index][dialogue_ligne][0]);
            dialogue_ligne ++;
        }
    }
})
