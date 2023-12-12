// Vi kan konstrure DOM noder element for element
let test1 = document.createElement("div")

let heading = document.createElement("h1")
heading.textContent = "Heading"
test1.appendChild(heading)

let paragraph = document.createElement("p")
paragraph.textContent = "Something special"
test1.appendChild(paragraph)

let insertionPoint = document.querySelector("main")
insertionPoint.appendChild(test1)


// Vi kan konstruer store biter HTML enkler ved hjelp innerHTLM()
let test2 = document.createElement("div")
let initialCount = 0
// Ikke bruk dette viss du bruker bruker data
test2.innerHTML = `
  <p>Antall: <span>${initialCount}</span></p>

  <div>
    <button class="increment-button">+</button>
    <button class="decrement-button">-</button>
    <button class="reset-button">Reset</button>
  </div>
`

let insertionPoint2 = document.querySelector("#test2")
insertionPoint2.appendChild(test2)
