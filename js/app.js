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
  function truckPicker() {
    document.getElementById("trucks").selected
  }

  btnAdding.addEventListener("click", function onClick() {
    document.getElementById("height").innerHTML = truckPicker() + " cm";
    document.getElementById("width").innerHTML = document.getElementById("trucks").selected;
    document.getElementById("long").innerHTML = document.getElementById("trucks").selected;
    document.getElementById("weight").innerHTML = document.getElementById("trucks").selected;
  });

  console.log("DOM has been fully loaded and parsed.");
});

//END OF ADDING TRUCKS & TRAILERS
