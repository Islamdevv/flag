let list = document.querySelector(".list");
let API = "https://restcountries.com/v3.1/all";

fetch(API)
  .then((data) => data.json())
  .then((unp) => {
    unp.forEach((el) => {
      console.log(el);
      list.innerHTML += `
      <div class="card-flags">
      <img width="100%" height="120px" src="${el.flags.png}"/>
      <p>Name: ${el.name.common}</p>
      <p>Population: ${el.population}</p>
      <p>Continents: ${el.continents}</p>
      <p>Area: ${el.area}</p>
      </div>
        `;
    });
  });
