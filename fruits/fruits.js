let fruits = []

    let i = 0;

    while(document.getElementById('f'+String(i))){
        fruits[i] = document.getElementById('f'+String(i)).innerHTML;
        i++;
    }



function ajouter(){
    const tbody = document.getElementById('myTbody');
    const fruit = document.getElementById('fruit').value;

    const tr = document.createElement('tr');
    tr.id="tr"+String(fruits.length);
    tbody.appendChild(tr);

    const td1 = document.createElement('td');
    td1.innerHTML = fruit;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    tr.appendChild(td2); 

    const btn = document.createElement('button');
    btn.classList.add("btn");
    btn.classList.add("btn-danger");
    btn.onclick = function() {
        supprimer(tr.id);  
    };
    td2.appendChild(btn)

    const i = document.createElement('i');
    i.classList.add("fa");
    i.classList.add("fa-trash");
    btn.appendChild(i)

}




function supprimer(id){
       document.getElementById(id).remove();
}