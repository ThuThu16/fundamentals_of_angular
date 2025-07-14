function arraySum(numbers: number[]): number {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Test the function
console.log(arraySum([5, 5, 1, 3])); // should print 14
