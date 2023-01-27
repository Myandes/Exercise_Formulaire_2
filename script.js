function Validation(){
    let nom = document.forms[0]["nom"].value;
    // Validation pour le nom
if (nom.length <= 2 && nom.length >= 100)
{        return true
}    else
{        alert("Le nom n'est pas valide")
    return false    }
}