let list = document.querySelector(".list");

let API = "https://jsonplaceholder.typicode.com/users";

fetch(API)
  .then((data) => data.json())
  .then((unp) => {
    unp.forEach((el) => {
      console.log(el);
      list.innerHTML += `
      <div class="card">
      
      <img width="150px" src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="img"/>
      <p class="name">name: ${el.name}</p>
      <p class="username">username: ${el.username}</p>
     
      <div class="phone">
      <span><ion-icon name="location"></ion-icon></span>
      <p>${el.address.street}</p>
      </div>
      <div class="phone">
      <span><ion-icon name="call"></ion-icon></span>
      <p>${el.phone}</p>
      </div>
      </div>
        
        `;
    });
  });
