const url = "https://tp-js-8a65b-default-rtdb.europe-west1.firebasedatabase.app/";
const noeud = "personnes";
let personnes = [];

class Personne {
  constructor(prenom, nom, status = true, id = null) {
    this.prenom = prenom;
    this.nom = nom;
    this.status = status;
    this.id = id; 
  }
}


const afficherHTML = () => {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  for (let p of personnes) {
    const template = document.getElementById("temp");
    const clone = template.content.cloneNode(true);
    let tr = clone.querySelector("tr");

    
    p.status
      ? tr.classList.add("table-success")
      : tr.classList.add("table-danger");

    let td = clone.querySelectorAll("td");
    td[0].innerHTML = p.prenom;
    td[1].innerHTML = p.nom;

    
    let btnEnlever = clone.querySelector(".btn-danger");
    btnEnlever.onclick = async () => {
      let urldel = `${url}${noeud}/${p.id}.json`;
      await axios.delete(urldel); 
      let nouvellesPersonnes = [];
      for (let personne of personnes) {
        if (personne.id !== p.id) {
            nouvellesPersonnes.push(personne);
        }
        }
        personnes = nouvellesPersonnes;
      afficherHTML();
    };

    
    let btnModifier = clone.querySelector(".btn-warning");
    btnModifier.onclick = async () => {
      p.status = !p.status; 
      const urlUpdate = `${url}${noeud}/${p.id}.json`;
      await axios.patch(urlUpdate, { status: p.status }); 
      afficherHTML();
    };

    tbody.appendChild(clone);
  }
};


document.getElementById("btnAjouter").onclick = async () => {
  const prenom = document.getElementById("prenom").value;
  const nom = document.getElementById("nom").value;

 document.getElementById("prenom").value = "";
  document.getElementById("nom").value = "";

  const url2 = `${url}${noeud}.json`;
  const nouvellePersonne = new Personne(prenom, nom);

  const responce = await axios.post(url2, nouvellePersonne);
  nouvellePersonne.id = responce.data.name; 
  personnes.push(nouvellePersonne); 
  afficherHTML();
};



document.addEventListener("DOMContentLoaded", async () => {
  const url2 = `${url}${noeud}.json`;
  const responce = await axios.get(url2);
  const data = responce.data;

  personnes = [];
  for (let id in data) {
    const { prenom, nom, status } = data[id];
    personnes.push(new Personne(prenom, nom, status, id));
  }
  afficherHTML();
});
