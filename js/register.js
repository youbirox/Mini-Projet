

var UserNom
var UserPrenom
var UserPassword
var UserEmail
var UserAge
var UserGrade
var UserAdresse
var UserTelephone


// Fonction D'ajout
function  adddata()
{

    // Récupération des valeurs
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;
    var adresse = document.getElementById("adresse").value;
    var telephone = document.getElementById("telephone").value;


    // Initialisation
    UserNom=nom
    UserPrenom=prenom
    UserLogin=email
    UserPassword=password
    UserEmail=email
    UserAge=age
    UserGrade=grade
    UserAdresse=adresse
    UserTelephone =telephone
    //alert(table)


    // Stockage les valeurs sur Localstorage
    window.localStorage.setItem('UserNom',UserNom );
    window.localStorage.setItem('UserPrenom',UserPrenom );
    window.localStorage.setItem('UserLogin',UserLogin );
    window.localStorage.setItem('UserPassword',UserPassword );
    window.localStorage.setItem('UserEmail',UserEmail );
    window.localStorage.setItem('UserAge',UserAge );
    window.localStorage.setItem('UserGrade',UserGrade );
    window.localStorage.setItem('UserAdresse',UserAdresse );
    window.localStorage.setItem('UserTelephone',UserTelephone );
}

