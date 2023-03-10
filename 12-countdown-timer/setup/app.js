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
const countdownItems = document.querySelectorAll(".deadline-format h4");

const temp = new Date();
const tempYear = temp.getFullYear();
const tempMonth = temp.getMonth();
const tempDate = temp.getDate();

// const futureDate = new Date(2023, 2, 4, 11, 30, 0);

// whenever the code is run, the application with countdown of 10 days
const futureDate = new Date(tempYear, tempMonth, tempDate + 10, 11, 00, 00);

const year = futureDate.getFullYear();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();

if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}

giveaway.textContent = `giveway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// Future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const todayTime = new Date().getTime();

  const timeRemaining = futureTime - todayTime;
  // console.log(timeRemaining);

  // 1 second = 1000 milliseconds
  // 1 minute = 60 seconds
  // 1 hour = 60 minutes
  // 1 day = 24 hours
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Get countdown values
  const daysRemaining = Math.floor(timeRemaining / oneDay);
  const hoursRemaining = Math.floor((timeRemaining % oneDay) / oneHour);
  const minutesRemaining = Math.floor((timeRemaining % oneHour) / oneMinute);
  const secondsRemaining = Math.floor((timeRemaining % oneMinute) / 1000);

  const values = [
    daysRemaining,
    hoursRemaining,
    minutesRemaining,
    secondsRemaining,
  ];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  countdownItems.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (timeRemaining < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class=expired>sorry, the giveaway has expired</h4>`;
  }
}

const countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
