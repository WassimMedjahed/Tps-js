function calculer()
{

    const litres = parseFloat(document.getElementById('litres').value);
    const kilos = parseFloat(document.getElementById('kilos').value);
    document.getElementById('litres').value = ''
    document.getElementById('kilos').value = ''
    const alert = document.getElementById('alert')
    
    let status = "";
    let couleur = "";

    const conso = 100*litres/kilos;

    if(conso < 5.5){
        status = "Économique";
        couleur ="alert alert-success mt-4"
    } else if( conso< 7.5){
        status = "Normal"
        couleur = "alert alert-warning mt-4"
    }else {
        status = "Danger"
        couleur = "alert alert-danger mt-4"
    }

    document.getElementById('conso').innerHTML = conso;
    document.getElementById('status').innerHTML = status;
    alert.className=couleur



}
document.getElementById('kilos').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculer();
    }
});

document.getElementById('litres').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculer();
    }
});


