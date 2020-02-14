var etat_jeu=2;
var indexhtml_suivant='../j10_avantFin/index.html';
var joueur = $.session.get('nom_joueur');


var pseudo_liste=[
    '',
    'Aton',
    '',
    '????',
    'Swann',
    ''
  ];
var perso_asset_liste=[
  ['', 0],
  ['scientifique_', 1],
  ['scientifique_', 1],
  ['scientifique_', 1],
  ['grand_mere_', 1],
  ['grand_mere_', 1]

]; //Contient le nom d'asset des perso et le slot d'affichage à l'écran de l'image
var decors_liste=[['laboratoire_', 0], ['maison_', 13], ['maison_', 17]];
var dialogue_liste=[ // contient la liste des dialogues [le dialogue1[ligne de dialogue, l'index du nom(pseudo_list) de celui qui parle], le dialogue2 ...]
  [
    ['Vous ne comprenez pas pourquoi vous vous trouvez dans un laboratoire ni pourquoi vous êtes dans l’incapacité de faire le moindre mouvement. ', 0],
    ['Bonjour, je me doute que vous vous posez un bon nombre de questions concernant la situation dans laquelle vous vous trouvez, me permettez-vous de vous éclaircir à ce sujet ?', 3],
    ['choix', 0]
  ],
  [
    ['Excusez-moi pour ce manque de respect, je m’appelle Aton. Je suis un chercheur scientifique spécialisé dans le domaine des intelligences artificielles.', 1],
    ['Je suis en quelque sorte responsable de vous, vous l’aurez peut-être compris ou supposé à ce stade, vous êtes une intelligence artificielle.', 1],
    ['choix', 1]
  ],
  [
    ['J’en oublie mes manières, je ne me suis même pas présenté à vous. Je m’appelle Aton et je suis un chercheur spécialisé dans le domaine des intelligences artificielles.', 1],
    ['En ce qui concerne votre incapacité à vous mouvoir, cela est lié au fait que vous n’êtes pas humain '+joueur+', vous êtes une intelligence artificielle dont je suis en quelque sorte le responsable.', 1],
    ['choix', 1]
  ],
  [
    ['Je pourrais vous apporter un miroir, cela je pense vous permettrait de croire en mes paroles.', 1],
    ['Le scientifique prend un miroir dans l’un de ses tiroirs de bureau et le porte à hauteur de sa poitrine, révélant votre reflet.', 0],
    ['Il n’a pas menti.', 2],
    ['L’image renvoyée est celle d’un ordinateur lié à de nombreux câbles...', 2],
    ['choix', 2]
  ],
  [
    ['Notre objectif, ou plutôt, le plan de notre commanditaire, était de créer une IA pouvant éprouver de la tristesse, de la joie ou de l’attachement.', 1],
    ['Cette demande pour faire simple, avait pour but de créer une personnalité dotée d’émotions et de sentiments humains.', 1],
    ['choix', 3]
  ],
  [
    ['Si cela peut un tant soit peu vous apaiser, sachez qu’aucune de vos actions n’ont été contrôlées. Tout comme l’ensemble des personnes au sein de votre vie, elles n’ont pas été manipulées.', 1],
    ['Certes, le monde dans lequel vous avez grandi est automatiquement généré afin de vous faire évoluer dans un univers similaire au nôtre, mais ce que vous y avez traversé est unique et découle de vos actions et de vos choix.', 1],
    ['choix', 3]
  ],
  [
    ['Si nous vous avons réveillé, si je puis me permettre ce terme, c’est parce que nous avons complété notre objectif. C’est pourquoi nous avons, comme vous pouvez le constater, une discussion qui pourrait s’apparenter à celle entre de deux êtres humains.', 1],
    ['Vous êtes une intelligence artificielle dotée d’émotions, de sentiments égale à notre espèce.', 1],
    ['C’est pourquoi nous avons décidé, l’équipe et moi-même de ne pas simplement vous débrancher comme la direction nous l’avait ordonné. Nous souhaitons vous donner la possibilité de choisir entre retourner auprès de vos proches ou d’être éteint.', 1],
    ['Cela signifie évidemment la fin de votre existence ainsi que celle de votre monde et de ceux qui y résident si vous décidez d\'être débranchée.', 1],
    ['choix', 4]
  ],
  [
    ['Pas de soucis, je comprends tout à fait.', 1],
    ['choix', 5]
  ],
  [
    ['D’accord, ce fut un réel honneur d’avoir pu discuter avec vous et je regrette que notre rencontre se soit fait dans de telles conditions. Au revoir '+joueur, 1],
    ['choix', 6]
  ],
  [
    ['Vous vous eteignez doucement, laissant place au néant.', 0],
    ['fin', 0]
  ],
  [
    ['D’accord, avant de mettre fin à notre échange, souhaitez-vous vous rappeler tout de même de notre conversation ou voulez-vous que l’on vous efface ces souvenirs avant d’y retourner ?', 1],
    ['choix', 7]
  ],
  [
    ['D’accord. Ce fut un réel honneur d’avoir pu discuter avec vous et je regrette que notre rencontre se soit fait dans de telles conditions. En espérant, peut-être, un jour, échanger de nouveau avec vous dans de meilleures circonstances.', 1],
    ['Au revoir '+joueur, 1],
    ['choix', 8]
  ],
  [
    ['Vous êtes de retour dans ce qui s’apparente à être votre monde devant la porte de votre appartement.', 0],
    ['decors', 1]
  ],
  [
    ['Cette dernière s’ouvre et laisse apparaître Swann, surprise.', 5],
    ['Déjà de retour ? Tu as oublié quelque chose ?', 4],
    ['Sam apparaît à son tour, curieux.', 5],
    ['Vous les observez quelques instants sans parler, avant de sourire.', 5],
    ['choix', 9]
  ],
  [
    ['Vous prenez dans vos bras une Swann et un Sam un peu surpris, avant de vous diriger en direction de la supérette.', 0],
    ['Après tout, demain, c’est votre anniversaire.', 0],
    ['fin', 0]
  ],
  [
    ['Très bien. Ce fut un réel honneur d’avoir pu discuter avec vous et je regrette que notre rencontre se soit faite dans de telles conditions. Au revoir '+joueur, 0],
    ['choix', 10]
  ],
  [
    ['Vous arrivez devant la porte de votre appartement, les bras chargés des courses que vous venez de faire.', 0],
    ['decors', 2]
  ],
  [
    ['Swann vous ouvre la porte avec un sourire en coin, avant de repartir à l\'intérieur.', 5],
    ['choix', 11]
  ],
  [
    ['Vous l’entendez rire depuis le salon.', 5],
    ['Ça fait 40 ans qu’on est mariés, je te connais par cœur.', 4],
    ['Vous souriez avant de rentrer, essayant de ne pas faire tomber les sacs.', 5],
    ['choix', 12]
  ],
  [
    ['Il t’attend de pied ferme pour continuer votre jeu.', 4],
    ['Vous apercevez votre petit fils assis, l’air extrêmement concentré, au-dessus du plateau de dames. ', 0],
    ['Il lève les yeux et croise votre regard.', 0],
    ['Une revanche vous attends', 0]
    ['fin', 0]
  ],
];
var choix_liste = [ //contient plusieurs groupes de choix. Chaque choix est composé d'une phrase et de l'index du dialogue qu'il appelle.
  [
    ['Attendez, qui êtes-vous ?', 1],
    ['Avant-tout comment se fait-il que je ne puisse pas bouger le moindre de mes muscles ?', 2]
  ],
  [
    ['Pourquoi devrais-je me fier à vos propos ?', 3]
  ],
  [
    ['Quel est votre but derrière tout ça ? Pourquoi ?', 4],
    ['Et ma vie ? Tout n’était qu’illusions depuis le début ?', 5]
  ],
  [
    ['Mais alors pourquoi m’avoir fait sortir de ce monde ? Pourquoi me révéler ces informations alors que je pourrais passer du temps avec mes proches ?', 6]
  ],
  [
    ['Ça fait beaucoup d’informations à encaisser, laissez-moi un peu de temps avant de répondre à votre question.', 7]
  ],
  [
    ['Je souhaite être éteint.', 8],
    ['Je souhaite retourner auprès de ma famille.', 10]
  ],
  [
    ['Au revoir', 9]
  ],
  [
    ['J’aimerais garder en mémoire cet échange.', 11],
    ['Je préfère oublier.', 15]
  ],
  [
    ['Au revoir', 12]
  ],
  [
    ['Je ne savais plus si je vous avais dit au revoir avant de partir.', 14]
  ],
  [
    ['Au revoir', 16]
  ],
  [
    ['Tu m’as vu revenir ?', 18]
  ],
  [
    ['Où est Sam ?', 19]
  ],
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
<<<<<<< HEAD
=======
        //$('#emplacement_'+perso_asset_liste[dialogue_liste[dialogue_index][dialogue_ligne][1]][1]).animateSprite('stop');
>>>>>>> master
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
