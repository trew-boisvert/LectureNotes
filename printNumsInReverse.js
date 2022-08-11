// Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

// For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:

// printDigits(1)
// // 1

// printDigits(314)
// // 4
// // 1
// // 3

// printDigits(12)
// // 2
// // 1

let num = 567
// first thing we want to do is try to print all the digits on a test number, so we can try to notice a pattern in how to get the numbers

// console.log(567 % 10)
// console.log(Math.floor(567/10) % 10)
// console.log(Math.floor(567/100) % 10)

// now that we've printed them all, we can begin to pseudocode

// store the num so I can update it
//every round after until num === 0
    // print num mod 10
    //math floor divide by 10 situation
    //update stored num

function printDigits(num){
    while(num > 0){
        console.log(num % 10)
        num = Math.floor(num / 10)
    }
}

printDigits(3456)
