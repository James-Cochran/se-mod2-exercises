// Remember, solve each of these prompts 3 ways. 
//1. ONLY forEach
//2. ONLY filter and map
//3. ONLY reduce (spicy)

// Write a function findCheapToys that returns an 
//array of toy names that cost less than $20.

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


//  I have a array of toy objects that hold key value pairs of idividual toy attributes
// I need to return a new array that is only the toy name for toys that cost less than $20

// function findCheapToys () {
//   let underTwenty = ninetiesToys.reduce((acc, toy) => {
//     if (toy.price <= 20) {
//       acc.push(toy.name)
//     }
//     return acc
//   }, [])
//   return underTwenty
// }

// console.log(findCheapToys())

// function findCheapToys () {
//   let underTwenty = ninetiesToys.filter((cheapToys) => {
//     return cheapToys.price <= 20
//   })
//   let result = underTwenty.map((toy) => {
//     return toy.name
//   })
// return result
// }

//console.log(findCheapToys())

// Remix to Ignition came out in 2003, forever changing parties.
// Due to personal matters I only want toys
// made before this song dropped. Write a function called pre2003() that returns an array of 
// toy names released before the year 2003


const early2000sToys = [
  {
    name: "Beyblade",
    releaseYear: 2002,
    price: 12.99
  },
  {
    name: "Bratz Dolls",
    releaseYear: 2001,
    price: 24.99
  },
  {
    name: "Razor Scooter",
    releaseYear: 2000,
    price: 39.99
  },
  {
    name: "Yu-Gi-Oh Cards",
    releaseYear: 2002,
    price: 9.99
  },
  {
    name: "Nintendo DS",
    releaseYear: 2004,
    price: 99.99
  }
];

function pre2003() {
  let earlyToys = early2000sToys.filter((toy) => {
   return toy.releaseYear < 2003
  })
  let toysNames = earlyToys.map((toy) => {
    return toy.name
  })
  return toysNames
}
console.log(pre2003())

// I have very expensive tastes. It's getting out of hand eating caviar 3 meals a day 
// on a Turing student budget, but I must keep up appearances.
// I only want the fanciest cars. Write me a function called findExpensiveCars that returns 
// an array of car names that cost more than my Turing tuition ($25,000).

const classicCars = [
  {
      name: "Ford Mustang",
      releaseYear: 1965,
      price: 26000
  },
  {
      name: "Chevrolet Camaro",
      releaseYear: 1967,
      price: 22000
  },
  {
      name: "Porsche 911",
      releaseYear: 1964,
      price: 55000
  },
  {
      name: "Volkswagen Beetle",
      releaseYear: 1938,
      price: 20000
  },
  {
      name: "Mini Cooper",
      releaseYear: 1959,
      price: 18000
  }
];


function findExpensiveCars () {
  
}
// I'm a bit of a Dune snob and I only want to read the
// books that take place after the events of God Emperor of Dune.
// write me a function called postGodEmperor that only returns 
// an array of descriptions of books that take place after the year 13724.

const duneBooks = [
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 10191,
    description: "The story of Paul Atreides and the desert planet Arrakis."
  },
  {
    title: "Dune Messiah",
    author: "Frank Herbert",
    year: 10207,
    description: "Paul Atreides faces political intrigue and personal challenges as emperor."
  },
  {
    title: "Children of Dune",
    author: "Frank Herbert",
    year: 10217,
    description: "The next generation of Atreides rise to power."
  },
  {
    title: "God Emperor of Dune",
    author: "Frank Herbert",
    year: 13724,
    description: "Leto II, the God Emperor, continues his millennia-long reign."
  },
  {
    title: "Heretics of Dune",
    author: "Frank Herbert",
    year: 15170,
    description: "Thousands of years after Leto's death, new factions emerge."
  },
  {
    title: "Chapterhouse: Dune",
    author: "Frank Herbert",
    year: 15193,
    description: "The Bene Gesserit fight to survive amidst the crumbling of the old empire."
  }
];

// None of these books are as good as Dune.
// Want to prove me wrong? 
// Write a function called findFantasy that returns an 
// array of book titles that belong to the fantasy genre, then we'll talk.

const libraryBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    pages: 310,
    published: 1937
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    pages: 281,
    published: 1960
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    pages: 328,
    published: 1949
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    pages: 635,
    published: 1851
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    pages: 223,
    published: 1997
  }
];