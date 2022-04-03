// Cle pour l'API
const APIKEY = "b4cd719a32430acd2833cab503127bec";

// Fonction d'appel de l'API

function ApiCall(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

  let data = [];

  fetch(url).then((response) =>
    response
      .json()
      .then((data) => {
        console.log(data);
        document.getElementById("city").innerHTML = `<p>${data.name}</p>`;
        document.getElementById(
          "temp"
        ).innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i> <p>${data.main.temp}°</p>`;
        document.getElementById(
          "rain"
        ).innerHTML = `<i class="fa-solid fa-droplet"></i> <p>${data.main.humidity}%</p>`;
        document.getElementById(
          "wind"
        ).innerHTML = `<i class="fa-solid fa-wind"></i> <p>${data.wind.speed} Km/h</p>`;
      })
      .catch((err) => console.log("Erreur : " + err))
  );
}

// Premier Appel

ApiCall("Toulouse");

// Appel apres submit

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  city = document.getElementById("input").value;
  ApiCall(city);
});
