const getFilm=async(id)=>{
    const clef ='375d88a0'
    const url2 =`${url}?apikey=${clef}&i=${id}`
    const r = await fetch(url2);
    const film = await r.json();
    return (film);
}

const url ='https://www.omdbapi.com/'
document.getElementById('btnGo').onclick=async()=>{
const clef ='375d88a0'
const film= 'mickey';
const url2 =`${url}?apikey=${clef}&t=${film}`
const response = await fetch(url2);
const data = await response.json();
console.log(data.imdbID);
const f = await getFilm(data.imdbID)

document.getElementById('titre').textContent=f.Title
document.getElementById('img1').setAttribute('src',f.Poster)
}