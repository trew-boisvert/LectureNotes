////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2
// the function above does the exact same thing as the commented out function below
// function add2(num1, num2){
//     return num1 + num2
// }
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

const calculator = (num1, num2, callback) => {
    // if num1 is already a number or can be changed/coerced into a number, AND, if num2 is also
    // a number, or can also be coerced into a number, then do the following
    if (+num1 && +num2 ) {
        num1 = +num1
        num2 = +num2
        return callback(num1, num2)
    } else {
        console.log('Please use numbers, not whatever you used before.')
    }
}

console.log(calculator("5", [7, "pineapple"], multiply))
//the plus sign in front of num1 and num2 performs type coercion and changes them to numbers if possible
// let stringnum = "1"
// stringnum = +stringnum
// console.log(typeof stringnum)
///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

// console.log(dogProducts[1])
const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'scratching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
// callback
const applyPercentDiscount = (product, discount) => {
    product.displayPrice = product.displayPrice * (1 - discount)
}
// callback
const applyFlatRateDiscount = (product, discount) => {
    product.displayPrice = product.displayPrice - discount
}
//higher order function / funception
const applyDiscounts = (arr, callback, discount) => {
    arr.forEach(product => {
        callback(product, discount)
    })
}

// applyDiscounts(dogProducts, applyPercentDiscount, .30)
// console.log(dogProducts)

const applyDiscountsByCategory = (arr, category, callback, discount) => {
    arr.forEach(product => {
        if (product.category === category){
            callback(product, discount)
        }
    })
}

// applyDiscountsByCategory(catProducts, 2, applyFlatRateDiscount, 1)
// console.log(catProducts)

const applyDiscountsByInventory = (arr, callback, amount, discount) => {
    arr.forEach(product => {
        if (product.inventory < amount) {
            callback(product, discount)
        }
    })
}

// applyDiscountsByInventory(dogProducts, applyPercentDiscount, 40, .50 )
// console.log(dogProducts)
////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE

//take in a bread type
//take in some ingredients
//check how many ingredients there are, and concatenate differently depending on number

function makeSandwich(bread){
    return function(ingredients) {
        let order = `You ordered a ${bread} bread sandwich with `

        for (let i = 0; i < ingredients.length; i++) {
            // if we're on the last ingredient in an array with at least 2 ingredients
            // we want to use "and"
            if(i === ingredients.length - 1 && i !== 0){
                order += `and ${ingredients[i]}.`
                // otherwise, if there's only 1 ingredient total
                //no "and", and no ", "
            } else if (ingredients.length === 1) {
                order += `${ingredients[i]}.`
            } else {
                //lastly, if there are multiple ingredients, and we're not on the last one
                // we need ", "
                order += `${ingredients[i]}, `
            }
        }
        return order
    }
}

const makePotatoSandwich = makeSandwich('potato')
const makeRosemarySandwich = makeSandwich('rosemary')

// console.log(makePotatoSandwich(["marmalade", "butter", "cinnamon"]))
// console.log(makeRosemarySandwich(["brie"]))
// below is an example of using template literals
// let demo = "potato"
// let demostr = `I would like some ${demo} bread`
// console.log(demostr)
////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}
let updated = copyArrToCamelCase(lotr)
console.log(updated)

// let nums = [1, 2, 3, 4, 5]
// let letters = ["a", "b", "c", "d", "e"]

// for(let i = 0; i < nums.length; i++){
//     for(let j = 0; j < letters.length; j++){
//         console.log(nums[i], letters[j])
//     }
// }


const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE


////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

//const mappedColors // = colors.map()

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    // CODE HERE
}

// Call formalGreeting passing in the formalNames array


//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

//const placesThatStartWithA // = places.filter()


/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects
    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE

// call the function passing in the jobs array


//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array
    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    // Code here
}

// CODE HERE


// call productOfArray passing in numsToReduce


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget
    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

//const remaining // = expenses.reduce(//callback, //initial value)
