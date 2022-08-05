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
//review of callbacks

// if I write it this way, I have to add the check to every function the calculator might have, which gets really repetitive
// const addWithCheck = (num1, num2) => {
//     if (typeof num1 === "number" && typeof num2 === "number"){
//         return num1 + num2
//     } else {
//         console.log("Please provide numbers")
//     }
// }

const add = (num1, num2) => num1 + num2
//this doesn't account for wrong datatypes
const subtract = (num1, num2) => num1 - num2

const checkThatTakesCalculatorFunctions = (num1, num2, calculationWeWantToRun) => {
    if (typeof num1 === "number" && typeof num2 === "number"){
        console.log(calculationWeWantToRun(num1, num2))
        return calculationWeWantToRun(num1, num2)
    } else {
        console.log("Please provide numbers")
    }
}

// checkThatTakesCalculatorFunctions(3, 4, subtract)


//I want one number to be consistent (the number being added to the score) and then 
//I want another number that I can supply (the score) to be added to
//I don't want to be able to change the first number, only the second number

function createScoreIncrementers(lockedPointsToBeAdded){
    return function(score){
        return lockedPointsToBeAdded + score
    }
}

function addPointsToScore(points, score){
    return points + score
}

function addTenPoints(score){
    return score + 10
}

const addFiveToScore = createScoreIncrementers(5)
const addSevenToScore = createScoreIncrementers(7)

let testscore = 10

console.log(addFiveToScore(testscore))

let engineers = ["Reshma", "Suneetha", "Ciaran"]

function mostSeniorEmployee(arrayofEmployees, whatWeWannaDo){
    whatWeWannaDo(arrayofEmployees[0])
}

function givePersonACompliment(nameOfPersonToBeComplimented){
    console.log(`Hey, ${nameOfPersonToBeComplimented}, you're doing an awesome job!`)
}

mostSeniorEmployee(engineers, givePersonACompliment)
