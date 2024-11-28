const fruits=['pomme','poire','cerise'];
localStorage.setItem('fruits',JSON.stringify(fruits));


const data = localStorage.getItem('fruits');
if (data){
    const fruits= JSON.parse(data);
}

console.log(fruits)