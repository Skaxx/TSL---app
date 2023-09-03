// Trucks
let Scania = {
  id: 1,
  name: "Scania",
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
  name: "Nooteboom",
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

//ADDING TRUCKS & TRAILERS
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnAdding").onclick = function showDimensions() {
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

    let totalHeight = trucksHeight + trailersHeight;
    let totalWidth = trucksWidth + trailersWidth;
    let totalLong = trucksLong + trailersLong;
    let totalWeight = trucksWeight + trailersWeight;

    document.getElementById("truckHeight").textContent = trucksHeight + " cm";
    document.getElementById("truckWidth").textContent = trucksWidth + " cm";
    document.getElementById("truckLong").textContent = trucksLong + " cm";
    document.getElementById("truckWeight").textContent = trucksWeight + " kg";

    document.getElementById("trailerHeight").textContent =
      trailersHeight + " cm";
    document.getElementById("trailerWidth").textContent = trailersWidth + " cm";
    document.getElementById("trailerLong").textContent = trailersLong + " cm";
    document.getElementById("trailerWeight").textContent =
      trailersWeight + " kg";

    document.getElementById("totalHeight").textContent = totalHeight + " cm";
    document.getElementById("totalWidth").textContent = totalWidth + " cm";
    document.getElementById("totalLong").textContent = totalLong + " cm";
    document.getElementById("totalWeight").textContent = totalWeight + " kg";
  };

  console.log("DOM has been fully loaded and parsed.");
});
