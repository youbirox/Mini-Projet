 var UserNom   = window.localStorage.getItem('UserNom' );
 var UserPrenom   = window.localStorage.getItem('UserPrenom' );
 var UserLogin   = window.localStorage.getItem('UserLogin' );
 var UserPassword   = window.localStorage.getItem('UserPassword' );
 var UserEmail   = window.localStorage.getItem('UserEmail' );
 var UserAge   = window.localStorage.getItem('UserAge' );
 var UserGrade   = window.localStorage.getItem('UserGrade' );
 var UserAdresse   = window.localStorage.getItem('UserAdresse' );
 var UserTelephone   = window.localStorage.getItem('UserTelephone' );


 function redirect()
{
    location.replace("login.html")
}

function logout()
{
    window.localStorage.clear();
    redirect()
}
 $( document ).ready(function() {

    if (!UserNom) {
        redirect()
    }
    else
    {   

        document.getElementById("Nom").innerText=UserNom
        document.getElementById("Prenom").innerText=UserPrenom
        document.getElementById("Email").innerText=UserEmail
        document.getElementById("Age").innerText=UserAge
        document.getElementById("Grade").innerText=UserGrade
        document.getElementById("Adresse").innerText=UserAdresse
        document.getElementById("Telephone").innerText=UserTelephone
    }
    

});

function NomEdit()
{
    document.getElementById("Nom").innerHTML='<input type="text"/>&ensp; &ensp;<i class="fa-solid fa-check"></i>'
}
function PrenomEdit()
{
    document.getElementById("Prenom").innerHTML='<input type="text"/>&ensp; &ensp;<i class="fa-solid fa-check"></i>'
}
function EmailEdit()
{
    document.getElementById("Email").innerHTML='<input type="text"/>&ensp; &ensp;<i class="fa-solid fa-check"></i>'
}
function AgeEdit()
{
    document.getElementById("Age").innerHTML='<input type="text"/>&ensp; &ensp;<i class="fa-solid fa-check"></i>'
}
function GradeEdit()
{
    document.getElementById("Grade").innerHTML='<input type="text"/>&ensp; &ensp;<i class="fa-solid fa-check"></i>'
}
function AdresseEdit()
{
    document.getElementById("Adresse").innerHTML='<input type="text"/>&ensp; &ensp;<i class="fa-solid fa-check"></i>'
}
function TelephoneEdit()
{
    document.getElementById("Telepehone").innerHTML='<input type="text"/>&ensp; &ensp;<i class="fa-solid fa-check"></i>'
}




