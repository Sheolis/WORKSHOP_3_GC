var etat_jeu=2;
var indexhtml_suivant='../j9_dame2/index.html';
var joueur = $.session.get('nom_joueur');


var pseudo_liste=[
    '',
    'Alan',
    ''
  ];
var perso_asset_liste=[
  ['', 0],
  ['enfant_8ans_', 1],
  ['enfant_8ans_', 1]


]; //Contient le nom d'asset des perso et le slot d'affichage à l'écran de l'image
var decors_liste=[['parc_', 0]];
var dialogue_liste=[ // contient la liste des dialogues [le dialogue1[ligne de dialogue, l'index du nom(pseudo_list) de celui qui parle], le dialogue2 ...]
  [
    ['Allez, un dernier jeu, s’il te plaît !', 1],
    ['Vous regardez votre fils, ce dernier tenant votre main, implorant.', 2],
    ['choix', 0] // si le dialogue est égal à 'choix' on va aller chercher l'affichage du choix suivant dans la liste de choix, permettant au joueur de prendre une décision. Le 0 n'a pas d'importance
  ],
// transition background camion de déménagement
  [
    ['Trop bien ! Viens vite !', 1],
    ['Il vous entraîne vers les jeux en sautillant.', 2],
    ['Vous jouez pendant une dizaine de minutes, avant qu’Alan ne s’arrête en vous regardant.', 0],
    ['Aujourd’hui la maîtresse nous a demandé ce qu’on voulait faire plus tard comme métier', 1],
    ['choix', 3]
  ],
  [
    ['S’il te plaît…', 1],
    ['Il vous regarde avec ses grands yeux et gonfle ses joues, prenant un air de chat botté.', 2],
    ['choix', 1]
  ],
  [
    ['Ha ha ! Ma technique secrète fonctionne encore !', 1],
    ['Vous souriez et commencez à marcher vers les jeux.', 2],
    ['choix', 2]
  ],
  [
    ['Vous jouez pendant une dizaine de minutes, avant qu’Alan ne s’arrête en vous regardant.', 0],
    ['Aujourd’hui la maîtresse nous a demandé ce qu’on voulait faire plus tard comme métier', 1],
    ['choix', 3]
  ],
  [
    ['Astronaute ou docteur.', 1],
    ['choix', 4]
  ],
  [
    ['Il hoche la tête énergiquement.', 0],
    ['Oui, je vais aller sur la lune pour trouver des extraterrestres !', 1],
    ['choix', 7]
  ],
  [
    ['Je sais pas, qu’est-ce que ça aime, les extraterrestres ?', 1],
    ['choix', 8]
  ],
  [
    ['Je ramènerais des feutres dans la fusée !', 1],
    ['choix', 9]
  ],
  [
    ['Il réfléchit quelques instants avant de s’exclamer.', 2],
    ['Tu viendras avec moi ! Comme ça tu leur joueras du violon !', 1],
    ['choix', 9]
  ],
  [
    ['Maintenant le pourquoi du Docteur', 2],
    ['choix', 6]
  ],
  [
    ['Oui, médecin pour les gens !', 1],
    ['choix', 10]
  ],
  [
    ['Alan se penche vers vous avec un air sérieux.', 2],
    ['Bin, on peut être médecin pour pleins de choses, les gens ou les animaux ! Toi t’es médecin pour les plantes.', 1],
    ['Vous riez, en lui mettant la main sur la tête.', 2],
    ['choix', 11]
  ],
  [
    ['Vous regardez l\'heure. Indiquant qu\'il est temps de retourner à la maison.', 2],
    ['choix', 12]
  ],
  [
    ['Oui !', 1],
    ['La main dans la sienne, vous sortez du parc pour rentrer chez vous.', 2],
    ['fin', 0]
  ],
  [
    ['Oui, médecin pour les gens !', 1],
    ['choix', 13]
  ],
  [
    ['Alan se penche vers vous avec un air sérieux.', 2],
    ['Bin, on peut être médecin pour pleins de choses, les gens ou les animaux ! Toi t’es médecin pour les plantes.', 1],
    ['Vous riez, en lui mettant la main sur la tête.', 2],
    ['choix', 14]
  ],
  [
    ['Maintenant le pourquoi de l\'astronaute', 2],
    ['choix', 5]
  ],
  [
    ['Il hoche la tête énergiquement.', 2],
    ['Oui, je vais aller sur la lune pour trouver des extraterrestres !', 1],
    ['choix', 16]
  ],
  [
    ['Je sais pas, qu’est-ce que ça aime, les extraterrestres ?', 1],
    ['choix', 17]
  ],
  [
    ['Je ramènerais des feutres dans la fusée !', 1],
    ['choix', 18]
  ],
  [
    ['Il réfléchit quelques instants avant de s’exclamer.', 2],
    ['Tu viendras avec moi ! Comme ça tu leur joueras du violon !', 1],
    ['choix', 18]
  ],
];
var choix_liste = [ //contient plusieurs groupes de choix. Chaque choix est composé d'une phrase et de l'index du dialogue qu'il appelle.
  [
    ['Un dernier et on rentre, Maman nous attend.', 1],
    ['Pas la peine de faire cette tête, ça ne fonctionne plus.', 2]
  ],
  [
    ['Bon, un dernier et c’est tout.', 3],
    ['Ok, ok, t’as gagné.', 3]
  ],
  [
    ['Allez, avant que je ne change d’avis.', 4],
  ],
  [
    ['Ah, qu’est-ce que tu lui as répondu ?', 5],
  ],
  [
    ['Astronaute ?', 6],
    ['Docteur ?', 15]
  ],
  [
    ['Astronaute ?', 18],
  ],
  [
    ['Docteur ?', 11]
  ],
  [
    ['Et qu’est-ce que tu vas faire quand tu les auras trouvés ?', 7]
  ],
  [
    ['Le dessin ?', 8],
    ['La musique ?', 9]
  ],
  [
    ['Marché conclu.', 10]
  ],
  [
    ['Comment ça pour les gens ?', 12]
  ],
  [
    ['C’est pas faux.', 13]
  ],
  [
    ['Bon, on y va ?', 14]
  ],
  [
    ['Comment ça pour les gens ?', 16]
  ],
  [
    ['C’est pas faux.', 17]
  ],
  [
    ['Astronaute ?', 18],
  ],
  [
    ['Et qu’est-ce que tu vas faire quand tu les auras trouvés ?', 19]
  ],
  [
    ['Le dessin ?', 20],
    ['La musique ?', 21]
  ],
  [
    ['Marché conclu.', 13]
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
          document.location.href = indexhtml_suivant;

        }
        else if(dialogue_ligne<dialogue_liste[dialogue_index].length){
            print_personnage(dialogue_index,dialogue_ligne);
            print_ligne_dialogue(dialogue_index,dialogue_ligne);//$('#dialogue').html(dialogue_liste[dialogue_index][dialogue_ligne][0]);
            dialogue_ligne ++;
        }
    }
})
