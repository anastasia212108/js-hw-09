const delay = document.querySelector(".delay-js");
const step = document.querySelector(".step-js");
const amount = document.querySelector(".amount-js")
const btn = document.querySelector(".button-js")

const clear = step * amount;

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);
  for (let i = 0; i < amountValue; i++) {
    const position = i + 1;
    createPromise(position, delayValue);
delayValue = delayValue + stepValue
  }
})

function createPromise(position, delay) {
  const promise = new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        res({ position, delay });
      } else {
        // Reject
        rej({ position, delay });
      }
    }, delay);
  });
  promise
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}



