//Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.

//For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.

//Look at every number in the array
//track the smallest number and the largest as I'm going through

let testArray = [1, 4, 11, 2, 1, 37, -4]
let smallestNumber = testArray[0]
let largestNumber = testArray[0]

for(let i = 0; i < testArray.length; i++){
    if(testArray[i] < smallestNumber){
        smallestNumber = testArray[i]
    }
    if(testArray[i] > largestNumber){
        largestNumber = testArray[i]
    }
}

console.log("The smallest number is " + smallestNumber)
console.log("The largest number is " + largestNumber)
