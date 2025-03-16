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

    // Add values to each unit and apply styling
    dayElement.innerHTML = days + "d";
    hourElement.innerHTML = hours + "h";
    minuteElement.innerHTML = minutes + "m";
    secondElement.innerHTML = seconds + "s";


    // Styling: Add background color and padding to each time unit
    var timeElements = [dayElement, hourElement, minuteElement, secondElement];

    timeElements.forEach(function(element) {
        element.style.backgroundColor = "#FED7AA";
        element.style.padding = "5px 10px";
        element.style.margin = "0 2px";
        element.style.borderRadius = "5px";
        element.style.color = "#C2410C"; 
        element.style.fontSize = "0.8rem";
        element.style.fontWeight = "bold";
    });

}, 1000);


// increment-decrement-sec start
let counter = 1;
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", () => {
    counter++;
    counterElement.textContent = counter;
    decrementButton.classList.remove("disabled"); // Enable decrement button
});

decrementButton.addEventListener("click", () => {
    if (counter > 1) {
        counter--;
        counterElement.textContent = counter;
        if (counter === 1) {
            decrementButton.classList.add("disabled"); // Disable if 1
        }
    }
});
// increment-decrement-sec end


// Boostrap tooltips (for whatsup button) start
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
// Boostrap tooltips (for whatsup button) end