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

let sumHeightTruck = 0;
let sumWidthTruck = 0;
let sumLongTruck = 0;
let sumWeightTruck = 0;

let sumHeightTrailer = 0;
let sumWidthTrailer = 0;
let sumLongTrailer = 0;
let sumWeightTrailer = 0;

//ADDING TRUCKS & TRAILERS

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("trucks").onchange = function displayTrucks() {
    if (trucks.value === "Scania") {
      sumHeightT1 = Number((sumHeightTruck - sumHeightTruck) + Scania.height);
      document.getElementById("height").innerHTML = sumHeightT1 + " cm";

      sumWidthT1 = Number(sumWidthTruck - sumWidthTruck + Scania.width);
      document.getElementById("width").innerHTML = sumWidthT1 + " cm";

      sumLongT1 = Number(sumLongTruck - sumLongTruck + Scania.long);
      document.getElementById("long").innerHTML = sumLongT1 + " cm";

      sumWeightT1 = Number(sumWeightTruck - sumWeightTruck + Scania.weight);
      document.getElementById("weight").innerHTML = sumWeightT1 + " kg";
    }

    if (this.value === "Volvo") {
      sumHeightT2 = Number(sumHeightTruck - sumHeightTruck + Volvo.height);
      document.getElementById("height").innerHTML = sumHeightT2 + " cm";

      sumWidthT2 = Number(sumWidthTruck - sumWidthTruck + Volvo.width);
      document.getElementById("width").innerHTML = sumWidthT2 + " cm";

      sumLongT2 = Number(sumLongTruck - sumLongTruck + Volvo.long);
      document.getElementById("long").innerHTML = sumLongT2 + " cm";

      sumWeightT2 = Number(sumWeightTruck - sumWeightTruck + Volvo.weight);
      document.getElementById("weight").innerHTML = sumWeightT2 + " kg";
    }

    if (this.value === "DAF") {
      sumHeightT3 = Number(sumHeightTruck - sumHeightTruck + DAF.height);
      document.getElementById("height").innerHTML = sumHeightT3 + " cm";

      sumWidthT3 = Number(sumWidthTruck - sumWidthTruck + DAF.width);
      document.getElementById("width").innerHTML = sumWidthT3 + " cm";

      sumLongT3 = Number(sumLongTruck - sumLongTruck + DAF.long);
      document.getElementById("long").innerHTML = sumLongT3 + " cm";

      sumWeightT3 = Number(sumWeightTruck - sumWeightTruck + DAF.weight);
      document.getElementById("weight").innerHTML = sumWeightT3 + " kg";
    }
  };

  document.getElementById("trailers").onchange = function displayTrailers() {
    if (this.value === "Nooteboom") {
      sumHeightTR1 = Number(sumHeightTrailer - sumHeightTrailer + Nooteboom.height);
      document.getElementById("height").innerHTML = sumHeightTR1 + " cm";

      sumWidthTR1 = Number(sumWidthTrailer - sumWidthTrailer + Nooteboom.width);
      document.getElementById("width").innerHTML = sumWidthTR1 + " cm";

      sumLongTR1 = Number(sumLongTrailer - sumLongTrailer + Nooteboom.long);
      document.getElementById("long").innerHTML = sumLongTR1 + " cm";

      sumWeightTR1 = Number(sumWeightTrailer - sumWeightTrailer + Nooteboom.weight);
      document.getElementById("weight").innerHTML = sumWeightTR1 + " kg";
    }

    if (this.value === "Goldhofer") {
      sumHeightTR2 = Number(sumHeightTrailer - sumHeightTrailer + Goldhofer.height);
      document.getElementById("height").innerHTML = sumHeightTR2 + " cm";

      sumWidthTR2 = Number(sumWidthTrailer - sumWidthTrailer + Goldhofer.width);
      document.getElementById("width").innerHTML = sumWidthTR2 + " cm";

      sumLongTR2 = Number(sumLongTrailer - sumLongTrailer + Goldhofer.long);
      document.getElementById("long").innerHTML = sumLongTR2 + " cm";

      sumWeightTR2 = Number(sumWeightTrailer - sumWeightTrailer + Goldhofer.weight);
      document.getElementById("weight").innerHTML = sumWeightTR2 + " kg";
    }
  };

  //ADDING VALUES FORM

  let btn1 = document.getElementById("submitBtn");

  let cargoHeight = document.getElementById("cargo-h");
  let cargoWidth = document.getElementById("cargo-w");
  let cargoLong = document.getElementById("cargo-l");
  let cargoTons = document.getElementById("cargo-t");

  let outputField1 = document.getElementById("height");
  let outputField2 = document.getElementById("width");
  let outputField3 = document.getElementById("long");
  let outputField4 = document.getElementById("weight");

  btn1.addEventListener("click", () => {
    outputField1.innerHTML = cargoHeight.value + " cm";
    outputField2.innerHTML = cargoWidth.value + " cm";
    outputField3.innerHTML = cargoLong.value + " cm";
    sumWeight = sumWeight + Number(cargoTons.value);
    outputField4.innerHTML = sumWeight + " kg";
  });

  //END OF ADDING VALUES

  console.log("DOM has been fully loaded and parsed.");
});

//END OF ADDING TRUCKS & TRAILERS
