
function calculer(){

    const poids = parseFloat(document.getElementById('poids').value);
    const taille = parseFloat(document.getElementById('taille').value);

    const imc = (poids / (taille**2)).toFixed(1)

    let text = "";

    if(imc < 18.5){
        text = "maigreur";
    }else if (imc < 25){
        text="normal"
    }else if( imc < 30){
        text ="surpoids";
    }else if ( imc < 35){
        text = "obésité";
    } else if (imc < 40){
        text = "sévère";
    } else {
        text = "obésité morbide";
    }


    document.getElementById('imc').innerHTML = `IMC : ${imc}`;
    document.getElementById('text').innerHTML = text;

}