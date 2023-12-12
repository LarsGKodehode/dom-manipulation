// Vi kan navigere opp og ned i det som er DOM "familie" treet
// Ved hjelp av å ta en DOM node og spørre etter forelderen (parentNode)
// Eller nedover ved å spørre etter barna (children)
// console.log(element)
let element = document.querySelector("#counter")


let parent = element.parentNode
// console.log(parent)

let grandparent = parent.parentNode
// console.log(grandparent)

let greatgrandparent = grandparent.parentNode
// console.log(greatgrandparent)

let greatgreatgrandparant = greatgrandparent.parentNode
// console.log(greatgreatgrandparant)

// console.log(greatgreatgrandparant.parentNode)

// Noe å bite seg merke i er at DOM noder kun har en foreldre
// men de kan ha mange barn
// Dette gjør at navigering nedover er noe mer komplekst enn
// navigering oppover
let children = element.children
// console.log(children)

let childP = children[0]
// console.log(childP)

let childDiv = children[1]
// console.log(childDiv)
