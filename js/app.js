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
    if (trucks.value == "Scania") {
      ScaniaHeight = Number(Scania.height);
      document.getElementById("truckHeight").innerHTML = ScaniaHeight + " cm";

      ScaniaWidth = Number(Scania.width);
      document.getElementById("truckWidth").innerHTML = ScaniaWidth + " cm";

      ScaniaLong = Number(Scania.long);
      document.getElementById("truckLong").innerHTML = ScaniaLong + " cm";

      ScaniaWeight = Number(Scania.weight);
      document.getElementById("truckWeight").innerHTML = ScaniaWeight + " kg";
    }

    if (trucks.value == "Volvo") {
      VolvoHeight = Number(Volvo.height);
      document.getElementById("truckHeight").innerHTML = VolvoHeight + " cm";

      VolvoWidth = Number(Volvo.width);
      document.getElementById("truckWidth").innerHTML = VolvoWidth + " cm";

      VolvoLong = Number(Volvo.long);
      document.getElementById("truckLong").innerHTML = VolvoLong + " cm";

      VolvoWeight = Number(Volvo.weight);
      document.getElementById("truckWeight").innerHTML = VolvoWeight + " kg";
    }

    if (trucks.value == "DAF") {
      DAFHeight = Number(DAF.height);
      document.getElementById("truckHeight").innerHTML = DAFHeight + " cm";

      DAFWidth = Number(DAF.width);
      document.getElementById("truckWidth").innerHTML = DAFWidth + " cm";

      DAFLong = Number(DAF.long);
      document.getElementById("truckLong").innerHTML = DAFLong + " cm";

      DAFWeight = Number(DAF.weight);
      document.getElementById("truckWeight").innerHTML = DAFWeight + " kg";
    }

    if (trailers.value == "Nooteboom") {
      NooteboomHeight = Number(Nooteboom.height);
      document.getElementById("trailerHeight").innerHTML =
        NooteboomHeight + " cm";

      NooteboomWidth = Number(Nooteboom.width);
      document.getElementById("trailerWidth").innerHTML =
        NooteboomWidth + " cm";

      NooteboomLong = Number(Nooteboom.long);
      document.getElementById("trailerLong").innerHTML = NooteboomLong + " cm";

      NooteboomWeight = Number(Nooteboom.weight);
      document.getElementById("trailerWeight").innerHTML =
        NooteboomWeight + " kg";
    }

    if (trailers.value == "Goldhofer") {
      GoldhoferHeight = Number(Goldhofer.height);
      document.getElementById("trailerHeight").innerHTML =
        GoldhoferHeight + " cm";

      GoldhoferWidth = Number(Goldhofer.width);
      document.getElementById("trailerWidth").innerHTML =
        GoldhoferWidth + " cm";

      GoldhoferLong = Number(Goldhofer.long);
      document.getElementById("trailerLong").innerHTML = GoldhoferLong + " cm";

      GoldhoferWeight = Number(Goldhofer.weight);
      document.getElementById("trailerWeight").innerHTML =
        GoldhoferWeight + " kg";
    }
  };

  document.getElementById("totalValue").onchange =
    function showTotalDimensions() {
    };

  console.log("DOM has been fully loaded and parsed.");
});

//END OF ADDING TRUCKS & TRAILERS
