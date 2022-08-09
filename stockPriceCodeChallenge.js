// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:
// best([15, 10, 20, 22, 1, 9])
// 12

// for every number except the first one in the array, I want to check all the differences between that number and the numbers before it, and I want to store the highest difference in a results array.
//look at the results array, and find the highest number
//if the number is above 0, return that number, otherwise, return 0
// [0, 1, 2, 3, 4, 5, 6, 7, 8]
function best(arr){
    //check the length of the array
    //if there is only one item, return 0
        
    let results = [];
    if (arr.length === 1){
        return 0
    }
    //else
    //loop through given array (loop)
        //for each num, (nested loop)
            //subtract all other numbers before it in array 
            //push  number into results array
    for (let i = 1; i < arr.length; i++){
        for (let k = i - 1; k > -1; k--){
            let difference = arr[i] - arr[k]
            results.push(difference)
        }
    
    }

    //find biggest number in results
    
    let biggest = results[0]

    for (let i = 0; i < results.length; i++){
        if(results[i] > biggest){
            biggest = results[i]
        }
    }
    
    //if biggest number is greater than 0, return num, otherwise return 0
    
    if(biggest > 0){
        return biggest
    } else {
        return 0
    }
}

//write test cases and run them, to check your logic
let testArr = [5, 12, 6, 9, 43, 2]
let oneNum = [5]
let noProfit = [5, 4, 3, 2, 1]
// console.log(best(testArr))
// console.log(best(oneNum))
// console.log(best(noProfit))

//when trying to use something you're unfamiliar with, start by looking it up and playing with it.
//the section below is copied from MDN

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// next, try making up your own example, and practice with the syntax
//check if a string includes 'hi'

const wordsToCheck = ["friend", "chicken", "ghost", "highland", "board", "hitherto"]

const wordsThatContainHi = wordsToCheck.filter(word => word.includes('hi'))

console.log(wordsThatContainHi)
//filter runs a loop over the array I call it on
// it checks each value to see whether it meets the conditions I gave it
//all values that meet the condition get added to a results array
//the results array is returned
