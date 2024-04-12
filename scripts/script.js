let festivalDate = new Date("2025-01-20").getTime();
let dateNow = new Date().getTime();
let countDown = festivalDate - dateNow;
let days = Math.round(countDown / (1000 * 3600 * 24));

// days to event counter.
if (days > 1) {
  document.getElementById("countdown").innerHTML = days + " days left!";
} else if (days < 0) {
  document.getElementById("countdown").innerHTML = "Festival has finished.";
} else if (days == 1) {
  document.getElementById("countdown").innerHTML = "Festival statrs tomorrow!";
} else {
  document.getElementById("countdown").innerHTML = "Festival begins today!";
}

// cookie banner
document.getElementById("closeCookieButton").addEventListener("click", (e) => {
  document.getElementById("cookie-banner").style.display = "none";
});

// toggle menu drop down list
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// close drop down list when click outside the button
window.onclick = function (event) {
  if (!event.target.matches(".fa-bars")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// faq section display text on menu click
function faq1() {
  document.getElementById("answer").innerHTML =
    "We have no idea where to buy tickets. We only organise concerts and events. They don't pay us for ticket distribution.";
}
function faq2() {
  document.getElementById("answer").innerHTML =
    "It is your problem. Do you think we are going to call you and remind about an event, or maybe send a car for you? C'mon!";
}
function faq3() {
  document.getElementById("answer").innerHTML =
    "In general, you may wear many different colors but yes, there is one restriction:  rgb(75,12,68) trousers not allowed.";
}
function faq4() {
  document.getElementById("answer").innerHTML =
    "Of course you can bring your alcohol and drugs. If you want to buy, there are also many dealers around.";
}
function faq5() {
  document.getElementById("answer").innerHTML =
    " You can bring your children if you want. We are children friendly. There is free alcohol and weed for minors.";
}
function faq6() {
  document.getElementById("answer").innerHTML =
    "My favourite color is rgb(75,12,68)";
}


// AJAX JSON linep
document.getElementById("lineup").addListener = ("load", loadMusicians());
function loadMusicians() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/lineup.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let musicians = JSON.parse(this.responseText);
      let output = "";
      for (var i in musicians) {
        output += "<ul>" + "<li>" + musicians[i].name + "</li>" + "</ul>";
        document.getElementById("lineup").innerHTML = output;
      }
    }
  };
  xhr.onerror = function () {
    console.log("Request error...");
  };
  xhr.send();
}

// AJAX JSON musicians description
document.getElementById("musDesc").addListener = ("load", loadMusiciansDescriptions());
function loadMusiciansDescriptions() {
  let xhr1 = new XMLHttpRequest();
  xhr1.open("GET", "./data/lineup.json", true);
  xhr1.onload = function () {
    if (this.status == 200) {
      let musician = JSON.parse(this.responseText);
      let output1 = "";
      for (var i in musician) {
        output1 += "<ul>" + "<li>" + musician[i].name + "</li>" + "</ul>";
        document.getElementById("musDesc").innerHTML = output1;
      }
    }
  };
  xhr1.onerror = function () {
    console.log("Request error...");
  };
  xhr.send();
}

// form validation
