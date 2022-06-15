function redirect()
{
    location.replace("profil.html")
}


var UserGrade   = window.localStorage.getItem('UserGrade' );

$( document ).ready(function() {

    if (UserGrade !== "admin") {
        redirect()
    }
    
    

});

function ajoutClient()
{
    var newElement = document.createElement("div");
    newElement.innerHTML = '<br><input type="text" placeholder="Nom" /> ';
    newElement.innerHTML += '<input type="text" placeholder="Prenom" /> ';
    newElement.innerHTML += '<input type="text" placeholder="Email" /> ';
    newElement.innerHTML += '<input type="text" placeholder="Ville" /> ';
    newElement.innerHTML += '<input onclick="valider()" type="button" value="Valider" /> ';
var myCurrentElement= document.getElementById("btn");
myCurrentElement.append(newElement)

}

function valider()
{
    /* Me reste ajouter j'ai oublié comment l'afficher directement sur tableau html  */
}

