/*
JS Approaching Problems Many Ways Scratchpad

To run the code in this file, run the command:
  node lessons/approaching_problems_many_ways.js
*/ 
console.log("approaching_problems_many_ways.js is running")


/*  PROMPT:
Write a function findCheapToys that returns an array of toy names that cost less than $20.

Expected output => [ 'Tamagotchi', 'Super Soaker', 'Pogs' ]
*/

const ninetiesToys = [
  {
      name: "Tamagotchi",
      releaseYear: 1996,
      price: 15.99
  },
  {
      name: "Furby",
      releaseYear: 1998,
      price: 29.99
  },
  {
      name: "Super Soaker",
      releaseYear: 1989,
      price: 19.99
  },
  {
      name: "Pogs",
      releaseYear: 1991,
      price: 5.99
  },
  {
      name: "Game Boy",
      releaseYear: 1989,
      price: 89.99
  }
];


/* Round 1: forEach
Solve the prompt using a forEach. You may not use any other iterator methods.
*/

findCheapToys()



/* Round 2: filter and map
Solve the prompt using a filter and map. You may not use any other iterator methods.
*/

findCheapToys()

/* Round 3: reduce
Solve the prompt using a reduce. You may not use any other iterator methods.
*/
// iterate through the nineties toys to return an array of toy names that are less than 20 
// .reduce is like a .forEach without having to create the empty array

//        reduce skeletons 
  
// retuns a number
// const total = numbers.reduce((acc, num) => {
//     //do stuff here
//     return acc
//   }, 0)
 
// returns an array
//   const result = toys.reduce((acc, toy) => {
//     //do stuff here
//     return acc
//   }, [])

    // returns an object
// const result = elephants.reduce((acc, elephant) => {
//     //do stuff here
//     return acc
//   }, {})

// function findCheapToys () {
//     const cheapToyNames = ninetiesToys.reduce((acc, toy) => {
//         if (toy.price < 20) {
//             acc.push(toy.name)
//         }
//         return acc
//     }, [])
//     return cheapToyNames
// }
// console.log(findCheapToys())