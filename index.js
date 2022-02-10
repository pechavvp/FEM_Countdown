import { intervalToDuration } from 'date-fns';


const button = document.querySelector(".button");
const selectDate = document.querySelector(".date");
let resultText = document.querySelector(".result");

let now = new Date();
let years = now.getFullYear();
let months = now.getMonth();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

button.addEventListener("click", showTime);


function showTime(event) {
    event.preventDefault();
    let arr = (selectDate.value).split("-");
    if (!selectDate.value) {
        alert("Please select date!");
    } else if (date >= arr[2]) {
        alert("Please select date in future!");
    } else {
        let result = intervalToDuration({
        start: new Date(years, months, date, hours, minutes, 0),
        end: new Date(arr[0], (arr[1])-1, arr[2], 0, 0, 0)
        });
    
        resultText.textContent = `${result.years} Years, ${result.months} Months, ${result.days} Days, ${result.hours} Hours`;
    }
}