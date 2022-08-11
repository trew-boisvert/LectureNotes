// Instructions
// In this challenge, you’ll write a decoder function. The function should take in a string and return a string.
// Start by creating a function called decoder that has a single parameter called code.
// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).
// Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.
// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.
// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.
// Here are a few more examples:

// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'

//Create an empty string to store correct characters
//I need to iterate through the string, and I need to check each character out
//if the character is a number, I need to skip that many indices/indexes and then store the character after the correct number of skips
// use parsefloat on the character
        //if nan, keep going
        //otherwise
        //if number, increment i by that number and add character at that new index to result string

// javascript is weird about NaN, so, as a workaround, we just check each character against a string full of digits.  It's not elegant, but it works.

function decoder(code){
    let result = "";
    let numbers = "0123456789"
    for (let i = 0; i < code.length; i++){
        if (numbers.includes(code[i])){
            i = i + parseInt(code[i]) + 1
            result = result + code[i]
        }
    }
    return result
}

decoder('0h2xce5ngbrdy')
