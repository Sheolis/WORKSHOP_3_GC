var etat_jeu=2;
var indexhtml_suivant='../j10_avantFin/index.html';
var joueur = $.session.get('nom_joueur');


var pseudo_liste=[
    '',
    'Swann',
    'Sam',
    'Alan',
    '',
    '',
    ''
  ];
var perso_asset_liste=[
  ['', 0],
  ['grand_mere_', 0],
  ['petit_fils_', 1],
  ['petit_fils_38ans_', 2],
  ['grand_mere_', 0],
  ['petit_fils_', 1],
  ['petit_fils_38ans_', 2]

]; //Contient le nom d'asset des perso et le slot d'affichage à l'écran de l'image
var decors_liste=[['bureau_', 0], ['salon_70_', 1]];
var dialogue_liste=[ // contient la liste des dialogues [le dialogue1[ligne de dialogue, l'index du nom(pseudo_list) de celui qui parle], le dialogue2 ...]
  [
    ['Vous regardez dehors, et remarquez à quel point le monde a changé depuis votre emménagement, il y a maintenant plus de 40 ans. ', 0],
    ['La voix de votre femme vient vous sortir de vos pensées.', 0],
    ['Alan et Sam sont arrivés, ils attendent dans le salon. Donc sort de ta grotte !', 1],
    ['decors', 1] // si le dialogue est égal à 'choix' on va aller chercher l'affichage du choix suivant dans la liste de choix, permettant au joueur de prendre une décision. Le 0 n'a pas d'importance
  ],
  [
    ['Vous descendez les rejoindre et votre petit fils court dans votre direction avant de sauter dans vos bras, montrant toute l’affection qu\'il vous porte. .', 0],
    ['choix', 0]
  ],
  [
    ['Tu m\'as manqué !', 2],
    ['choix', 1]
  ],
  [
    ['Je suis devenu plus fort depuis la dernière fois hein ?', 2],
    ['choix', 2]
  ],
  [
    ['Alan s’approche de vous et vous prend dans ses bras à son tour.', 6],
    ['Bonjour, comment vas-tu ?', 3],
    ['choix', 3]
  ],
  [
    ['Celui pour le journal local ?', 3],
    ['choix', 4]
  ],
  [
    ['Au même moment la voix de Swann se fait entendre depuis la cuisine.', 0],
    ['Alan, peux-tu venir m’aider ?', 1],
    ['J’arrive Maman.', 3],
    ['Il se dirige vers la cuisine.', 0],
    ['Sam se tourne de nouveau vers vous.', 5],
    ['Maman m\'as dit que c\'était ton anniversaire demain, tu vas avoir 70 ans ! C\'est beaucoup quand même.', 2],
    ['choix', 5]
  ],
  [
    ['Et moi je viens d\'avoir 5 ans, je suis presque un adulte.', 2],
    ['choix', 6]
  ],
  [
    ['J\'irais leur dire ça car ils continuent de dire que je suis un enfant.', 2],
    ['Vous riez.', 5],
    ['choix', 7]
  ],
  [
    ['Ah bon, c\'est quoi la sagesse ?', 2],
    ['choix', 8]
  ],
  [
    ['J\'ai pas tout compris.', 2],
    ['choix', 9]
  ],
  [
    ['Sam se dirige vers une ancienne boîte de jeu sur une étagère de votre salon, avant de la prendre dans ses mains, un air curieux sur son visage.', 0],
    ['Qu’est-ce que c’est ?', 2],
    ['choix', 10]
  ],
  [
    ['Trop bien, tu veux bien m\'apprendre et jouer avec moi ?', 5],
    ['choix', 11]
  ],
  [
    ['Vous installez le jeu, et commencez à expliquer les règles à votre petit-fils. Une fois le système compris, vous commencez votre réelle première partie. ', 5],
    ['fin', 0]
  ]
];
var choix_liste = [ //contient plusieurs groupes de choix. Chaque choix est composé d'une phrase et de l'index du dialogue qu'il appelle.
  [
    ['Qu\'est ce qui me vaut un si bel accueil ?', 2],
    ['Pas si fort, tu vas me casser haha.', 3]
  ],
  [
    ['C\'est vrai que ça fait un petit moment qu\'on ne s\'est pas vu.', 4]
  ],
  [
    ['Beaucoup trop fort pour moi, en effet.', 4]
  ],
  [
    ['Oh ça va, je finissais mon article sur les plantes médicinales.', 5]
  ],
  [
    ['Tout à fait.', 6]
  ],
  [
    ['Ah c\'est vrai que je ne suis plus tout jeune.', 7],
    ['Oui, mais c\'est l\'âge de la sagesse.', 9]
  ],
  [
    ['Déjà plus adulte que ton papa', 8]
    ['Déjà plus adulte que ta maman', 8]
  ],
  [
    ['Tu vas me faire faire taper sur les doigts Sam.', 11]
  ],
  [
    ['C\'est prendre du recul, faire preuve de patience ou encore de discernement en s\'appuyant sur nos expériences passées.', 10]
  ],
  [
    ['Haha, tu demanderas à ton père ou à ta mère demain.', 11]
  ],
  [
    ['C\'est un jeu de dames, et c\'est celui qui appartenait à mon grand-père.', 12]
  ],
  [
    ['Bien sûr.', 13]
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
    if ( perso_asset_liste[index_perso][0] != '') {
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
        //$('#emplacement_'+perso_asset_liste[dialogue_liste[dialogue_index][dialogue_ligne][1]][1]).animateSprite('stop');
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
          $("body").fadeOut(1000,function(){
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
