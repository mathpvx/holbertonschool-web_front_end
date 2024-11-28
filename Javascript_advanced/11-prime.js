#!/usr/bin/env node

// Reuse the countPrimeNumbers function from 10-prime.js
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

// Using setTimeout to change the stack order
setTimeout(() => {
    const start = performance.now();

    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }

    const end = performance.now();
    console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds`);
}, 0);
