/**
 * Created by gwend on 06/01/2018.
 */
function disableSumbit() {
    document.getElementById("submit").setAttribute("disabled", "disabled");
    document.getElementById("error").innerHTML = "";

}

function verif(){
    var error = "";
    if(document.getElementById("pseudo").value==="")
        error = "Veuillez entrer votre pseudo";
    else if(document.getElementById("pp").value===""||(parseInt(document.getElementById("pp").value)<0||parseInt(document.getElementById("pp").value)>10000))
        error = "Veuillez entrer votre nombre de pp &agrave; ce jour (nombre entre 0 et 10000)";
    else if(document.getElementById("password").value==="")
        error = "Veuillez entrer un mot de passe d'inscription";
    else if(document.getElementById("mail").value==="" || document.getElementById("mail").value.indexOf("@")===-1 || document.getElementById("mail").value.split("@")[1].indexOf(".")===-1)
        error = "Merci d'entrez une email valide sur laquelle nous pourrons vous contacter";
    else if(document.getElementById("tel").value==="" || (!isNaN(document.getElementById("tel").value) && document.getElementById("tel").value.length!==10))
        error = "Merci d'entrer un num&eacute;ro de t&eacute;l&eacute;phone correct"
    else if(!document.getElementById("mouseOnly").checked && !document.getElementById("mouseKeyboard").checked && !document.getElementById("tabletKeyboard").checked && !document.getElementById("touchscreen").checked && !document.getElementById("other").checked)
        error = "Merci de cocher au moins un style de jeu";

    if(error==="")
        document.getElementById("submit").removeAttribute("disabled");
    else {
        disableSumbit();
        var element = document.createElement("p");
        element.style = "color:red;";
        element.innerHTML = error;
        document.getElementById("error").innerHTML = "";
        document.getElementById("error").appendChild(element);



    }

}
function submitted() {
    alert("Votre inscription est confirmee, vous allez etre redirige au sommaire");
    setTimeout(function() {
        window.location.href = "sommaire.html";
    }, 2000);
}