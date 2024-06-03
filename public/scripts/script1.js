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
        output1 += "<div>" + "<div>" +   musician[i].name + "</div> <img src=" + musician[i].image +" width='200px'></a>"  +
        "<div style='font-size: 12px'>" + musician[i].description + "</div>" +"</div><br>";
        document.getElementById("musDesc").innerHTML = output1;
      }
    }
  };
  xhr.onerror = function () {
    console.log("Request error...");
  };
  xhr.send();
}

// fetch("./data/lineup.json")
  // .then(response => response.json())
  // .then(lineup => {
  //   let output = "";
  //   lineup.forEach(musician => {
  //     output +=
  //       "<div>" +
  //       "<div>" +
  //       musician[i].name +
  //       "</div> <img src=" +
  //       musician[i].image +
  //       " width='200px'></a>" +
  //       "<div style='font-size: 12px'>" +
  //       musician[i].description +
  //       "</div>" +
  //       "</div><br>";
  //   });
  //   document.getElementById("musDesc").innerHTML = output;
  // });
