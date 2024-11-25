function afficher(){
    const nom = document.getElementById('nom').value;
    document.getElementById('demo').innerHTML = nom.toUpperCase();
}