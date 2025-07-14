// Define the return type
type ArrayValues = {
    sum: number;
    count: number;
};

// Function that calculates the sum and count of elements in a number array
function calcArray(numbers: number[]): ArrayValues {
    let sum = 0;
    let count = numbers.length;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return {
        sum,
        count
    };
}

// Test
const arrayNumbers: number[] = [1, 5, 5, 5, 6];
const test = calcArray(arrayNumbers);
console.log(`Sum: ${test.sum} & count: ${test.count}`); // Expected: Sum: 22 & count: 5
