let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < numArr.length; i++){
    if(numArr[i] % 2 === 0 && numArr[i] % 3 === 0){
        console.log("Divisible by 2 and 3")
    }
    else if(numArr[i] % 5 === 0 || numArr[i] % 7 === 0){
        console.log('Divisible by 5 or 7')
    }
    else{
        console.log(numArr[i])
    }
}
