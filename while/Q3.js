function generateFibonacci(n) {
    if (n <= 0) {
      return [];
    }
  
    const fibonacciSequence = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextNumber);
    }
  
    return fibonacciSequence;
  }
  const fibonacciNumbers = generateFibonacci(10);
console.log(fibonacciNumbers);