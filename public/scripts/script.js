// variables to calculate days to festival
const festivalDate = new Date("2024-06-20").getTime();
let dateNow = new Date().getTime();
let countDown = festivalDate - dateNow;
let days = Math.round(countDown / (1000 * 3600 * 24));

// days to event counter.
if (days > 1) {
  document.getElementById("countdown").innerHTML = days + " days left!";
} else if (days < 0) {
  document.getElementById("countdown").innerHTML = "Festival was " + -days + " days ago";
} else if (days === 1) {
  document.getElementById("countdown").innerHTML = "Festival starts tomorrow!";
} else {
  document.getElementById("countdown").innerHTML = "Festival begins today!";
}

// toggle menu drop down list
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show"); // classList returns class names
}

// close drop down list when click outside the button
window.onclick = function (event) {
  if (!event.target.matches(".fa-bars")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// cookie banner
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("closeCookieButton").addEventListener("click", () => {
    document.getElementById("cookie-banner").style.display = "none";
  });
});

// AJAX JSON linep
document.addEventListener("DOMContentLoaded", loadMusicians); //creates list of musicians after document is all loaded
function loadMusicians() {
  let xhr = new XMLHttpRequest(); // variable to dynamically comunicate with server
  xhr.open("GET", "data/lineup.json", true); // initializes request
  xhr.onload = function () {
    if (this.status == 200) { // 200 - status of server without any errors
      let musicians = JSON.parse(this.responseText); // converts json into js object
      // sorting musicians compering two time values:
      musicians.sort((a, b) => a.time.localeCompare(b.time));

      let artistMain = "";
      let artistSmall = "";
      let artistAlt = "";

      for (let musician of musicians) {
        let musicianShow = "<ul><li>" + musician.name + " (" + musician.genre + ")<br>" + musician.time + "</li></ul>";
        if (musician.scene === "main") {
          artistMain += musicianShow;
        }
        else if (musician.scene === "small") {
          artistSmall += musicianShow;
        }
        else if (musician.scene === "alternative") {
          artistAlt += musicianShow;
        }
      }
      document.getElementById("scene_main").innerHTML += artistMain;
      document.getElementById("scene_small").innerHTML += artistSmall;
      document.getElementById("scene_alt").innerHTML += artistAlt;
    }
  };

  xhr.onerror = function () {
    console.log("Request error...");
  };
  xhr.send();
}


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
    "In general, you may wear many different colors but yes, there is one restriction: rgb(75,12,68) is not allowed.";
}
function faq4() {
  document.getElementById("answer").innerHTML =
    "Yes, you can bring your own food, but we don't recomend it, because it will be confiscated anyway.";
}
function faq5() {
  document.getElementById("answer").innerHTML =
    "No resttrictions. You can come with your children, grandchildren, parents, granparents, ancessors... ";
}
function faq6() {
  document.getElementById("answer").innerHTML =
    "My favourite color is rgb(75,12,68)";
}

// contact form
// 
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // prevents from sending data and reloading page

  const formData = {
    name: document.getElementById('fullname').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  // gets contacts from local storage, converts into js array,
  // when empty creates empty array
  let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.push(formData);  // adds data object to array
  localStorage.setItem('contacts', JSON.stringify(contacts)); // converts back to json format
  document.getElementById('contactForm').reset(); // resets form to default values
  alert('Message sent successfully!');
});

// validation email
function validateEmail() {
  var email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return false;
  }
  return true;
}



