import { Values } from './values';
import { Calculator } from './calculator';

const input = new Values(10, 5);
const calc = new Calculator(input);

console.log("Add:", calc.add());
console.log("Subtract:", calc.subtract());
console.log("Multiply:", calc.multiply());
console.log("Divide:", calc.divide());
