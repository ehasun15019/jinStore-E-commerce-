// index(hero section) dropdown start
document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // show the dropdown menu by default
    dropdownMenu.classList.add('show');
})
// index(hero section) dropdown end


// index(countdown) start
var countDownDate = new Date("March 18, 2025 15:37:25").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the countdown is over
    if (distance < 0) {
        clearInterval(x);
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    // Update the countdown display for both demo and demo2
    var dayElement = document.getElementById("days");
    var hourElement = document.getElementById("hours");
    var minuteElement = document.getElementById("minutes");
    var secondElement = document.getElementById("seconds");

    var dayElement2 = document.getElementById("days2");
    var hourElement2 = document.getElementById("hours2");
    var minuteElement2 = document.getElementById("minutes2");
    var secondElement2 = document.getElementById("seconds2");

    var dayElement3 = document.getElementById("days3");
    var hourElement3 = document.getElementById("hours3");
    var minuteElement3 = document.getElementById("minutes3");
    var secondElement3 = document.getElementById("seconds3");

    // Add values to each unit and apply styling
    dayElement.innerHTML = days + "d";
    hourElement.innerHTML = hours + "h";
    minuteElement.innerHTML = minutes + "m";
    secondElement.innerHTML = seconds + "s";

    dayElement2.innerHTML = days + "d";
    hourElement2.innerHTML = hours + "h";
    minuteElement2.innerHTML = minutes + "m";
    secondElement2.innerHTML = seconds + "s";

    dayElement3.innerHTML = days + "d";
    hourElement3.innerHTML = hours + "h";
    minuteElement3.innerHTML = minutes + "m";
    secondElement3.innerHTML = seconds + "s";


    // Styling: Add background color and padding to each time unit
    var timeElements = [dayElement, hourElement, minuteElement, secondElement, dayElement2, hourElement2, minuteElement2, secondElement2, dayElement3, hourElement3, minuteElement3, secondElement3];

    timeElements.forEach(function(element) {
        element.style.backgroundColor = "#EA580C";
        element.style.padding = "5px 10px";
        element.style.margin = "0 2px";
        element.style.borderRadius = "5px";
        element.style.color = "white"; 
        element.style.fontSize = "0.8rem";
        element.style.fontWeight = "bold";
    });

}, 1000);
// index(countdown) end


// cart start
function imgGallery() {
const mainImg = document.querySelector('.details_img');
const smallImg = document.querySelectorAll('.details_small-img');

smallImg.forEach((img) => {
    img.addEventListener('click', function(){
    mainImg.src = this.src;
    })
})
}

imgGallery();
// cart end