/**
 * Created by gwend on 05/01/2018.
 */
function header(){
    var date = new Date();

    document.getElementById("header").innerHTML="<p id='date'>Nous sommes le "+date.toLocaleDateString()+" et il est "+date.toLocaleTimeString()+"</p><p id='center'> <a href='#' onclick='javascript:history.back();'>Pr&eacute;c&eacute;dent</a> - <a href='sommaire.html' >Sommaire</a> - <a href='#' onclick='javascript:history.forward();'>Suivant</a></p>";

    if(window.location.href.split('/')[window.location.href.split('/').length-1]==='inscription.html'){
        document.getElementById("header").innerHTML += `<p class='right'><audio controls loop>
  <source src="../media/circles.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio></p>`;
        document.getElementsByTagName("audio")[0].volume = 0.05;
        document.getElementsByTagName("audio")[0].play();

    }

    updateDate();
}

function updateDate() {
    var date = new Date();
    document.getElementById("date").innerHTML = "Nous sommes le "+date.toLocaleDateString()+" et il est "+date.toLocaleTimeString();
    setTimeout(updateDate, 1000);
}
function getDate(){
    return new Date();
}

function redirect(url){
    window.location.href = url;
}