import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
const result_sub = calc.sub(3, 2);
console.log(`result_add = ${result_add}`);
console.log(`result_sub = ${result_sub}`);
const result_mult = calc.mult(3, 4);
console.log(`result_mult = ${result_mult}`); 
