var spin = $(".spinBtn");
var chosen = $("#chosenRest");

const restaurants = [
  "5-8",
  "Buffalo Wild Wings",
  "Clives",
  "AZ Tacos",
  "Mavericks",
  "Chipotle",
  "Freddys",
  "Dicks",
  "Lemon Grass",
  "MT Noodles",
  "Panda Express",
  "Jets Pizza",
  "Chans",
  "Naf Naf",
  "Tacos El Paraiso",
  "MC's Tap House",
  "Olympia Cafe",
  "Duffy's Bar and Grill",
  "Olive Garden",
  "Wahlburgers",
  "El Toro",
  "Pizza Karma",
  "Bonchon"
];

spin.on("click", function () {
  let max = restaurants.length;
  let i = Math.floor(Math.random() * max);
  chosen.text("");
  chosen.text("Please Wait");
  setTimeout(function () {
    chosen.text(restaurants[i]);
  }, 2000);
  console.log(restaurants[i]);
});
