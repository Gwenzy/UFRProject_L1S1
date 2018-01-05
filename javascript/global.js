/**
 * Created by gwend on 05/01/2018.
 */
function minisommaire(){
    document.getElementById("header").innerHTML="<p id='date'>"+getDate()+"</p>";
}

function getDate(){
    return new Date();
}