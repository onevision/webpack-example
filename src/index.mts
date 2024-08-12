import { add, subtract, multiply, divide } from "./mathFunctions";

const a = 10;
const b = 5;

console.log(`Adding ${a} and ${b}:`, add(a, b));
console.log(`Subtracting ${b} from ${a}:`, subtract(a, b));
console.log(`Multiplying ${a} and ${b}:`, multiply(a, b));
console.log(`Dividing ${a} by ${b}:`, divide(a, b));
