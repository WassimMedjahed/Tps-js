let series = [];
let tabFav = [];

localStorage.setItem('fav',JSON.stringify(tabFav));


const getSerie = async (id) => {
    const clef = "375d88a0";
    const url = "http://www.omdbapi.com/";
    const url2 =`${url}?apikey=${clef}&i=${id}`
    const response = await fetch(url2);
    const serie = await response.json();
    return serie;
}

const afficheSeries =  () => {
const tbody = document.getElementById("myTbody");
  tbody.innerHTML = "";
  for (let s of series) {
    const template = document.getElementById("templateTr");
    const clone = template.content.cloneNode(true);
    clone.querySelectorAll("td")[0].innerHTML = s.Title;
    clone.querySelectorAll("td")[1].innerHTML = s.Year;
    clone.querySelector("img").src = s.Poster;
    clone.querySelector("img").alt = s.Title;
    clone.querySelector("button").onclick = async (evt) => {
      const tr = evt.target.closest("tr");
      const i = tr.rowIndex - 1;
      let serie= await getSerie(series[i].imdbID);
    
       tabFav.push(serie);
      afficherFav();
      series.splice(i, 1);
      afficheSeries();
      localStorage.setItem('fav',JSON.stringify(tabFav));
    };
    tbody.append(clone);
  }
};

const afficherFav = () => {
  const tbody2 = document.getElementById("myTbody2");
  tbody2.innerHTML = "";

  for (let f of tabFav) {
    const template = document.getElementById("templateTr2");
    const clone = template.content.cloneNode(true);
    clone.querySelectorAll("td")[0].innerHTML = f.Title;
    clone.querySelectorAll("td")[1].innerHTML = f.Year;
    clone.querySelectorAll("td")[2].innerHTML = f.imdbRating;

    clone.querySelector("img").src = f.Poster;
    clone.querySelector("img").alt = f.Title;
    clone.querySelector("button").onclick = (evt) => {
      const tr = evt.target.closest("tr");
      const i = tr.rowIndex - 1;
      tabFav.splice(i, 1);
      afficherFav();
      localStorage.setItem('fav',JSON.stringify(tabFav));

    };
    tbody2.append(clone);
  }
};

document.getElementById("btnSearch").onclick = async () => {
  
  let film = document.getElementById("film").value;
  document.getElementById("film").value = "";
  const clef = "375d88a0";
  const url = "http://www.omdbapi.com/";
  const url2 =`${url}?apikey=${clef}&s=${film}&type=series`;
  const response = await fetch(url2);
  const serie = await response.json();

  series = serie.Search;
  afficheSeries();
};
const data = localStorage.getItem('series');
if (data){
    tabFav= JSON.parse(data);
    afficherFav();
}
