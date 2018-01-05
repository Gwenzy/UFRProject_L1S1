/**
 * Created by gwend on 05/01/2018.
 */
var stdHTML = `<p><span class="left">
Le mode standard est le mode le plus connu d'Osu!, et aussi le plus joué. Le fonctionnement est simple, des cercles apparaissent au fur et à mesure de la musique sur l'écran, et le joueur doit au bon moment, avoir son curseur sur le cercle, et cliquer soit avec la souris, soit avec une touche assignée au clavier. Selon la précision du clic, le joueur peut marquer 300 points (ce qui correspond à un timing parfait), 100 points (ce qui correspond à un petit décalage, trop tôt ou trop tard par rapport à la musique), un 50 (décalage plus élevé par rapport à la musique) ou un MISS, ou RATE, qui correspond soit à un clic beaucoup trop tôt ou beaucoup trop tard, ou alors à l'absence du curseur sur le cercle.<br/>
Plus vous réalisez de 300 et de 100 à la suite, plus votre COMBO augmentera, et plus votre COMBO est grand, plus vous gagnerez de score : le nombre de points gagné correspond à 300 ou 100 multiplié par le combo. A vous de vous concentrer pour avoir un maximum de combo ! Attention, faire des 50 ou des MISS vous fait perdre de la vie, alors que les 300 vous en rendent. Selon les maps, vous gagnerez plus ou moins de vie sur des 300, et vous perdrez plus ou moins de vie sur les 50 ou MISS<br/><br/>
Selon le score marqué à la fin de la beatmap, selon votre pourcentage de précision et selon la difficulté globale de la beatmap, vous obtiendrez ou non un certain nombre de PP (Peppy Points) qui correspondent à votre performance par rapport aux autres joueurs et qui déterminent votre position dans le classement. Plus vous avez de point, plus vous montez dans le classement.
<br /></span>
<img src="../media/std1.jpg" alt="Standard Picture 1"/><img src="../media/std2.jpg" alt="Standard Picture 2" />
</p>`;

var maniaHTML = `<p>Currently in development
</p>`;



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
            document.getElementById("modeDesc").innerHTML = stdHTML;
            break;
        case 'taiko':
            document.getElementById("modeDesc").innerHTML = stdHTML;
            break;
    }
}

function resetClasses(){
    document.getElementById("std").className = "";
    document.getElementById("mania").className = "";
    document.getElementById("ctb").className = "";
    document.getElementById("taiko").className = "";
}