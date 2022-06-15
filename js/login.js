
function redirect()
{
    location.replace("profil.html")
}

function display()
{
    document.getElementById("AlertD").style.display="none";
}
function loginUser()
{
    // Récuperation les parametre de LocalStorage
    var UserLogin = window.localStorage.getItem('UserEmail');
    var UserPassword = window.localStorage.getItem('UserPassword');


    // Récuperation les valeur du formaulaire
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    

    //Vérication si user a bien entrer les valeurs correct

    if (UserLogin == login && UserPassword == password) {
    
        document.getElementById("AlertS").style.display="block";
        setInterval(redirect, 3000);
        
    }else
    {
        
        document.getElementById("AlertD").style.display="block";
        setInterval(display, 1500);
    }

   

    
    
}