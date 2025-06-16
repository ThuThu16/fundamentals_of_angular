// Function that returns a sentence using name, occupation and wage
function printInfo(name: string, occupation: string, wage: number): string {
    return `Hey, ${name}. You are an ${occupation.toLowerCase()} and your hourly wage is ${wage} dollars.`;
}

// Test the function
console.log(printInfo("Sam", "Engineer", 25));
// Expected: Hey, Sam. You are an engineer and your hourly wage is 25 dollars.
