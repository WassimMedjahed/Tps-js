class personne {
    constructor(prenom,nom,status){

        this.prenom = prenom;
        this.nom = nom;
        this.status = true;
    }
}

let personnes = [];


document.getElementById('btnAjouter').onclick = () => {

    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;

    document.getElementById('prenom').value = '';
    document.getElementById('nom').value = '';


    let p = new personne(prenom,nom);
    personnes.push(p);

    const template = document.getElementById('temp');
    const clone = template.content.cloneNode(true);
    clone.querySelectorAll("td")[0].innerHTML = prenom;
    clone.querySelectorAll("td")[1].innerHTML = nom;
    document.getElementById('new').appendChild(clone);

}

document.querySelector('.btnSupprimer').onclick = (event) => {
    event.target.closest('tr').remove();
}
