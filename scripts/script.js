let festivalDate = new Date("2024-06-24").getTime();
let dateNow = new Date().getTime();
let countDown = festivalDate - dateNow;
let days = Math.round(countDown/(1000*3600*24));


if (days > 1){
  document.getElementById("countdown").innerHTML=days +" days left!";
}
  else if (days < 0) {
    document.getElementById("countdown").innerHTML="Festival has finished.";
  }
  else if (days == 1) {
    document.getElementById("countdown").innerHTML="Festival statrs tomorrow!";
  }
  else{
    document.getElementById("countdown").innerHTML="Festival begins today!";
  }


function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.fa-bars')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

