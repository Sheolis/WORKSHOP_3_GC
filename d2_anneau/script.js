var etat_jeu=2;
var indexhtml_suivant='../j3_recree/index.html';
var joueur = $.session.get('nom_joueur');


var pseudo_liste=[
    '',
    'Mère',
    'Père',
    'Valentin',
    '????',
    'Professeur',
    '',
    '',
    ''
  ];
var perso_asset_liste=[
  ['', 0],
  ['mere_45ans_', 0],
  ['homme_45ans_', 1],
  ['copain_d_enfance_12ans_', 2],
  ['copain_d_enfance_12ans_', 2],
  ['', 0],
  ['mere_45ans_', 0],
  ['homme_45ans_', 1],
  ['copain_d_enfance_12ans_', 2]
]; //Contient le nom d'asset des perso et le slot d'affichage à l'écran de l'image
var decors_liste=[['chambre_', 0], ['cuisine_', 3], ['chambre_', 6], ['cuisine_', 12], ['recree_', 14]];
var dialogue_liste=[ // contient la liste des dialogues [le dialogue1[ligne de dialogue, l'index du nom(pseudo_list) de celui qui parle], le dialogue2 ...]
  [
    [joueur+'?', 1],
    ['Qu’est-ce que tu fais ? On va manger ?', 1],
    ['choix',0] // si le dialogue est égal à 'choix' on va aller chercher l'affichage du choix suivant dans la liste de choix, permettant au joueur de prendre une décision. Le 0 n'a pas d'importance
  ],
  [
    ['Vous vous dirigez vers votre mère. Ses cheveux caressent votre visage quand elle vous prend dans ses bras.', 6],
    ['Rejoignons Papa avant qu’il ne mette le feu à la cuisine.',1],
    ['decors',1]
  ],
  [
    ['Vous ignorez votre mère, continuant à jouer.', 6],
    ['*soupir*',1],
    ['Votre mère se dirige vers vous et vous récupère délicatement dans ses bras ', 6],
    ['Tu joueras plus tard, rejoignons Papa avant qu’il ne mette le feu à la cuisine.', 1],
    ['decors',1]
  ],
  [
    ['Votre père est attablé, vous attendant.', 7],
    ['À quoi tu jouais '+joueur+' ?', 2],
    ['choix',1]
  ],
  [
    ['Les puzzles étaient totalement complétés !', 1],
    ['Votre père sourit, ravi.', 7],
    ['Génial !', 2],
    ['Vous prenez le repas, animé par les conversations de vos parents et les sons de la télévision.', 0],
    ['Une fois le repas terminé, votre mère se lève et vous récupère avant de se diriger vers la chambre.', 0],
    ['Allez, au dodo !', 1],
    ['decors',2]
  ],
  [
    ['Il vous regarde, taquin.', 7],
    ['Ah oui ? Pourquoi ça ?', 2],
    ['Les jeux seront toujours là après avoir mangé, ne t\'inquiète pas.', 1],
    ['En allant vous déposer sur la chaise haute elle donne un petit coup de hanche à son mari.  Ce dernier réagit en riant.', 0],
    ['Vous prenez le repas, animé par les conversations de vos parents et les sons de la télévision.', 0],
    ['Une fois le repas terminé, votre mère se lève et vous récupère avant de se diriger vers la chambre.', 0],
    ['Allez, au dodo !', 1],
    ['decors',2]
  ],
  [
    ['Elle vous dépose dans votre lit.', 6],
    ['Tu as besoin de quelque chose avant de dormir ?', 1],
    ['choix', 2]
  ],
  [
    ['Elle va chercher la peluche et la dépose à vos côtés.', 6],
    ['Tu as besoin de quelque chose d\'autre avant de dormir ?', 1],
    ['choix', 3]
  ],
  [
    ['Elle sourit, et vous sert dans ses bras', 6],
    ['Tu as besoin de quelque chose d\'autre avant de dormir ?', 1],
    ['choix', 4]
  ],
  [
    ['Elle va chercher la peluche et la dépose à vos côtés.', 6],
    ['Tu as besoin de quelque chose d\'autre avant de dormir ?', 1],
    ['choix', 5]
  ],
  [
    ['Elle sourit, et vous sert dans ses bras', 6],
    ['Tu as besoin de quelque chose d\'autre avant de dormir ?', 1],
    ['choix', 5]
  ],
  [
    ['Votre mère sort de la pièce quelques instants avant de revenir, son violon dans les mains. Elle s’assoit près du lit et se met à jouer, un sourire aux lèvres.', 6],
    ['decors', 3]
  ],
  [
    ['Dépêche-toi, tu vas être en retard ! Pour ton premier jour au collège en plus !', 2],
    ['Vous vous précipitez vers la porte d’entrée, le sac à l’épaule.', 0],
    ['choix', 6]
  ],
  [
    ['Vous ne voulez vraiment pas arriver en retard le premier jour...', 0],
    ['decors', 4]
  ],
  [
    ['Les professeurs ont indiqué aux élèves d’attendre les instructions pour entrer en classe. Vous observez autour de vous, un peu angoissé de ne connaître personne.', 0],
    ['Un professeur arrive à côté des élèves.', 0],
    ['En rang par deux s’il vous plaît !', 5],
    ['La file se forme et vous vous placez derrière.', 0],
    ['Salut !', 4],
    ['Un garçon se place à côté de vous, souriant.', 8],
    ['C’est ton quoi ton prénom ?', 4],
    ['choix', 7]
  ],
  [
    ['Moi c’est Valentin, on est dans la même classe.', 3],
    ['choix', 8]
  ],
  [
    ['Ha. Ha. Te moques pas, j’ai joué super tard aux jeux vidéos.', 3],
    ['choix', 9]
  ],
  [
    ['Ouais moi aussi, j’ai joué aux jeux vidéos toute la nuit.', 3],
    ['choix', 9]
  ],
  [
    ['Tu joues à quoi ?', 3],
    ['La sonnerie se fait entendre de nouveau, interrompant votre conversation.', 8],
    ['Suivez-moi, on va en cours.', 5],
    ['Après la journée d’introduction, le professeur organise une partie de balle au prisonnier pour favoriser l’intégration des élèves.', 0],
    ['Vous avez passé la journée avec Valentin, apprenant à le connaître.', 0],
    ['J\'espère qu’on sera dans la même équipe !', 3],
    ['choix', 10]
  ],
  [
    ['Ok, pas grave. Tu préfères quoi ?', 3],
    ['La sonnerie se fait entendre de nouveau, interrompant votre conversation.', 8],
    ['Suivez-moi, on va en cours.', 5],
    ['Après la journée d’introduction, le professeur organise une partie de balle au prisonnier pour favoriser l’intégration des élèves.', 0],
    ['Vous avez passé la journée avec Valentin, apprenant à le connaître.', 0],
    ['J\'espère qu’on sera dans la même équipe !', 3],
    ['choix', 10]
  ],
  [
    ['Vous espérez vraiment être fort au jeu, pour impressionner les autres', 0],
    ['fin', 0]
  ]
];
var choix_liste = [ //contient plusieurs groupes de choix. Chaque choix est composé d'une phrase et de l'index du dialogue qu'il appelle.
  [
    ['Aller vers votre maman',1],
    ['Continuer à jouer',2]
  ],
  [
    ['Aux ronds et aux cercles.', 4],
    ['Maman m’as empêché...', 5]
  ],
  [
    ['Doudou', 7],
    ['Câlin', 8],
    ['Berceuse pour s’endormir	', 11]
  ],
  [
    ['Câlin', 10],
    ['Berceuse pour s’endormir	', 11]
  ],
  [
    ['Doudou',9],
    ['Berceuse pour s’endormir	', 11]
  ],
  [
    ['Berceuse pour s’endormir	', 11]
  ],
  [
    ['J’y vais, à ce soir !', 13]
  ],
  [
    [joueur, 15]
  ],
  [
    ['Non, tu crois ?', 16],
    ['Cool. J’ai failli être en retard ce matin...', 17]
  ],
  [
    ['La même !', 18],
    ['J’aime pas trop les jeux vidéos', 19]
  ],
  [
    ['Moi aussi !', 20]
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
