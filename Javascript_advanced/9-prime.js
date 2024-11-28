#!/usr/bin/env node

// Function to count prime numbers between 2 and 100
function countPrimeNumbers() {
    let count = 0;

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
		}
        return true;
    }

    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) count++;
    }

    return count;
}

// Measure the execution time using the performance API
const start = performance.now();
const primeCount = countPrimeNumbers();
const end = performance.now();

// Log the result and the execution time
console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds`);
