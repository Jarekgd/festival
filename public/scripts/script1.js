
// AJAX JSON musicians description
document.getElementById("musicians-data").addListener = ("load", loadMusiciansDescriptions());
function loadMusiciansDescriptions() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "data/lineup.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let musician = JSON.parse(this.responseText);
      let output1 = "";
      for (var i in musician) {
        output1 += "<div class='musicians-data'>" +  musician[i].name + "<br> <img src=" + musician[i].image +" width='220px'></a>"  +
        "<div style='font-size: 12px'>" + "<br>" + musician[i].description + "</div></div>";
        document.getElementById("musicians-data").innerHTML = output1;
      }
    }
  };
  xhr.onerror = function () {
    console.log("Request error...");
  };
  xhr.send();
}
