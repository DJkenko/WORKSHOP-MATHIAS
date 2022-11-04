const container = document.querySelector(".container");
const coffees = [
  {
    name: "taxis à N-Y",
    image: "images/coffee1.jpg"
  },
  {
    name: "objectif photo",
    image: "images/coffee2.jpg"
  },
  {
    name: "Apareil photo",
    image: "images/coffee3.jpg"
  },
  {
    name: "Couple",
    image: "images/coffee4.jpg"
  },
  {
    name: "Flamand rose",
    image: "images/coffee5.png"
  },
  {
    name: " Photo mi-nuit",
    image: "images/coffee6.jpeg"
  },
  {
    name: "pull vert",
    image: "images/coffee7.jpg"
  },
  {
    name: "Couple 2",
    image: "images/coffee8.jpg"
  },
  {
    name: "Accusantium",
    image: "images/coffee9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">See more</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}