import { Values } from './values';

export class Calculator {
    values: Values;

    constructor(values: Values) {
        this.values = values;
    }

    add(): number {
        return this.values.num1 + this.values.num2;
    }

    subtract(): number {
        return this.values.num1 - this.values.num2;
    }

    multiply(): number {
        return this.values.num1 * this.values.num2;
    }

    divide(): number {
        return this.values.num2 !== 0
            ? this.values.num1 / this.values.num2
            : NaN;
    }
}
