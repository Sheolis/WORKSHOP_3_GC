var etat_jeu=2;
var indexhtml_suivant='../j4_recree/index.html';
var joueur = $.session.get('nom_joueur');


var pseudo_liste=[
    'Mère',
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
