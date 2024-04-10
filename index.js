/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const names = s1+ ' ' + s2 + ' ' + s3 + ' ' + s4;
console.log(names);
const tongueTwister = names + ' ' + s5 + ' ' + s3 + ' ' + s2 + ' ' + s1 + ' ' + s4 + ".";

// Print out the concatenated string
console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let cameLtaiL = part1 + part2;
console.log(cameLtaiL);

cameLtaiL = cameLtaiL.split('');
cameLtaiL.splice(3, 1, "A");
cameLtaiL = cameLtaiL.join('');
console.log(cameLtaiL);

cameLtaiL = cameLtaiL.split('');
cameLtaiL.splice(9, 1, 'T');
cameLtaiL = cameLtaiL.join('');
// Print the cameLtaiL-formatted string
console.log(cameLtaiL);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
tipAmount = billTotal*0.15;

// Print out the tipAmount
console.log(tipAmount);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
for (i=1; i<=10; i++);
let randomNumber = Math.random()*10;

// Print the generated random number
console.log(Math.round(randomNumber));



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// expression1 =false
console.log(expression1);

const expression2 = a || b;
// expression2 = true;
console.log(expression2);

const expression3 = !a && b;
// expression3 = false
console.log(expression3);

const expression4 = !(a && b);
// expression4 = true;
console.log(expression4);

const expression5 = !a || !b;
// expression5 = true
console.log(expression5);

const expression6 = !(a || b);
// expression6 = false
console.log(expression6);

const expression7 = a && a;
// expression7 = true
console.log(expression7);