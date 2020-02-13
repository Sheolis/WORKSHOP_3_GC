var etat_jeu=2;
var indexhtml_suivant='../j4_recree/index.html';
var joueur = $.session.get('nom_joueur');


var pseudo_liste=[
    'Lui',
    'Elle',
    'Ça'
  ];
var perso_asset_liste=[
  ['docteurspeak_',1],
  ['docteurspeak_',0],
  ['docteurspeak_',2]
]; //Contient le nom d'asset des perso et le slot d'affichage à l'écran de l'image
var decors_liste=['recree_'];
var dialogue_liste=[ // contient la liste des dialogues [le dialogue1[ligne de dialogue, l'index du nom(pseudo_list) de celui qui parle], le dialogue2 ...]
  [
    ['Bonjour', 0],
    ['Textecourt',1],
    ['TexteLong TexteLongTexteLong TexteLongTexteLongText LongTexteLongTexteLong TexteLongTexteLongTexteLongTexteLongTexteLong TexteLongTexteLong exteLongTexteLong',2],
    ['TextemoinslongTextemoinslongTextemoinslongTextemoinslongTextemoinslong',0],
    ['choix',0] // si le dialogue est égal à 'choix' on va aller chercher l'affichage du choix suivant dans la liste de choix, permettant au joueur de prendre une décision. Le 0 n'a pas d'importance
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

var dialogue_statut=1; // 1 le dialogue est en cours, 0 le dialogue est terminé
var dialogue_index=0; //index du dialogue
var dialogue_ligne=1; //index de la ligne de texte du dialogue
var choix_index; // index du choix proposé


///////////////////////////////////////////////FONCTIONS/////////////////////////////////////////////////////
var intervalId;

function print_ligne_dialogue(dialogue_index,dialogue_ligne) {
    $('#dialogue').html('');
    var i = 0;
    var texte=dialogue_liste[dialogue_index][dialogue_ligne][0];
    var index_perso = dialogue_liste[dialogue_index][dialogue_ligne][1];
    $('#emplacement_'+perso_asset_liste[index_perso][1]).animateSprite({
    fps: 5,
    animations: {
        speak: [0, 1, 2],
    },
    loop: true,
    });
    intervalId = window.setInterval(function() {
        $('#dialogue').append(texte.charAt(i++));
        if (i > texte.length)
            window.clearInterval(intervalId);
           // $('#emplacement_'+perso_asset_liste[index_perso][1]).animateSprite('stop');
    }, 30);
  }
function upload_environnement(index_environnement) {
  $("#environnement").empty();
  $("#environnement").append('<img id="env_001" class="" src="../_graph/img/decors/'+decors_liste[index_environnement]+etat_jeu+'.png" alt="fond violet."/>');
}

function clean_emplacements_perso(){
    for (i=0; i<3; i++) $('#emplacement_'+i).css("background-image","");
    }

function print_personnage(i, l) { //fonction chargée de l'update de l'image à charger et du nom à afficher
  var index_perso = dialogue_liste[i][l][1];
  $('#nom_du_locuteur').html(pseudo_liste[index_perso]);
  if (perso_asset_liste.length>0) {
    clean_emplacements_perso();
    $('#emplacement_'+perso_asset_liste[index_perso][1]).css("background-image",'url(../_graph/img/perso/'+perso_asset_liste[index_perso][0]+etat_jeu+'.png)');
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
print_ligne_dialogue(dialogue_index,0);//appelle la première ligne du premier dialogue à s'afficher sur le html

$('#boite_de_dialogue').on('click',function(){
    if ($('#dialogue').html().length < dialogue_liste[dialogue_index][dialogue_ligne-1][0].length) { //permet d'accelerer le dialogue si il n'est pas fini
        window.clearInterval(intervalId);
        $('#emplacement_'+perso_asset_liste[dialogue_liste[dialogue_index][dialogue_ligne][1]][1]).animateSprite('stop');
        $('#dialogue').html('');
        $('#dialogue').html(dialogue_liste[dialogue_index][dialogue_ligne-1][0]);
    }
    else {
        if (dialogue_liste[dialogue_index][dialogue_ligne][0]=='choix'){
            choix_index=dialogue_liste[dialogue_index][dialogue_ligne][1];
            f_choix(choix_index);
        }
        else if(dialogue_liste[dialogue_index][dialogue_ligne][0]=='decors') {
          upload_environnement(dialogue_liste[dialogue_index][dialogue_ligne][1]);
          dialogue_index ++;
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
