<DIV STYLE="width:350;height:300;background:BLACK;color:GREEN;border-style:solid;border-width:1;border-color:#000000;font-family:Arial;font-size:14px" ID=bloc></DIV>
<SCRIPT LANGUAGE=JavaScript>

var chaine = "ce kon veut y mettre on s'en fout ça change rien c'est juste pour les tests on fera des essais plus tard n a pas de temps à perdre";
var nb_car = chaine.length;
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;
for (i=0; i<nb_car; i++) {
texte[i] = txt+tableau[i];
var txt = texte[i];
}

actual_texte = 0;
function changeMessage()
{
document.getElementById("bloc").innerHTML = texte[actual_texte];
actual_texte++;
if(actual_texte >= texte.length)
actual_texte = nb_msg;
}
if(document.getElementById)

setInterval("changeMessage()",20) /* la vitesse de defilement (plus on a une valeur faible plus
texte s'affiche rapidement) */
</SCRIPT>
