/**
 * Created by gwend on 05/01/2018.
 */
var stdHTML = `<p><span class="left">
Le mode standard est le mode le plus connu d'Osu!, et aussi le plus jou&eacute;. Le fonctionnement est simple, des cercles apparaissent au fur et &agrave; mesure de la musique sur l'&eacute;cran, et le joueur doit au bon moment, avoir son curseur sur le cercle, et cliquer soit avec la souris, soit avec une touche assign&eacute;e au clavier. Selon la pr&eacute;cision du clic, le joueur peut marquer 300 points (ce qui correspond &agrave; un timing parfait), 100 points (ce qui correspond &agrave; un petit d&eacute;calage, trop t&ocirc;t ou trop tard par rapport &agrave; la musique), un 50 (d&eacute;calage plus &eacute;lev&eacute; par rapport &agrave; la musique) ou un MISS, ou RATE, qui correspond soit &agrave; un clic beaucoup trop t&ocirc;t ou beaucoup trop tard, ou alors &agrave; l'absence du curseur sur le cercle.<br/>
Plus vous r&eacute;alisez de 300 et de 100 &agrave; la suite, plus votre COMBO augmentera, et plus votre COMBO est grand, plus vous gagnerez de score : le nombre de points gagn&eacute; correspond &agrave; 300 ou 100 multipli&eacute; par le combo. A vous de vous concentrer pour avoir un maximum de combo ! Attention, faire des 50 ou des MISS vous fait perdre de la vie, alors que les 300 vous en rendent. Selon les maps, vous gagnerez plus ou moins de vie sur des 300, et vous perdrez plus ou moins de vie sur les 50 ou MISS<br/><br/>
Selon le score marqu&eacute; &agrave; la fin de la beatmap, selon votre pourcentage de pr&eacute;cision et selon la difficult&eacute; globale de la beatmap, vous obtiendrez ou non un certain nombre de PP (Peppy Points) qui correspondent &agrave; votre performance par rapport aux autres joueurs et qui d&eacute;terminent votre position dans le classement. Plus vous avez de point, plus vous montez dans le classement.
<br />Le mode standard demande beaucoup de pr&eacute;cision avec le curseur, et une grande r&eacute;activit&eacute;. Parfois, il y a seulement quelques millisecondes entre le moment o&ugrave; la note s'affiche sur l'&eacute;cran et le moment o&ugrave; l'on doit cliquer dessus  </span>
<img src="../media/std1.jpg" alt="Standard Picture 1"/><img src="../media/std2.jpg" alt="Standard Picture 2" />
</p>`;

/**
 * Created by gwend on 05/01/2018.
 */
var maniaHTML = `<p><span class="left">
Le mode mania est un mode ressemblant beaucoup &agrave; un autre jeu : Stepmania.<br />
Contrairement au mode standard, Osu!Mania ne se joue qu'au clavier. 4 colonnes ou plus s'affichent &agrave; l'&eacute;cran, chacune d'elle &eacute;tant li&eacute;e &agrave; une touche du clavier. Les notes descendent du haut vers le bas dans ces colonnes, et quand elles arrivent en bas, vous devez appuyer sur la touche du clavier correspondante. <br />
Ce mode de jeu demande une bonne coordination et une bonne ind&eacute;pendence des deux mains, un peu comme au piano.</span>
<img src="../media/mania1.jpg" alt="Mania Picture 1"/><img src="../media/mania2.jpg" alt="Mania Picture 2" />
</p>`;

var ctbHTML = `<p><span class="left">
Le mode Osu!CatchTheBeat est un mode dans lequel vous d&eacute;placez un plateau de fruits de gauche &agrave; droite, en bas de l'&eacute;cran. Durant le jeu, des fruits tombent sur toute la largeur de l'&eacute;cran et vous devez tout simplement les rattraper avec le plateau.

</span>
<img src="../media/ctb1.jpg" alt="CTB Picture 1"/><img src="../media/ctb2.jpg" alt="CTB Picture 2" />
</p>`;

var taikoHTML = `<p><span class="left">
Le mode Osu!Taiko est un mode de jeu inspir&eacute; du jeu Taiko no Tasujin, qui sera beaucoup mieux expliqu&eacute; sur <a href="http://www.taikonotatsujin.fr/le-guide-taiko-no-tatsujin">ce site</a>
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