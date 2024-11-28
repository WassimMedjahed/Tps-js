let fruits = [];


let i = 0;
while (document.getElementById('f' + String(i))) {
    fruits[i] = document.getElementById('f' + String(i)).innerHTML;
    i++;
}

function ajouter() {
    const tbody = document.getElementById('myTbody');
    const fruit = document.getElementById('fruit').value;

    if (fruit.trim() === '') {
        console.log('Le champ fruit est vide.');
        return;
    }

    
    const tr = document.createElement('tr');
    tr.id = "tr" + String(fruits.length);
    tbody.appendChild(tr);

    
    const td1 = document.createElement('td');
    td1.innerHTML = fruit;
    tr.appendChild(td1);

    
    const td2 = document.createElement('td');
    tr.appendChild(td2);

    const btn = document.createElement('button');
    btn.classList.add("btn", "btn-danger");
    btn.onclick = function () {
        supprimer(tr.id);
    };
    td2.appendChild(btn);

    const i = document.createElement('i');
    i.classList.add("fa", "fa-trash");
    btn.appendChild(i);

    
    fruits.push(fruit);
    console.log(fruits); 
}




function supprimer(id) {
    
    document.getElementById(id).remove();

    const index = parseInt(id.slice(2));

    if (index >= 0 && index < fruits.length) {
        fruits.splice(index, 1);

        const tbody = document.getElementById('myTbody');
        let rows = tbody.getElementsByTagName('tr');
        fruits = []; 
        for (let i = 0; i < rows.length; i++) {
            rows[i].id = "tr" + i; 
            fruits.push(rows[i].getElementsByTagName('td')[0].innerHTML); 
        }
    } else {
        console.log('Index invalide');
    }
    console.log(fruits); 
}

console.log(fruits);
