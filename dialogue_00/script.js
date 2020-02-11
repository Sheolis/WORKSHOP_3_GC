var pseudo_liste=['Lui', 'Elle', 'Ça'];
var perso_asset_liste=[['docteur_2_0.png',1]]; //Contient le nom d'asset des perso et le slot d'affichage à l'écran de l'image
var dialogue_liste=[ // contient la liste des dialogues [le dialogue1[ligne de dialogue, l'index du nom(pseudo_list) de celui qui parle], le dialogue2 ...]
  [
    ['Bonjour', 0],
    ['Textecourt',1],
    ['TexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLong',2],
    ['TextemoinslongTextemoinslongTextemoinslongTextemoinslongTextemoinslong',0],
    ['choix',0] // si le dialogue est égal à 'choix' on va aller chercher l'affichage du choix suivant dans la liste de choix, permettant au joueur de prendre une décision. Le 0 n'a pas d'importance
  ],
  [
    ['Début du texte 2',1],
    ['Fin du texte 2',0],
    ['choix',0]
  ]
];

var lien_dialogue_choix= [ //contient à l'index x, l'index du choix appelé(choix_liste) par le dialogue x(dialogue_liste)
  0,
  1
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

function f_choix(choix_index) { //fonction_choix
    for (var i = 0; i < choix_liste[choix_index].length; i++) {
        $( "#boite_choix_multiples" ).append( "<p id=\"choix_"+i+"\" class=\"choix\">"+choix_liste[choix_index][i][0]+"</p>" ); // !! code valable pour un nombre de choix inférieur ou égal à 10
    }
    $('.choix').on('click', function() {
        $( ".choix" ).remove();
        dialogue_index=choix_liste[choix_index][this.id[6]][1];
        $('#dialogue').html(dialogue_liste[dialogue_index][0][0]);
        dialogue_ligne=1;
    })
}


///////////////////////////////////////////////MAIN/////////////////////////////////////////////////////

$('#nom_du_locuteur').html(pseudo_liste[dialogue_liste[dialogue_index][dialogue_ligne][1]]);
$('#dialogue').html(dialogue_liste[dialogue_index][0][0]); //appelle la première ligne du premier dialogue à s'afficher sur le html

$('#dialogue').on('click',function(){

    if (dialogue_liste[dialogue_index][dialogue_ligne][0]=='choix'){
        choix_index=lien_dialogue_choix[dialogue_index];
        f_choix(choix_index);
    }
    else if(dialogue_liste[dialogue_index][dialogue_ligne][0]=='fin') {
      //! A COMPLETER !// - Condition de fin
    }
    else if(dialogue_ligne<dialogue_liste[dialogue_index].length){
        $('#nom_du_locuteur').html(pseudo_liste[dialogue_liste[dialogue_index][dialogue_ligne][1]]);
        $('#dialogue').html(dialogue_liste[dialogue_index][dialogue_ligne][0]);
        dialogue_ligne ++;
    }
})

/*function f_dialogue(dialogue_index) {
    dialogue_ligne=0 ;
    while (dialogue_ligne<dialogue_liste[dialogue_index].length){
        if (dialogue_liste[dialogue_index][dialogue_ligne][0]=='choix'){
            return f_choix(lien_dialogue_choix[dialogue_index]);
        }
        else if(dialogue_liste[dialogue_index][dialogue_ligne][0]=='fin') {
          return 0;
        }
        else {
            $('#nom_du_locuteur').html(pseudo_liste[dialogue_liste[dialogue_index][dialogue_ligne][1]]);
            $('#dialogue').html(dialogue_liste[dialogue_index][dialogue_ligne][0]);
            dialogue_ligne ++;
        }
    }
}*/
