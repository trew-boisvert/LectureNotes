// different syntaxes for functions

//for a function with no parameters:

//function declaration
function noParamDeclaration(){
    return "This function doesn't take any parameters";
};
//function expression
const noParamExpression = function(){
    return "This function doesn't take any parameters";
};
//arrow function
const noParamArrow = () => "This function doesn't take any parameters"
//remember, if it's a single line arrow function, the 'return' statement is implicit
//multi-line arrow function
const noParamArrowMultiLine = () => {
    return "This function doesn't take any parameters"
}

//for a function with one parameter:

//function declaration
function oneParamDeclaration(param){
    return `The argument supplied to this function is ${param}`
}

//function expression
const oneParamExpression = function(param){
    return `The argument supplied to this function is ${param}`
}

//arrow function
const oneParamArrow = param => `The argument supplied to this function is ${param}`

//multi-line arrow function
const oneParamArrowMultiLine = param => {
    return `The argument supplied to this function is ${param}`
}
//for a function with two or more parameters:

//function declaration
function twoParamDeclaration(param1, param2){
    return `My arguments are ${param1} and ${param2}`
}

//function expression
const twoParamExpression = function(param1, param2){
    return `My arguments are ${param1} and ${param2}`
}

//arrow function
const twoParamArrow = (param1, param2) => `My arguments are ${param1} and ${param2}`

//multi-line arrow function
const twoParamArrowMultiLine = (param1, param2) => {
    return `My arguments are ${param1} and ${param2}`
}

console.log(noParamDeclaration())
console.log(noParamExpression())
console.log(noParamArrow())
console.log(noParamArrowMultiLine())
console.log(oneParamDeclaration('this string'))
console.log(oneParamExpression('this string'))
console.log(oneParamArrow('this string'))
console.log(oneParamArrowMultiLine('this string'))
console.log(twoParamDeclaration('this first string', 'this second string'))
console.log(twoParamExpression('this first string', 'this second string'))
console.log(twoParamArrow('this first string', 'this second string'))
console.log(twoParamArrowMultiLine('this first string', 'this second string'))
