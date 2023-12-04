function filterEvenNumbers(arr){
    const evenNumbers=[]
    for (const number of arr) {
        if(number % 2 ==0){
            evenNumbers.push(number)
        }
        
    }
    return evenNumbers;

}
const numbers = [1,2,3,4,8,10];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);