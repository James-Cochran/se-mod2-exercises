const cakes = [
  {
    cakeFlavor: 'dark chocolate',
    filling: null,
    frosting: 'dark chocolate ganache',
    toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    inStock: 15
  },
  {
    cakeFlavor: 'yellow',
    filling: 'citrus glaze',
    frosting: 'chantilly cream',
    toppings: ['berries', 'edible flowers'],
    inStock: 14
  },
  {
    cakeFlavor: 'white chiffon',
    filling: 'mint and sage drizzle',
    frosting: 'whipped sweet cream',
    toppings: ['mint', 'cranberry', 'edible flowers'],
    inStock: 0
  },
  {
    cakeFlavor: 'butter rum',
    filling: 'ginger cardamom swirl',
    frosting: 'spiced rum glaze',
    toppings: ['crystallized ginger', 'toasted sugar'],
    inStock: 9
  },
  {
    cakeFlavor: 'vanilla',
    filling: 'St Germaine',
    frosting: 'whipped cream',
    toppings: ['smoked sea salt', 'crystallized ginger', 'berries'],
    inStock: 21
  },
  {
    cakeFlavor: 'honey',
    filling: 'chocolate and cayenne',
    frosting: 'chocolate buttercream',
    toppings: ['smoked sea salt', 'toasted sugar'],
    inStock: 0
  }
];
module.exports = {
  cakes
};

// allToppings() {
//   // Return an array of all unique toppings (no duplicates) needed to bake
//   // every cake in the dataset e.g.
//   // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

//   /* CODE GOES HERE */

//   // Annotation:
//   // Write your annotation here as a comment
// },

// look at eachh cake one at a time.  
// While looking at each cake one at a time.. I want to?
    // access the toppings array ...
    // put those toppings in an array but with no duplicates....

function allToppings() {
  // console.log(cakes)  // #1 what is the data?
  const uniqueToppings = [] //this has to live in the scope of the function, not within the scope of the forEach
  cakes.forEach((cake) => {
    //console.log('cake: ', cake.toppings)
      //go through each topping in the toppings array...
      //while i;m looking at each topping, i waht to ...

    cake.toppings.forEach((topping) => {
     // console.log('topping: ', topping)
        // create an array
        // is that specific topping already in the array? if not, put it in the array.  if so...nothing..
        if (!uniqueToppings.includes(topping)) {  // the ! basically = not, so "if not unique topping"
          uniqueToppings.push(topping)
          //console.log('look at the method work; ', uniqueToppings)
        }
    })





  })

    // console log to make sure the code worked
  console.log('worked: ', uniqueToppings)
    // ok now return my final answer from the function
  return uniqueToppings // this is the final step of the function we need to return the result of the function otherwise undefined
}

console.log( allToppings() )


 // Return an array of all unique toppings (no duplicates) needed to bake
  // every cake in the dataset e.g.
  // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

  //look at each cake one at a time
  //while i'm looking at each cake one at a time...i want to..
  //access the toppings array...
  // put those toppings in an array but with no duplicates..
  
  function allToppings(goods) {
    // console.log(cakes)
    const uniqueToppings = []
    goods.forEach((cake) => {
      // console.log('cake: ', cake.toppings)
      //go through each topping in the toppings array...
      //while i'm looking at each topping, I want to....
      // create an array
      // is that specific topping already in the array? if not, put it in the array.  if so....nothing..
      cake.toppings.forEach((topping) => {
        console.log('topping: ', topping)
        if (!uniqueToppings.includes(topping)) {
          uniqueToppings.push(topping)
        }
      })
    })
    // console log to make sure the code worked
    // console.log('uT: ', uniqueToppings)
    // ok now return my final answer from the function
    return uniqueToppings
  }

  console.log('function invocation: ',    allToppings(cakes)  )

    // Return an array of all unique toppings (no duplicates) needed to bake
  // every cake in the dataset e.g.
  // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

  //look at each cake one at a time
  //while i'm looking at each cake one at a time...i want to..
  //access the toppings array...
  // put those toppings in an array but with no duplicates..
  
  function allToppings() {
    // console.log(cakes)
    const uniqueToppings = []
    cakes.forEach((cake) => {
      // console.log('cake: ', cake.toppings)
      //go through each topping in the toppings array...
      //while i'm looking at each topping, I want to....
      // create an array
      // is that specific topping already in the array? if not, put it in the array.  if so....nothing..
      cake.toppings.forEach((topping) => {
        console.log('topping: ', topping)
        if (!uniqueToppings.includes(topping)) {
          uniqueToppings.push(topping)
        }
      })
    })
    // console log to make sure the code worked
    // console.log('uT: ', uniqueToppings)
    // ok now return my final answer from the function
    return uniqueToppings
  }

  console.log('function invocation: ',    allToppings()  ) 

  // If you want a spicy challenge that will force you to walk through it very step by step, 
  // you could solve the same allToppings prompt using a reduce with a forEach nested inside it. 