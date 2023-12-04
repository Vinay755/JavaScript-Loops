function sumArray(numbersArray){
    let sum = 0;
    for (const number of numbersArray) {
        sum+=number
    }
    return sum;

}
const numbersArray=[1,2,3,4,5]
const totalSum = sumArray(numbersArray)
console.log("The Total Sum is:",totalSum);