let mess = {
    livingRoom: "Full of couches",
    hallway: ["shoes", "rug", "masks", "dirt"],
    kitchen: {randomItems: ["rogue sock", "measuring tape"],
             pans: "the prettiest pans"}
}

//destructuring
// let {name of key for value we want} = name of object
let {livingRoom} = mess
// mess[livingRoom]
// console.log(livingRoom)



let colors = ["red", ["orange", "yellow"], ["green", "blue", ["purple"]]]
//               0    1                    2
//                    0            1
//                                          0            1        2
//                                                                0

// console.log(colors[0]) //red
// console.log(colors[1][0]) //orange
// console.log(colors[1][1]) //yellow
// //colors[1] === ['orange', 'yellow']
// // console.log(colors[2]) === [ 'green', 'blue', [ 'purple' ] ]
// console.log(colors[2][0])  //green
// console.log(colors[2][1]) //blue
// console.log(colors[2][2][0]) //purple

// console.log(mess.livingRoom) 
// console.log(mess["hallway"][0]) // evaluates to [ 'shoes', 'rug', 'masks', 'dirt' ]
// // kinda like : arr = [ 'shoes', 'rug', 'masks', 'dirt' ]

// let syntaxExample = "kitchen"

// console.log(mess[syntaxExample].randomItems[0])
// // mess["kitchen"]

function smoothieHouse(fruit1, fruit2){
    return(`A ${fruit1} and ${fruit2} smoothie.`)
    console.log("will it run?")
}

let cup = smoothieHouse("blackberry", "durian")
// console.log(cup)

// console.log("Is this line running?")
//console.log(variableName)

const kitchenAidRobot = attachment => `I'm using the ${attachment()} to make your food`

function breadHook(){
    return "bread hook"
}

// console.log(kitchenAidRobot(breadHook)

// functions need:
//  1) syntax indicating that it's a function
//  2) name for the function
//  3) parameters, maybe
//  4) body aka what it does (what does this function do)
function multiplyByFiveDeclaration(num){
    return num * 5
}

const multiplyByFiveExpression = function(num) {
    return num * 5
}

const multiplyByFiveArrow = num => num * 5


// variable to hold result = array to reduce .reduce (function to run, initial value)

let words = ["This ", "will ", "be ", "a ", "sentence."]

let completedSentence = words.reduce((sentence, wordToAdd) => sentence + wordToAdd)

// console.log(completedSentence)

const numArray = [0, 1, 2, 3, 4];
// I only want numbers over 2
const onlyNumsoverTwo = numArray.filter(num => num > 2)
console.log(onlyNumsoverTwo)

const multiplyThoseNumsByThree = onlyNumsoverTwo.map(num => num * 3)
console.log(multiplyThoseNumsByThree)

const addThemTogether = multiplyThoseNumsByThree.reduce((acc, curr) => acc + curr)

console.log(addThemTogether)

const myNum = numArray.filter(num => num > 2).map(num => num * 3).reduce((acc, curr) => acc + curr);

console.log(`The result is ${myNum}`)



/*
GET
- hey, send me that cool picture you were talking about
-hey, show me your welcome page

POST (Create)
-hey, I wanna sign up for your website
-here's the info for my login that I would like to use
-I want to create a profile, I want to sign up
-I sent info from the front to the back
-the back did something (added that info to the database)
-the back sent a response to the front to let it know that it did the thing (created a user account for you)

PUT (Update a part of something that already exists)
-hey, my user name isn't what I want anymore, I wanna change it
-everything else is fine, let's just change the user name
-front sends a new user name to the back, asking the back to change it in the database
-the back receives this request and new name , does that, updates the database, then sends a response to the front saying "Okay, we updated your user name"

DELETE (DESTROY something that already exists)
-hey, I don't want to be a user anymore, please delete my entire account
-front sends delete request, tell it what to delete
-back end receives that, deletes that specified profile, responds to front "We deleted that, BYE"
