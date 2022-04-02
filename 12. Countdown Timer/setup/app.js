const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);
let futureDate = new Date(2022, 3, 02, 23, 59, 0);
// console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours} ${minutes}am`;
// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

getRemaningTime();

function getRemaningTime() {
    const today = new Date().getTime();
    // console.log(today);
    const t = futureTime - today;
    console.log(t);
    //1s=1000ms

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    console.log(oneDay);

    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    console.log(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        }
        return item
    }
    items.forEach(function(item, index) {
        item.innerHTML = values[index];
    });
}