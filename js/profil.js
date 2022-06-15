 var UserNom   = window.localStorage.getItem('UserNom' );
 var UserPrenom   = window.localStorage.getItem('UserPrenom' );
 var UserLogin   = window.localStorage.getItem('UserLogin' );
 var UserPassword   = window.localStorage.getItem('UserPassword' );
 var UserEmail   = window.localStorage.getItem('UserEmail' );
 var UserAge   = window.localStorage.getItem('UserAge' );
 var UserGrade   = window.localStorage.getItem('UserGrade' );
 var UserAdresse   = window.localStorage.getItem('UserAdresse' );
 var UserTelephone   = window.localStorage.getItem('UserTelephone' );


 $( document ).ready(function() {
    document.getElementById("Nom").innerText=UserNom
    document.getElementById("Prenom").innerText=UserPrenom
    document.getElementById("Email").innerText=UserEmail
    document.getElementById("Age").innerText=UserAge
    document.getElementById("Grade").innerText=UserGrade
    document.getElementById("Adresse").innerText=UserAdresse
    document.getElementById("Telephone").innerText=UserTelephone

});

