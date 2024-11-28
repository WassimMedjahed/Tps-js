let tab = [];

for (let i=0; i<12;i++)





document.getElementById('btnAjouter').onclick = ()=>{

    const template = document.getElementById('info');
    const clone = template.content.cloneNode(true);
    document.getElementById('demo').appendChild(clone);  
}