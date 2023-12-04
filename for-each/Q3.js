function filterPostiveNumbers(arr){
    const postiveNumbers=[]
    arr.forEach(element => {
        if (element > 0){
            postiveNumbers.push(element)
        
        };
    });
    return postiveNumbers

}
const arr=[1,2,-5,2];
const postiveNumbers = filterPostiveNumbers(arr)
console.log(postiveNumbers);