// ------------ COMMENTS ---------//

// Comments there are two types: 
// in-line comments

/* And also multi-line
the comments won´t show up im your
code/terminal/console it is only
used as a note for you or for others
that you work with */

//----------DATA TYPES---------//

/* There are five BASIC/PRIMITIVE data 
types in JS: Strings, Numbers, Booleans,
Undefined and Null */

/* Strings in other words mean text. To assign
a string to a variable we can use quote marks ""
But we can also use single quote marks ''
*/
const firstString = "This is a string"
const singleQuotes = 'This is a single quote string'

/* Numbers are well.. Numbers but
numbers have what is called a operators
which are: + = plus, - = minus, * = times/
multiplication and / = devide */
const firstNumber = 29;
const secondNumber = 29*1000;
const thirdNumber = 60/10;

/* Booleans are used to declare if
some things are TRUE/FALSE or ON/OFF or
YES/NO. The code that we usually see in movies "011101110001"
that is booleans because: true = 1 and false = 0. Also like
numbers booleans has it´s own signs like:
|| = Or
&& = And
! = Not 
*/
const trueBoolean = true;
const falseBoolean = false;
const andBoolean = false&&true;

/* There are also operatores used on numbers but result in a boolean:
<, >, <=, >=, ===(This one can also be used on strings).
Undefined data type is when the variable is declared but not
assigned - without assignment variable automaticly declares it undefined */
var undefinedVariable;

/* Null is data type that also has one value: Null. Javascript defines
that as an empty object */

const obj = null;

 

// Strings
console.log(firstString);
console.log(singleQuotes);
//Numbers
console.log (firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
//Boolean
console.log(trueBoolean);
console.log(falseBoolean);
console.log(andBoolean);
//Undefined
console.log(undefinedVariable);
//Null
console.log(obj);

//--------- VARIABLES ---------//

/* If we want the computer to remember the code and 
what we write we have to use a variable, and there 
are three that we can use */

/* The first one is "var". It is a variable that you
 can change later on like I did here */

var myFavoriteFood = "Pizza";
myFavoriteFood = "Sushi";

/* Second one is "const" it is a variable that you
 can´t change compared to "var" */

const myName = "Sunna";

/* Third one is "let". "Let" allows you to assing variables
 that are limited to the scope of block statement. */ 

let myAge = 27;

console.log(myName);
console.log(myAge);
console.log (myFavoriteFood);

/* There is also diffrence beetwen assigning and declaring a variable.
What is interesting about it is that you can use console.log to see
states that variables where in certain point in time in your program.
In the first console.log variable "d" was undefined but in second
console.log variable d had value of 9.
example of assignments and declaration: */
var d;

var a = 5;
console.log(d)
d = 9;

a = d;

console.log(d)


//----------- IF STATEMENTS AND DATES ---------//

/* If/else Statements executes a block of code if a specified
condition is true. Or in other words you write a code with
certian condition to let your program know that this condition has
to be met, then the program decides if the condition is met by saying
"true" or if it is not program will say "false". 
example: */

function ifStatements(age){
    if (age < 10){
        return "Kid"
    } else if(age < 15) {
        return "Teen"
    } else if (age <20) {
        return "Young Adult"
    } else if (age < 25) {
        return "Adult"
    } else if (age <40) {
        return "Middle Age"
    } else{
        return "Older People"
    }
}
console.log(ifStatements(27)); // <--- You can change the number here to see different outcomes.

/* This is another example of If/else but here you can also see how
"Dates" can be used in js */

const time = new Date().getHours();
let greeting;
if (time < 10) {
    greeting = "Good Morning"
} else if (time < 20) {
    greeting = "Good Day"
} else {
    greeting = "Good Evening"
}

console.log(greeting);


//--------- ARRAYS -----------//

/* Arrays is a single variable that is used to store different
elements. It is essentially a variable that helps you with sorting
many things/values under one variable and then finding them by
referring to an index number when you need it to.
You use square brackets "[]" for arrays
example: */

const anArrayOfFood = ["Pizza", "Sushi", "Chicken", "Broccoli", "Steak"]


// What we can do to go through this array is this: 
console.log(anArrayOfFood.length);

/* Or if we want to see a specific name in this array we 
can use a index number that every value in this array has
for example:
(and bear in mind js always starts with 0) */
console.log(anArrayOfFood[0])


//--------- OBJECTS -----------//

/* An object in js is a standalone entity, with properties and type.
It can have many values similar to arrays but insted of indexes to
access data you use properties and property values can be any datatype
in js. */

const myDreamHome = {
    "location": "Garðabær",
    "type": "House",
    "buildingYear": "new",
    "bedrooms": 4,
    "color": "Yellow"
};

console.log(myDreamHome)




//------------ CHALLENGE FORM ELLERT ------------//

/* Tristan did this - I only read it and tried to understand
- I dont want to take credit for his work, but wanted to leave it here
so I can look at it later if I need to */

const arrayOfPeople = [
    {
        name:"Palli",
        age:23,
        speaksEnglish: true, 
    },
    {
        name:"Kalli",
        age:29,
        speaksEnglish: false,
    },
    {
        name:"Elli",
        age:34,
        speaksEnglish: true,
    }
]

// Ages of Kalli and Elli
const ageOfKalli = arrayOfPeople[1].age;
const ageOfElli = arrayOfPeople[2].age;

// Name length of Palli and Elli
const nameLengthPalli = arrayOfPeople[0].name.length;
const nameLengthElli = arrayOfPeople[2].name.length;

//true or false if Kalli speaks english
const kalliSpeaksEnglish = arrayOfPeople[1].speaksEnglish;

//Is Kalli older than Elli?
console.log("Is Kalli older than Elli?" + (ageOfKalli > ageOfElli));

//Is Ellis name longer than Pallis?
console.log("Is Ellis name longer than Pallis?" + (nameLengthElli === nameLengthPalli));

//Can Kalli speak english? 
console.log("Can Kalli speak english?" + (kalliSpeaksEnglish));


if (ageOfKalli > ageOfElli && arrayOfPeople[0].name.length < arrayOfPeople[2].name.length && arrayOfPeople[1].speaksEnglish){
    console.log("Everything works!!!")
} else if (ageOfKalli > ageOfElli){
    console.log("Kalli is older but it wont work")
} else if (arrayOfPeople[1].speaksEnglish){
    console.log("It almost works")
} else{
    console.log("This is hopeless case!!!")
}
