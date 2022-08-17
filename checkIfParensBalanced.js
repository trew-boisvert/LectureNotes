// Given a string, return true or false depending on whether that string has balanced parentheses.
// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.
// For example:
// >>> has_balanced_parens("()")
// // true
// >>> has_balanced_parens("(Oh Noes!)(")
// // false
// >>> has_balanced_parens("((There's a bonus open paren here.)")
// // false
// >>> has_balanced_parens(")")
// // false
// >>> has_balanced_parens("(")
// // false
// >>> has_balanced_parens("(This has (too many closes.) ) )")
// // false
// You may consider a string with no parentheses balanced:
// >>> has_balanced_parens("Hey...there are no parens here!")
// // true
//   (())   ()()
// for the sake of this problem, we are also assuming that ")(" is incorrect
//pretend we asked an interviewer about this edge case and they said it should return false.

//after we clarify the problem and think about edge cases, we can pseudocode

//we started by writing the pseudocode you see intermixed with the function, and then used the pseudocode as a set of instructions to write the function
//remember that pseudocode is language-agnostic.  I could just as easily use this pseudocode to write a function in Python instead of Javascript

function has_balanced_parens(str){
    //set up a counter
    let counter = 0
    //loop through string
    for(let i = 0; i < str.length; i++){
        //if (
            // add 1 to counter
        if(str[i] === "("){
            counter++
        }
        // if ) 
            // subtract 1 from counter
        if(str[i] === ")"){
            counter--
        }
        //if counter is less than 0 (this would mean we have a closing parethesis before an opening parenthesis, which we decided was imbalanced and should return false)
            //return false
        if(counter < 0){
            console.log(false)
            return false
        }
    }
    // if counter > 0 (that is, if there are more opening parenthesis than closing parenthesis)
        //return false
    if(counter > 0){
        console.log(false)
        return false
    }
    //otherwise return true
    console.log(true)
    return true
}

// we can use the examples given to us to set up a sort of "test suite"
//we'll learn more about testing later, but this is just a way to get you thinking about it and why we might use it

console.log("should be true")
has_balanced_parens("()")
console.log("should be false")
has_balanced_parens("(Oh Noes!)(")
console.log("should be false")
has_balanced_parens("((There's a bonus open paren here.)")
console.log("should be false")
has_balanced_parens(")")
console.log("should be false")
has_balanced_parens("(")
console.log("should be false")
has_balanced_parens("(This has (too many closes.) ) )")
console.log("should be true")
has_balanced_parens("Hey...there are no parens here!")
console.log("should be false")
has_balanced_parens(")(")
