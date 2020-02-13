var etat_jeu=2;
var indexhtml_suivant='../j2_anneau/index.html';
var joueur = $.session.get('nom_joueur');


var pseudo_liste=[
    ''
  ];
var perso_asset_liste=[
  ['',1]
]; //Contient le nom d'asset des perso et le slot d'affichage à l'écran de l'image
var decors_liste=['chambre_'];
var dialogue_liste=[ // contient la liste des dialogues [le dialogue1[ligne de dialogue, l'index du nom(pseudo_list) de celui qui parle], le dialogue2 ...]
  [
    ['Le premier jeu vous ayant vraiment plu, vous vous ruez sur le suivant.', 0],
    ['fin', 0] // si le dialogue est égal à 'choix' on va aller chercher l'affichage du choix suivant dans la liste de choix, permettant au joueur de prendre une décision. Le 0 n'a pas d'importance
  ],
];
