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

const start = performance.now();

for (let i = 0; i < 100; i++) {
	countPrimeNumbers();
};

const end = performance.now();

// Log the result and the execution time
console.log(`Execution time of printing countPrimeNumbers 100 times was ${end - start} milliseconds`);