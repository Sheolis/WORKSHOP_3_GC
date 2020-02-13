var etat_jeu=2;
var indexhtml_suivant='../j4_dame1/index.html';
var joueur = $.session.get('nom_joueur');


var pseudo_liste=[
    '',
    'Valentin',
    'Swann'
  ];
var perso_asset_liste=[
  ['', 0],
  ['copain_d_enfance_18ans_', 0],
  ['copine_18_ans_', 2]
]; //Contient le nom d'asset des perso et le slot d'affichage à l'écran de l'image
var decors_liste=[['salon_fete_', 0]];
var dialogue_liste=[ // contient la liste des dialogues [le dialogue1[ligne de dialogue, l'index du nom(pseudo_list) de celui qui parle], le dialogue2 ...]
  [
    ['Tout est prêt pour la soirée ?', 1],
    ['choix', 0] // si le dialogue est égal à 'choix' on va aller chercher l'affichage du choix suivant dans la liste de choix, permettant au joueur de prendre une décision. Le 0 n'a pas d'importance
  ],
  [
    ['Nickel.', 1],
    ['Ça a intérêt à être une soirée inoubliable, vu que c’est la dernière avant longtemps.', 1],
    ['choix', 1]
  ],
  [
    ['Ouais c’est fait.', 1],
    ['Ça a intérêt à être une soirée inoubliable, vu que c’est la dernière avant longtemps.', 1],
    ['choix', 1]
  ],
  [
    ['Carrément mec ! Les opportunités là-bas sont vraiment intéressantes.', 1],
    ['choix', 2]
  ],
  [
    ['Il vous regarde, amusé.', 0],
    ['Ouais c’est vrai, toutes ces heures à jouer n’auront pas été inutiles finalement ! Et toi pas trop stressé pour ton examen d’entrée ?', 0],
    ['choix', 3]
  ],
  [
    ['Tu bosses tellement, ça va aller !', 1],
    ['Des bruits de pas se font entendre, votre petite amie arrive dans le salon, sautillante.', 0],
    ['Les cocktails sont prêts !', 2],
    ['choix', 4]
  ],
  [
    ['Il pose sa main sur votre épaule.', 0],
    ['Ouais, c’est dans la poche !', 1],
    ['Des bruits de pas se font entendre, votre petite amie arrive dans le salon, sautillante.', 0],
    ['Les cocktails sont prêts !', 2],
    ['choix', 4]
  ],
  [
    ['Tu feras attention à ce que personne ne rentre dans ta chambre, il y a les cartons pour le déménagement.', 2],
    ['C’est vrai que c’est demain !', 1],
    ['Un sourire espiègle apparaît sur son visage.', 0],
    ['M’oubliez pas hein.', 1],
    ['choix', 5]
  ],
  [
    ['J’espère bien !', 1],
    ['La sonnette retentit.', 0],
    ['Ah, les premiers invités arrivent!', 2],
    ['La soirée se déroule à merveille, marquant de souvenirs inoubliables l’aube du nouveau chapitre de votre vie.', 0],
    ['Par contre vous emballez pas trop, le ménage va pas se faire tout seul.', 0],
    ['fin', 0]
  ],
  [
    ['Swann rigole.', 0],
    ['Dit pas ça, on sait qu’il va te manquer.', 2],
    ['La sonnette retentit.', 0],
    ['Ah, les premiers invités arrivent!', 2],
    ['La soirée se déroule à merveille, marquant de souvenirs inoubliables l’aube du nouveau chapitre de votre vie.', 0],
    ['Par contre vous emballez pas trop, le ménage va pas se faire tout seul.', 0],
    ['fin', 0]
  ]
];
var choix_liste = [ //contient plusieurs groupes de choix. Chaque choix est composé d'une phrase et de l'index du dialogue qu'il appelle.
  [
    ['Normalement, oui.', 1],
    ['T’as sorti les chips ?', 2]
  ],
  [
    ['T’inquiètes, ça va être cool. Alors, prêt pour le Canada ?', 3]
  ],
  [
    ['Qui aurait pensé que tu passerais de joueur à concepteur il y a quelques années ?', 4]
  ],
  [
    ['Si, j’ai vraiment envie de suivre les traces de mon père.', 5],
    ['Non, c’est ma passion après tout, je suis confiant.', 6]
  ],
  [
    ['Ça marche.', 7]
  ],
  [
    ['Bien sûr que non.', 8],
    ['J’vais y réfléchir.', 9]
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
