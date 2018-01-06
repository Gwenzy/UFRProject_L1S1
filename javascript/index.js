/**
 * Created by gwend on 05/01/2018.
 */
var stdHTML = `<p><span class="left">
Le mode standard est le mode le plus connu d'Osu!, et aussi le plus joué. Le fonctionnement est simple, des cercles apparaissent au fur et à mesure de la musique sur l'écran, et le joueur doit au bon moment, avoir son curseur sur le cercle, et cliquer soit avec la souris, soit avec une touche assignée au clavier. Selon la précision du clic, le joueur peut marquer 300 points (ce qui correspond à un timing parfait), 100 points (ce qui correspond à un petit décalage, trop tôt ou trop tard par rapport à la musique), un 50 (décalage plus élevé par rapport à la musique) ou un MISS, ou RATE, qui correspond soit à un clic beaucoup trop tôt ou beaucoup trop tard, ou alors à l'absence du curseur sur le cercle.<br/>
Plus vous réalisez de 300 et de 100 à la suite, plus votre COMBO augmentera, et plus votre COMBO est grand, plus vous gagnerez de score : le nombre de points gagné correspond à 300 ou 100 multiplié par le combo. A vous de vous concentrer pour avoir un maximum de combo ! Attention, faire des 50 ou des MISS vous fait perdre de la vie, alors que les 300 vous en rendent. Selon les maps, vous gagnerez plus ou moins de vie sur des 300, et vous perdrez plus ou moins de vie sur les 50 ou MISS<br/><br/>
Selon le score marqué à la fin de la beatmap, selon votre pourcentage de précision et selon la difficulté globale de la beatmap, vous obtiendrez ou non un certain nombre de PP (Peppy Points) qui correspondent à votre performance par rapport aux autres joueurs et qui déterminent votre position dans le classement. Plus vous avez de point, plus vous montez dans le classement.
<br />Le mode standard demande beaucoup de précision avec le curseur, et une grande réactivité. Parfois, il y a seulement quelques millisecondes entre le moment où la note s'affiche sur l'écran et le moment où l'on doit cliquer dessus  </span>
<img src="../media/std1.jpg" alt="Standard Picture 1"/><img src="../media/std2.jpg" alt="Standard Picture 2" />
</p>`;

/**
 * Created by gwend on 05/01/2018.
 */
var maniaHTML = `<p><span class="left">
Le mode mania est un mode ressemblant beaucoup à un autre jeu : Stepmania.<br />
Contrairement au mode standard, Osu!Mania ne se joue qu'au clavier. 4 colonnes ou plus s'affichent à l'écran, chacune d'elle étant liée à une touche du clavier. Les notes descendent du haut vers le bas dans ces colonnes, et quand elles arrivent en bas, vous devez appuyer sur la touche du clavier correspondante. <br />
Ce mode de jeu demande une bonne coordination et une bonne indépendence des deux mains, un peu comme au piano.</span>
<img src="../media/mania1.jpg" alt="Mania Picture 1"/><img src="../media/mania2.jpg" alt="Mania Picture 2" />
</p>`;

var ctbHTML = `<p><span class="left">
Le mode Osu!CatchTheBeat est un mode dans lequel vous déplacez un plateau de fruits de gauche à droite, en bas de l'écran. Durant le jeu, des fruits tombent sur toute la largeur de l'écran et vous devez tout simplement les rattraper avec le plateau.

</span>
<img src="../media/ctb1.jpg" alt="CTB Picture 1"/><img src="../media/ctb2.jpg" alt="CTB Picture 2" />
</p>`;

var taikoHTML = `<p><span class="left">
Le mode Osu!Taiko est un mode de jeu inspiré du jeu Taiko no Tasujin, qui sera beaucoup mieux expliqué sur <a href="http://www.taikonotatsujin.fr/le-guide-taiko-no-tatsujin">ce site</a>
<br /></span>
<img src="../media/taiko1.jpg" alt="Taiko Picture 1"/><img src="../media/taiko2.jpg" alt="Taiko Picture 2" />

</p>`

function init(){
    document.getElementById("modes").innerHTML=
        "<a href=\"#\" id='std' class='' onclick=\"changemode('std')\"> Osu!Standard</a>" +
        "<a href=\"#\" id='mania' class='' onclick=\"changemode('mania')\">Osu!Mania</a>" +
        "<a href=\"#\" id='ctb' class='' onclick=\"changemode('ctb')\">Osu!CatchTheBeat</a>" +
        "<a href=\"#\" id='taiko' class='' onclick=\"changemode('taiko')\">Osu!Taiko</a>" +
        "" +
        "<div id='modeDesc'></div>";

    changemode("std");
}

function changemode(mode){
    resetClasses();
    document.getElementById(mode).className="chosen";
    switch(mode){

        case 'std':
            document.getElementById("modeDesc").innerHTML = stdHTML;
            break;
        case 'mania':
            document.getElementById("modeDesc").innerHTML = maniaHTML;
            break;
        case 'ctb':
            document.getElementById("modeDesc").innerHTML = ctbHTML;
            break;
        case 'taiko':
            document.getElementById("modeDesc").innerHTML = taikoHTML;
            break;
    }
}

function resetClasses(){
    document.getElementById("std").className = "";
    document.getElementById("mania").className = "";
    document.getElementById("ctb").className = "";
    document.getElementById("taiko").className = "";
}