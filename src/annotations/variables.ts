const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

const isNull: null = null;
const notDefined: undefined = undefined;

// built in objects
const toady: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 11, 14, 21];

// Classes
class Car {
  color: string;
  model: string;
  km: number;
  brand: string;
};

let car: Car = new Car();

// Objects Literals
let point: { x: number, y: number } = {
  x: 10,
  y: 20
};

// Functions
/* declaration | expect params | return | function it self */
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};