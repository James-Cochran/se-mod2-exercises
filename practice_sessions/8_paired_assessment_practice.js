
const animals = [
  {
    name:'Rhino',
    weight: 1700,
    type: 'Herbivore',
    home: 'Africa'
  },
  {
    name:'Grizly Bear',
    weight: 800,
    type: 'Omnivore',
    home: 'North America'
  },
  {
    name:'Monkey',
    weight: 60,
    type: 'Herbivore',
    home: 'Africa'
  },
    {
    name:'Lion',
    weight: 400,
    type: 'Carnivore',
    home: 'Africa'
  },
    {
    name:'Tiger',
    weight: 600,
    type: 'Carnivore',
    home: 'Africa'
  },
  {
    name:'Wolf',
    weight: 90,
    type: 'Carnivore',
    home: 'North America'
  },
  {
    name: 'Panda',
    weight: 700,
    type: 'Herbivore',
    home: 'Asia'
  }
]


const zoos = [
  {
    name: 'Denver Zoo',
    maxWeight: 10000,
    typesAllowed:['Herbivore', 'Omnivore'],
    continents:['Africa', 'Asia', 'North America']
  },
  {
    name: 'Bronx Zoo',
    maxWeight: 5000,
    typesAllowed:['Herbivore'],
    continents:['Africa', 'Asia', 'North America']
  },
  {
    name: 'San Diego Wild Animal Park',
    maxWeight: 7500,
    typesAllowed:['Herbivore', 'Carnivore'],
    continents:['Asia', 'North America']
  },
  {
    name: 'Kansas City Zoo',
    maxWeight: 8000,
    typesAllowed:['Omnivore', 'Carnivore'],
    continents:['Africa', 'Asia']
  },
  {
    name: 'Central Park Zoo',
    maxWeight: 7000,
    typesAllowed:['Carnivore'],
    continents:['Africa', 'North America']
  },
    {
    name: 'San Antonio Zoo',
    maxWeight: 3000,
    typesAllowed:['Herbivore', 'Omnivore'],
    continents:['Asia', 'North America']
  },
]

// return an array with all the zoos that allow Carnivores



// findCarnivores()
// e.g.
// [ { name: 'San Diego Wild Animal Park',
//     maxWeight: 7500,
//     typesAllowed: [ 'Herbivore', 'Carnivore' ],
//     continents: [ 'Asia', 'North America' ] },
//   { name: 'Kansas City Zoo',
//     maxWeight: 8000,
//     typesAllowed: [ 'Omnivore', 'Carnivore' ],
//     continents: [ 'Africa', 'Asia' ] },
//   { name: 'Central Park Zoo',
//     maxWeight: 7000,
//     typesAllowed: [ 'Carnivore' ],
//     continents: [ 'Africa', 'North America' ] } ]




// return an array of zoos that can take animals from Asia



//e.g.
//  [ { name: 'Denver Zoo',
//     maxWeight: 10000,
//     typesAllowed: [ 'Herbivore', 'Omnivore' ],
//     continents: [ 'Africa', 'Asia', 'North America' ] },
//   { name: 'Bronx Zoo',
//     maxWeight: 5000,
//     typesAllowed: [ 'Herbivore' ],
//     continents: [ 'Africa', 'Asia', 'North America' ] },
//   { name: 'San Diego Wild Animal Park',
//     maxWeight: 7500,
//     typesAllowed: [ 'Herbivore', 'Carnivore' ],
//     continents: [ 'Asia', 'North America' ] },
//   { name: 'Kansas City Zoo',
//     maxWeight: 8000,
//     typesAllowed: [ 'Omnivore', 'Carnivore' ],
//     continents: [ 'Africa', 'Asia' ] },
//   { name: 'San Antonio Zoo',
//     maxWeight: 3000,
//     typesAllowed: [ 'Herbivore', 'Omnivore' ],
//     continents: [ 'Asia', 'North America' ] } ]


// make a function that takes an animal name and returns their home continent

function nameThem(name) {
  return animals.reduce((acc, animal) => {
    if(animal.name.includes(name)) {
      return animal.home
    }
    return acc;
  }, 0)

}
// nameThem('Grizly Bear')


// e.g.
// findHome('Tiger')
// returns => 'Africa'



// make a function that takes a quanitity and a animal name and returns their total weight

function heavy(name, count) {
  let weight = animals.reduce((acc, animal) => {
    if(animal.name.includes(name)) {
      return animal.weight * count
    }

    return acc;
  },0)
  return weight
}

heavy('Monkey', 2)

//e.g. 

// weighingAnimals('Wolf', 6)
// returns => 540


// return an array with the zoos that can take a Wolf
// remember that it has to match the type and continent

// e.g.


// returns => 
//  [ { name: 'San Diego Wild Animal Park',
//     maxWeight: 7500,
//     typesAllowed: [ 'Herbivore', 'Carnivore' ],
//     continents: [ 'Asia', 'North America' ] },
//   { name: 'Central Park Zoo',
//     maxWeight: 7000,
//     typesAllowed: [ 'Carnivore' ],
//     continents: [ 'Africa', 'North America' ] } ]


// find the animal that weighs the most.


// find the zoo with the least weight allowed.

 
// create an array of objects with the zoo properties && just the names of the animals allowed in it.


////////////////// BONUS ROUND!!!! ///////////////////

// find the max amount of each animal in a specific zoo

// create a new object with the zoo name as the key and the animals allowed as the value


// e.g.
// { 'Denver Zoo': [ 'Rhino', 'Grizly Bear', 'Monkey', 'Panda' ],
//   'Bronx Zoo': [ 'Rhino', 'Monkey', 'Panda' ],
//   'San Diego Wild Animal Park': [ 'Wolf', 'Panda' ],
//   'Kansas City Zoo': [ 'Lion', 'Tiger' ],
//   'Central Park Zoo': [ 'Lion', 'Tiger', 'Wolf' ],
//   'San Antonio Zoo': [ 'Grizly Bear', 'Panda' ] }

// create an object with the animal name as the key, and the zoos allowed as the value

// e.g.
// { Rhino: [ 'Denver Zoo', 'Bronx Zoo' ],
//   'Grizly Bear': [ 'Denver Zoo', 'San Antonio Zoo' ],
//   Monkey: [ 'Denver Zoo', 'Bronx Zoo' ],
//   Lion: [ 'Kansas City Zoo', 'Central Park Zoo' ],
//   Tiger: [ 'Kansas City Zoo', 'Central Park Zoo' ],
//   Wolf: [ 'San Diego Wild Animal Park', 'Central Park Zoo' ],
//   Panda:
//    [ 'Denver Zoo',
//      'Bronx Zoo',
//      'San Diego Wild Animal Park',
//      'San Antonio Zoo' ] }

// create an object with the continents as the keys and the animals on that continent as the value

//e.g.

//  { 
//  Africa:
//  [ { name: 'Rhino', weight: 1700, type: 'Herbivore', home: 'Africa' },
//    { name: 'Monkey', weight: 60, type: 'Herbivore', home: 'Africa' },
//    { name: 'Lion', weight: 400, type: 'Carnivore', home: 'Africa' },
//    { name: 'Tiger', weight: 600, type: 'Carnivore', home: 'Africa' } ],
// 'North America':
//  [ { name: 'Grizly Bear',
//      weight: 800,
//      type: 'Omnivore',
//      home: 'North America' },
//    { name: 'Wolf',
//      weight: 90,
//      type: 'Carnivore',
//      home: 'North America' } ],
// Asia:
//  [ { name: 'Panda', weight: 700, type: 'Herbivore', home: 'Asia' } ] 
//  }

//

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//

//////////////////ANSWERS BELOW/////////////////

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 


// return an array with all the zoos that allow Carnivores

// zoos.filter(zoo => zoo.typesAllowed.includes('Carnivore'))


// return an array of zoos that can take animals from Asia

// zoos.filter(zoo => zoo.continents.includes('Asia'))


// make a function that takes an animal name and returns their home continent

// const findHome = animalName => {
//   return animals.find(animal => animalName == animal.name).home
// }

// findHome('Tiger')


// make a function that takes a quanitity and a animal name and returns their total weight

// const weighingAnimals = (animalName, quantity) => {
//   let weight = animals.find(animal => animal.name === animalName).weight
//   return weight * quantity
// }

// weighingAnimals('Wolf', 6)


// return an array with the zoos that can take in a Wolf
// remember that it has to match the type and continent

//BONUS: Make it dynamic


// const matchZoosAndAnimals = (animalName) => {
//   let foundAnimal = animals.find(animal => animal.name === animalName)
//   return zoos.filter(zoo => zoo.continents.includes(foundAnimal.home) && zoo.typesAllowed.includes(foundAnimal.type))
// }

// matchZoosAndAnimals('Wolf')


// find the animal that weighs the most.
// remember that sort is a destructive function

// animals.sort((a, b) => b.weight - a.weight).shift()

// find the zoo with the least weight allowed.

// zoos.sort((a,b) => a.maxWeight - b.maxWeight)


// create an array of objects with the zoo properties + the names of the animals allowed in it.

// zoos.map(zoo => {
//   return {...zoo, animals: animals.filter(animal => zoo.typesAllowed.includes(animal.type)).map(ele => ele.name) }
// })

////////////////// BONUS ROUND!!!! ///////////////////

// reduce is your friend, ask others for help if you get stuck!

// however if you're still stuck, look below
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

////////////////Bonus Round Answers //////////////////


// find the max amount of each animal in a specific zoo

// create a new object with the zoo name as the key and the animals allowed as the value


// zoos.reduce((acc, zoo) => {
//   {
//     acc[zoo.name]=animals.filter(animal => zoo.continents.includes(animal.home)&& zoo.typesAllowed.includes(animal.type)).map(ele => ele.name)
//   }
//   return acc
// },{})


// create an object with the animal name as the key, and the zoos allowed as the value

// animals.reduce((acc, animal) => {
//   {
//     acc[animal.name] = zoos.filter(zoo => zoo.typesAllowed.includes(animal.type) && zoo.continents.includes(animal.home)).map(ele => ele.name)
//   }
//   return acc
// },{})


// create an object with the continents as the key and the animals on that continent as the value

// animals.reduce((acc, animal) => {
//   if(!acc[animal.continent]) {
//     {acc[animal.home] = animals.filter(ele => ele.home === animal.home)}
//   }
//   return acc
// },{})