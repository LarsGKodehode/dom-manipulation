function createCounter(initialCount, insertionPoint) {
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

  // Setter hele elementet vårt inn i dokumentet
  insertionPoint.appendChild(counter)
}

let counter1 = document.querySelector("#counter1")
let counter2 = document.querySelector("#counter2")
let counter3 = document.querySelector("#counter3")
let counter4 = document.querySelector("#counter4")

createCounter(0, counter1)
createCounter(0, counter2)
createCounter(0, counter3)
createCounter(0, counter4)