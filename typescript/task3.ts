function printInfoTyped(name: string, occupation: string, wage: number): string {
    return `Hey, ${name}. You are an ${occupation.toLowerCase()} and your hourly wage is ${wage} dollars.`;
}

console.log(printInfoTyped("Sam", "Engineer", 25));
