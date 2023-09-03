// Trucks
let Scania = {
  id: 1,
  name: "Scania S",
  height: 1,
  width: 1,
  long: 1,
  weight: 1,
};

let Volvo = {
  id: 2,
  name: "Volvo",
  height: 2,
  width: 2,
  long: 2,
  weight: 2,
};

let DAF = {
  id: 3,
  name: "DAF",
  height: 3,
  width: 3,
  long: 3,
  weight: 3,
};

// Trailers
let Nooteboom = {
  id: 1,
  name: "Nooteboom Tiefbett 3+5",
  height: 10,
  width: 10,
  long: 10,
  weight: 10,
};

let Goldhofer = {
  id: 2,
  name: "Goldhofer",
  height: 20,
  width: 20,
  long: 20,
  weight: 20,
};

// Function to calculate and display dimensions
function showDimensions() {
  let trucks = document.getElementById("trucks").value;
  let trailers = document.getElementById("trailers").value;

  let trucksHeight = 0;
  let trucksWidth = 0;
  let trucksLong = 0;
  let trucksWeight = 0;
  let trailersHeight = 0;
  let trailersWidth = 0;
  let trailersLong = 0;
  let trailersWeight = 0;

  if (trucks == "Scania") {
    trucksHeight = Scania.height;
    trucksWidth = Scania.width;
    trucksLong = Scania.long;
    trucksWeight = Scania.weight;
  } else if (trucks == "Volvo") {
    trucksHeight = Volvo.height;
    trucksWidth = Volvo.width;
    trucksLong = Volvo.long;
    trucksWeight = Volvo.weight;
  } else if (trucks == "DAF") {
    trucksHeight = DAF.height;
    trucksWidth = DAF.width;
    trucksLong = DAF.long;
    trucksWeight = DAF.weight;
  }

  if (trailers == "Nooteboom") {
    trailersHeight = Nooteboom.height;
    trailersWidth = Nooteboom.width;
    trailersLong = Nooteboom.long;
    trailersWeight = Nooteboom.weight;
  } else if (trailers == "Goldhofer") {
    trailersHeight = Goldhofer.height;
    trailersWidth = Goldhofer.width;
    trailersLong = Goldhofer.long;
    trailersWeight = Goldhofer.weight;
  }

  let cargoHeight =
    parseFloat(document.getElementById("cargoHeight").value) || 0;
  let cargoWidth = parseFloat(document.getElementById("cargoWidth").value) || 0;
  let cargoLength =
    parseFloat(document.getElementById("cargoLength").value) || 0;
  let cargoWeight =
    parseFloat(document.getElementById("cargoWeight").value) || 0;

  let totalHeight = trucksHeight + trailersHeight + cargoHeight;
  let totalWidth = trucksWidth + trailersWidth + cargoWidth;
  let totalLong = trucksLong + trailersLong + cargoLength;
  let totalWeight = trucksWeight + trailersWeight + cargoWeight;

  document.getElementById("truckHeight").textContent = trucksHeight + " cm";
  document.getElementById("truckWidth").textContent = trucksWidth + " cm";
  document.getElementById("truckLong").textContent = trucksLong + " cm";
  document.getElementById("truckWeight").textContent = trucksWeight + " kg";

  document.getElementById("trailerHeight").textContent = trailersHeight + " cm";
  document.getElementById("trailerWidth").textContent = trailersWidth + " cm";
  document.getElementById("trailerLong").textContent = trailersLong + " cm";
  document.getElementById("trailerWeight").textContent = trailersWeight + " kg";

  document.getElementById("cargoHeight").textContent = cargoHeight + " cm";
  document.getElementById("cargoWidth").textContent = cargoWidth + " cm";
  document.getElementById("cargoLength").textContent = cargoLength + " cm";
  document.getElementById("cargoWeight").textContent = cargoWeight + " kg";

  document.getElementById("totalHeight").textContent = totalHeight + " cm";
  document.getElementById("totalWidth").textContent = totalWidth + " cm";
  document.getElementById("totalLong").textContent = totalLong + " cm";
  document.getElementById("totalWeight").textContent = totalWeight + " kg";
}

function resetDimensions() {
  document.getElementById("trucks").selectedIndex = 0;
  document.getElementById("trailers").selectedIndex = 0;

  document.getElementById("cargoHeight").value = "";
  document.getElementById("cargoWidth").value = "";
  document.getElementById("cargoLength").value = "";
  document.getElementById("cargoWeight").value = "";

  document.getElementById("truckHeight").textContent = "***** ***";
  document.getElementById("truckWidth").textContent = "***** ***";
  document.getElementById("truckLong").textContent = "***** ***";
  document.getElementById("truckWeight").textContent = "***** ***";
  document.getElementById("trailerHeight").textContent = "***** ***";
  document.getElementById("trailerWidth").textContent = "***** ***";
  document.getElementById("trailerLong").textContent = "***** ***";
  document.getElementById("trailerWeight").textContent = "***** ***";
  document.getElementById("cargoHeight").textContent = "***** ***";
  document.getElementById("cargoWidth").textContent = "***** ***";
  document.getElementById("cargoLength").textContent = "***** ***";
  document.getElementById("cargoWeight").textContent = "***** ***";
  document.getElementById("totalHeight").textContent = "***** ***";
  document.getElementById("totalWidth").textContent = "***** ***";
  document.getElementById("totalLong").textContent = "***** ***";
  document.getElementById("totalWeight").textContent = "***** ***";
}
