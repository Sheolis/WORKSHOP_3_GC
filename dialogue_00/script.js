var pseudo_liste=['Lui', 'Elle', 'Ça';
var dialogue_index=0; //index du dialogue
var dialogue_ligne=0; //index de la ligne de texte du dialogue
var dialogue_liste=[ // contient la liste des dialogues [le dialogue1[ligne de dialogue, l'index du nom(pseudo_list) de celui qui parle], le dialogue2 ...]
  [
    ['Bonjour', 0],
    ['Textecourt',1],
    ['TexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLongTexteLong',2],
    ['TextemoinslongTextemoinslongTextemoinslongTextemoinslongTextemoinslong',0],
    'choix' // si le dialogue est égal à 'choix' on va aller chercher l'affichage du choix suivant dans la liste de choix, permettant au joueur de prendre une décision
  ],
  [
    ['Début du texte 2',1],
    ['Fin du texte 2',0],
    'choix'
  ]
];

var lien_dialogue_choix= [ //contient à l'index x, l'index du choix appelé(choix_liste) par le dialogue x(dialogue_liste)
  0,
  0
];

var choix_index = 0;
var choix_liste [ //contient plusieurs groupes de choix. Chaque choix est composé d'une phrase et de l'index du dialogue qu'il appelle.
  [
    ['oui',1],
    ['non',1],
    ['peut-etre',0]
  ]
]

$('#dialogue').html(dialogue_list[dialogue_index][dialogue_ligne][0]); //appelle la première ligne du premier dialogue à s'afficher sur le html


$('#dialogue').on('click',function(){
  if(dialogue_i<dialogue_list.length-1) {
      dialogue_index++;
      if(dialogue_liste[dialogue_index]=='choix') {
          choix_i=f_choix(choix_index);
      }
      $('#dialogue').html(dialogue_list[dialogue_index]);
  }
})

function f_dialogue(dialogue_index) {
    dialogue_ligne=0 ;
    while (dialogue_ligne<dialogue_liste[dialogue_index].length){
        if (dialogue_list[dialogue_index][dialogue_ligne][0]=='choix'){
            $('#dialogue').html(dialogue_list[dialogue_index][dialogue_ligne][0]);
        }
        else if(dialogue_list[dialogue_index][dialogue_ligne][0]=='fin') {
            f_choix(choix_liste[lien_dialogue_choix][1])
        }
        else {
            $('#nom_du_locuteur').html(dialogue_list[dialogue_index][dialogue_ligne][1]);
            $('#dialogue').html(dialogue_list[dialogue_index][dialogue_ligne][0]);

        }
    }
}

function f_choix(choix_index) { //fonction_choix

}
