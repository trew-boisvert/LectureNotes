//Let's say we want to write a function that converts number grades to letter grades

//We might write something like this:

function numberToLetterGrade(grade){
    if(grade > 90){
        console.log("That's an A")
    }
    if(grade > 80){
        console.log("That's a B")
    }
    if(grade > 70){
        console.log("That's a C")
    }
    if (grade <= 70) {
        console.log("That's a D")
    }
}
//however, if we run it, we notice a problem.  
// un-comment the next line and run the code to see it
// numberToLetterGrade(92)

// it tells us that a grade of 92 converts to an A, a B, and a C
//we don't want three letters back, we only want one
//so let's try again:

function numsToLettersSecondAttempt(grade){
    if(grade > 90){
        console.log("That's an A")
    }
    else if(grade > 80){
        console.log("That's a B")
    }
    else if(grade > 70){
        console.log("That's a C")
    }
    else {
        console.log("That's a D")
    }
}

//let's see if we did better
//un-comment the next line and run the code
// numsToLettersSecondAttempt(92)

//Cool, we got just one letter back, which is exactly what we wanted.

//so what did we learn?  we learned that if we have a stack of 'if' statements, we can hit more than one of them.  The grade of 92 was above 90, and above 80, and above 70, so we got three letter grades back
//if we want to make sure that only one option gets hit, and that the other options are not hit, we need to use 'else if' and 'else' statements with our 'if' statement


//there may be situations we want to hit multiple statements on purpose
// maybe I want to check a string for several words
//I might write a function like this:

let checkForMultipleWords = (str) => {
    if(str.includes("man")){
        console.log("There's a man")
    }
    if(str.includes("plan")){
        console.log("There's a plan")
    }
    if(str.includes("canal")){
        console.log("There's a canal")
    }
    if(str.includes("panama")){
        console.log("There's Panama")
    }
}

//checkForMultipleWords("amanaplanacanalpanama")
//if you un-comment the line above, and run it, we can see that I've checked for every word, like I wanted.  All the 'if' statements were hit
