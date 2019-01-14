// Exercice 1 //

// 1.1 //

function displayinterfaceCinema() { // create function

// TITLE //

  let titleCinema = document.createElement("h1"); // CREATE TITLE H1
  titleCinema.innerHTML = "Cinéma le Dauphin"; // Create text on html
  document.body.appendChild(titleCinema); // add in HTML's body

// PARAGRAPH CINEMA
  let paragraphCinema = document.createElement("p");
  paragraphCinema.innerHTML = "Une salle grand confort, un restaurant et une sélection de vins de qualité. Des avant-premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu'a minuit le vendredi et le samedi).";
  document.body.appendChild(paragraphCinema);

// BUTTON CINEMA //
  let buttonCinema = document.createElement("button");
  button.type = "button";
  button.value = "Voir les films à l'affiche cette semaine";
  document.body.appendChild(buttonCinema);

};
// Exercice 2 //

// 1.2 //

let filmsCinema = [
["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
["IN MY ROOM", "Ulrich Kolher", "Allemagne", "2019", "2h", "vostfr"],
["UN VIOLENT DESIR DE BONHEUR", "Clément Schneider", "France", "2018", "2h03", "vostfr"],
["WHAT'S YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
["GRASS", "Hong-Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]

]; // CREATE DOUBLE DIMENSION TABLE


// 1.3 //

function tableHTML(array) {
  return array; // CREATE FUNCTION AND TABLE
  let table = document.createElement("table");
  let i = 0;
  let j;
  let currentElement;
  let currentElement1;
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  let tbody = document.createElement("tbody");


  while (i < array[0].lenght); {
    currentElement = array[i];
    i++

    th.innerHTML = currentElement;
    tr.appendChild(th);
  }

}


// EXERCICE 2 //

let substancesAndTemperatures = [
["SUBSTANCES", "Température de fusion ousolidification en °C", "Température d’ébullition en °C"],
["acide acétique", "17", "118"],
["acide nitrique", "-41", "86"],
["acide sulfurique", "10", "290"],
["alcool éthylique", "-114", "78"],
["aluminium", "660", "2450"]

]; // CREATE DOUBLE DIMENSION TABLE
