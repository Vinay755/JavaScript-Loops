
function doubleArrayValues(arr) {
    arr.forEach((element, index) => {
      arr[index] = element * 2;
    });
  }


const arr = [1,2,3,4,5];
doubleArrayValues(arr)
console.log(arr);