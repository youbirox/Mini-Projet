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
    document.getElementById("Nom").innerHTML='<input type="text" id="NomE"/>&ensp; &ensp;<i onclick="NomSave()" class="fa-solid fa-check"></i>'
}
function NomSave()
{
    var NomE = document.getElementById("NomE").value
    window.localStorage.setItem('UserNom', NomE);
    window.location = window.location
}
function PrenomEdit()
{
    document.getElementById("Prenom").innerHTML='<input type="text" id="PrenomE"/>&ensp; &ensp;<i onclick="PrenomSave()" class="fa-solid fa-check"></i>'
}
function PrenomSave()
{
    var PrenomE = document.getElementById("PrenomE").value
    window.localStorage.setItem('UserPrenom', PrenomE);
    window.location = window.location
}
function EmailEdit()
{
    document.getElementById("Email").innerHTML='<input type="text" id="EmailE"/>&ensp; &ensp;<i onclick="EmailSave()" class="fa-solid fa-check"></i>'
}
function EmailSave()
{
    var EmailE = document.getElementById("EmailE").value
    window.localStorage.setItem('UserEmail', EmailE);
    window.location = window.location
}
function AgeEdit()
{
    document.getElementById("Age").innerHTML='<input type="text" id="AgeE" />&ensp; &ensp;<i onclick="AgeSave()" class="fa-solid fa-check"></i>'
}
function AgeSave()
{
    var AgeE = document.getElementById("AgeE").value
    window.localStorage.setItem('UserAge', AgeE);
    window.location = window.location
}
function GradeEdit()
{ 
    document.getElementById("Grade").innerHTML='<input type="text" id="GradeE" />&ensp; &ensp;<i onclick="GradeSave()" class="fa-solid fa-check"></i>'
}
function GradeSave()
{
    var GradeE = document.getElementById("GradeE").value
    window.localStorage.setItem('UserGrade', GradeE);
    window.location = window.location
}
function AdresseEdit()
{
    document.getElementById("Adresse").innerHTML='<input type="text" id="AdresseE" />&ensp; &ensp;<i onclick="AdresseSave()" class="fa-solid fa-check"></i>'
}
function AdresseSave()
{
    var AdresseE = document.getElementById("AdresseE").value
    window.localStorage.setItem('UserAdresse', AdresseE);
    window.location = window.location
}
function TelephoneEdit()
{
    document.getElementById("Telephone").innerHTML='<input type="text" id="TelephoneE" />&ensp; &ensp;<i onclick="TelephoneSave()" class="fa-solid fa-check"></i>'
}
function TelephoneSave()
{
    var TelephoneE = document.getElementById("TelephoneE").value
    window.localStorage.setItem('UserTelephone', TelephoneE);
    window.location = window.location
}




