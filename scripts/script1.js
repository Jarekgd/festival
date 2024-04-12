
// AJAX JSON musicians description

document.getElementById("musDesc").addListener = ("load", loadMusiciansDescriptions());
function loadMusiciansDescriptions() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/lineup.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let musician = JSON.parse(this.responseText);
      let output1 = "";
      for (var i in musician) {
        output1 += "<ul>" + "<li>" + musician[i].name + "</li>" + 
        "<li>" + musician[i].genre + "</li>" +
        "<li>" + "<img src=" + musician[i].image +" width='150px'></a>"  + "</li>" +
        "</ul>"+"<br>";
        document.getElementById("musDesc").innerHTML = output1;
        
      }
    }
  };
  xhr.onerror = function () {
    console.log("Request error...");
  };
  xhr.send();
}


