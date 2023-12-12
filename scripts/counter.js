function createCounter(initialCount) {
  // HTLM for elementet vårt
  let templateCounter = `
    <p>Antall: <span>${initialCount}</span></p>
  
    <div>
      <button class="increment-button">+</button>
      <button class="decrement-button">-</button>
      <button class="reset-button">Reset</button>
    </div>
  `

  // lager det først HTLM elementet
  let counter = document.createElement("div")
  counter.innerHTML = templateCounter


  // Her henter vi ut de forksjellige elemente vi er interresert i
  let display = counter.querySelector("span")
  let incrementButton = counter.querySelector(".increment-button")
  let decrementButton = counter.querySelector(".decrement-button")
  let resetButton = counter.querySelector(".reset-button")

  // Definer de forskjellige funksjonalitet counteren vår skal ha
  function increment() {
    let currentCount = parseInt(display.textContent)
    display.textContent = currentCount + 1
  }

  function decrement() {
    let currentCount = parseInt(display.textContent)

    if (currentCount > 0) {
      display.textContent = currentCount - 1
    }
  }

  function reset() {
    display.textContent = 0
  }

  // Koble funkjsonen til de forskjellige knappen
  incrementButton.addEventListener("click", increment)
  decrementButton.addEventListener("click", decrement)
  resetButton.addEventListener("click", reset)

  // Returner elementet og la den som kaller på det bestemme hva som skal gjøres videre
  return counter
}

let counter1 = createCounter(0)
let counter2 = createCounter(0)
let counter3 = createCounter(0)
let counter4 = createCounter(0)

document.querySelector("#counter1").appendChild(counter1)
document.querySelector("#counter2").appendChild(counter2)
document.querySelector("#counter3").appendChild(counter3)
document.querySelector("#counter4").appendChild(counter4)

// Det er og mulig å gjøre dette mer fleksibelt med data-attributter, lister og løkker
const counterRoots = document.querySelectorAll("[data-counter]")
for (let element of counterRoots) {
  let initialCount = element.dataset.counter
  element.appendChild(createCounter(initialCount))
}