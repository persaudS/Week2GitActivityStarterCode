import { Calculator } from "./calculator";

const calc = new Calculator();

const result_add = calc.add(2, 3);
const result_sub = calc.sub(3, 2);
const result_div = calc.div(10, 2);
console.log(`result_add = ${result_add}`);
console.log(`result_sub = ${result_sub}`);
const result_mult = calc.mult(3, 4);
console.log(`result_mult = ${result_mult}`);
console.log(`result_div = ${result_div}`);
const hello = calc.printHello(); 
console.log(`done.`);

