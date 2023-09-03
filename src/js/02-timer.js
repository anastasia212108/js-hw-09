import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import * as basicLightbox from 'basiclightbox';

const inputText = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("button");

btnStart.disabled = true;
const elements = {
    days: document.querySelector(".days-js"),
    hours: document.querySelector(".hours-js"),
    minutes: document.querySelector(".minutes-js"),
    seconds: document.querySelector(".seconds-js")
}

const currentDate = new Date();



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  
  onClose(selectedDates) {
      if (selectedDates[0] <= new Date()) {
          const windowAlert = window.alert("Please choose a date in the future");
//           const instance = basicLightbox.create(windowAlert);
//           function onShow() { inputText.addEventListener("click", onEscClick) };
//           function onClose() { inputText.removeEventListener("click", onEscClick) };
//           instance.show(onShow);  
//           instance.close(onClose);
//   function onEscClick(evt) {
//     if (evt.code === "a") {
//       basicLightboxEl.close();
//     }
//   }

      } else {
          
          btnStart.disabled = false;
        
          btnStart.addEventListener("click", handlerClick);
          function handlerClick() {
              let ms = selectedDates[0].getTime() - currentDate.getTime();
                function addLeadingZero(value) {
                  return value.toString().padStart(2, "0");
              }
              elements.days.textContent = addLeadingZero(convertMs(ms).days);
              elements.hours.textContent = addLeadingZero(convertMs(ms).hours);
                  elements.minutes.textContent = addLeadingZero(convertMs(ms).minutes);
                  elements.seconds.textContent = addLeadingZero(convertMs(ms).seconds);
              function convertMs(ms) {
                  let second = 1000;
                  let minute = second * 60;
                  let hour = minute * 60;
                  let day = hour * 24;

                  let days = Math.floor(ms / day);
                  let hours = Math.floor((ms % day) / hour);
                  let minutes = Math.floor(((ms % day) % hour) / minute);
                  let seconds = Math.floor((((ms % day) % hour) % minute) / second);

                  return { days, hours, minutes, seconds };
           
              }
            
                   const idTimer = setInterval(() => {
                  ms -= 1000;
                  elements.days.textContent = addLeadingZero(convertMs(ms).days);
                  elements.hours.textContent = addLeadingZero(convertMs(ms).hours);
                  elements.minutes.textContent = addLeadingZero(convertMs(ms).minutes);
                  elements.seconds.textContent = addLeadingZero(convertMs(ms).seconds);
                          if (ms < 1000) {
                      clearInterval(idTimer);
                  }
              }, 1000);
        
          
          };
      }
      
    },
  
 
};

inputText.addEventListener("click", flatpickr);
flatpickr(inputText, options);

















// const current = {
//     day: currentDate.getDay(),
//     hour: currentDate.getHours(),
//     minute: currentDate.getMinutes(),
//     second: currentDate.getSeconds()
// } 

// function formatTime(value) {
//     return value.toString().padStart(2, "0");
// }

// const targetDate =
// let x = targetDate - currentDate
// const id = setInterval(() => {
//     let x -=1
// }, 1000);
// setTimeout(() => {
//     clearInterval(id);
// }, x * 1000);
              
           
   

// const currentDate = new Date();
// const targetDate = new Date("sep 05 2023");
// console.log(targetDate - currentDate);


// setInterval(() => {
// }, 1000);



