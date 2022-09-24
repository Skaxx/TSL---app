let none = {
  id: 0,
  name: "none",
  height: "Tu pokaże się wynik",
  width: "Tu pokaże się wynik",
  long: "Tu pokaże się wynik",
  weight: "Tu pokaże się wynik",
};

// Trucks

let Scania = {
  id: 1,
  name: "Scania",
  height: 350,
  width: 250,
  long: 650,
  weight: 12000,
};

let Volvo = {
  id: 2,
  name: "Volvo",
  height: 450,
  width: 350,
  long: 850,
  weight: 18000,
};

let DAF = {
  id: 3,
  name: "DAF",
  height: 550,
  width: 150,
  long: 1250,
  weight: 21000,
};

// Trailers

let Nooteboom = {
  id: 1,
  name: "Nooteboom",
  height: 75,
  width: 200,
  long: 1000,
  weight: 1500,
};

let Goldhofer = {
  id: 2,
  name: "Goldhofer",
  height: 80,
  width: 225,
  long: 1250,
  weight: 1350,
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("trucks").onchange = function displayTrucks() {
    if (this.value == "none") {
      document.getElementById("height").innerHTML = none.height;
      document.getElementById("width").innerHTML = none.width;
      document.getElementById("long").innerHTML = none.long;
      document.getElementById("weight").innerHTML = none.weight;
    }
    if (this.value == "Scania") {
      document.getElementById("height").innerHTML = Scania.height + " cm";
      document.getElementById("width").innerHTML = Scania.width + " cm";
      document.getElementById("long").innerHTML = Scania.long + " cm";
      document.getElementById("weight").innerHTML = Scania.weight + " kg";
    }
    if (this.value == "Volvo") {
      document.getElementById("height").innerHTML = Volvo.height + " cm";
      document.getElementById("width").innerHTML = Volvo.width + " cm";
      document.getElementById("long").innerHTML = Volvo.long + " cm";
      document.getElementById("weight").innerHTML = Volvo.weight + " kg";
    }
    if (this.value == "DAF") {
      document.getElementById("height").innerHTML = DAF.height + " cm";
      document.getElementById("width").innerHTML = DAF.width + " cm";
      document.getElementById("long").innerHTML = DAF.long + " cm";
      document.getElementById("weight").innerHTML = DAF.weight + " kg";
    }
  };

  document.getElementById("trailers").onchange = function displayTrailers() {
    if (this.value == "none") {
      document.getElementById("height").innerHTML = none.height;
      document.getElementById("width").innerHTML = none.width;
      document.getElementById("long").innerHTML = none.long;
      document.getElementById("weight").innerHTML = none.weight;
    }
    if (this.value == "Nooteboom") {
      document.getElementById("height").innerHTML = Nooteboom.height + " cm";
      document.getElementById("width").innerHTML = Nooteboom.width + " cm";
      document.getElementById("long").innerHTML = Nooteboom.long + " cm";
      document.getElementById("weight").innerHTML = Nooteboom.weight + " kg";
    }
    if (this.value == "Goldhofer") {
      document.getElementById("height").innerHTML = Goldhofer.height + " cm";
      document.getElementById("width").innerHTML = Goldhofer.width + " cm";
      document.getElementById("long").innerHTML = Goldhofer.long + " cm";
      document.getElementById("weight").innerHTML = Goldhofer.weight + " kg";
    }
  };

  console.log("DOM has been fully loaded and parsed.");
});
