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

  function faq1(){
    document.getElementById("answer").innerHTML="We have no idea where to buy tickets. We only organise concerts and events. They don't pay us for ticket distribution.";
  }
  function faq2(){
    document.getElementById("answer").innerHTML="It is your problem. Do you thin we are going to call you and remind about an event, or maybe send a car for you? C'mon!";
  }

  function faq3(){
    document.getElementById("answer").innerHTML="In general, you may wear many different colors, but yes, there are some restrictions. No rgb(75,12,68) trousers.";
  }

  function faq4(){
    document.getElementById("answer").innerHTML="Of course you can bring your alcohol and drugs. If you want to buy, there are also many dealers arond.";
  }

  function faq5(){
    document.getElementById("answer").innerHTML=" You can bring how many children you want. We are children friendly. There is free alcohol and weed for minors.";
  }

  function faq6(){
    document.getElementById("answer").innerHTML="My favourite color is rgb(75,12,68)";
  }

