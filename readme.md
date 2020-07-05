## Aiden Waring - CAB012027

## T3A1 - Workbook

---

#### Introduction

As a developer (dev) you are sometimes required to prove your knowledge to prospective clients and employers.

#### Brief

In order to demonstrate your understanding of fundamental software concepts, you will provide answers to a series of short answer questions.

#### Questions

##### Details:

ACME Corporation is looking for devs with an understanding of Rails. The following set of questions relate to this RfQ-requirement.

## Q1

Provide an overview and description of a standard source control process for a large project

**Answer:**
Source control workflow refers to the recommended steps and procedure adhered to in a source control environment. Developers utilising a source control system can contribute and work in different ways. The workflow concept is a design that defines the rules versioning, branching and the control of the master branch.

A popular standard workflow practiced by developers is the centralized workflow.
In a centralized workflow, developers all contribute to a shared repository (as opposed to fork-pull workflow. This central repository is often created and hosted on source control hosting services such as Bitbucket or GitHub.

With reference to my first group project as part of a hackathon with my fellow Coder Academy students, we utilised this strategy of source control. As we had to all work on the same code simultaneously, our team utilised a centralized workflow by having our source code available on GitHub, with each member being listed as a contributor and the chosen team leader owning the repository. This approach is often employed by organisations for in-house development, and was a perfect fit for our team's goals and remote-work environment.

We decided it be best to each utilise the 'feature-branch' design philosophy. This ensured that all code changes were made in new, feature-specific branches instead of master. Each member had a certain part of the application to work on. Each component was broken up into a different feature branch. These feature branches are created on the repository for code changes. Our team made changes and edited files committing locally and synchronising upstream at a convenient time. Reviewed changes were then "pulled" back into the shared repositories master branch by initiating a pull request once we had decided that there were no conflicts and that the branch contained working content relevant to the master branch and to the application's objectives.

This segmentation of new code and it's staged change control methodology ensured that the master branch remained valid, stable and conflict-free.

In conjunction with using GitHub for source control, other processes we followed as part of our project was using a software development plan. Our team used Trello for planning the application's scope and user stories. Our developers were able to successfully communicate their plans via WhatsApp and Slack platforms and assist each other using Visual Studio Code's Live Share functionality.

References Used:
[1](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), [2](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows)

## Q2

What are the most important aspects of quality software?

**Answer:**

As the field of software development and engineering has continued to evolve over the years, so has the standards for quality software. Factors that determine the quality of software are oriented to the success of the software in relation to the customers and the developers. Aspects of the software attributed to this are as follows:

Reliability:
Quality software is that when it operates in a consistent manner. Software when run multiple times should provide consistent results and returning rarely any errors if any at all. A user's experience with the software should never have them question or doubt the software in the sense of it performing correctly.

Efficiency:
Quality software is efficient - only using the resources required to perform its designated task. Examples of inefficient software may be those consuming more memory or server resources than it should, battery life from the device or internet bandwidth. An efficient application is also measured in time such as the time the job takes to complete the process. The application must be designed so that algorithms are chosen and implemented correctly so that the code used to produce the expected outcome is as optimal as possible, reducing Big-O complexity and increasing productivity.

Maintainability:
Quality software is easily maintainable. Maintenance to update, manage or change the software in anyway should be as easy as possible, cost-effective and straight forward. The software should be designed so that future changes are accounted for and in a way that does not restrict or hinder changes to core features.

Usability:
Software should be designed in such a way that it is easy to use by both the end-user and the developers. Software should not require extensive documentation or time spent learning to operate. Quality software is easy to use and does not obfuscate the user experience in any way.

Testability:
The core functionality of the application must be easily tested. Software that cannot produce clear and easily repeatable use cases is not considered quality.

Portability:
Quality software is considered portable which means that it can be used in different environments. Quality software can also be moved from one environment to another without a complete overhaul. Software designed to be decoupled and non-proprietary from an operating system is highly beneficial as it can be reused and is future-proofed.

References Used:

[1](https://www.softwaretestinghelp.com/what-are-the-quality-attributes/), [2](https://www.silasreinagel.com/blog/2016/11/15/the-seven-aspects-of-software-quality/)

## Q3

Outline a standard high level structure for a MERN stack application and explain the components

**Answer:**

A MERN stack application is a web development framework 'stack', which encompasses a combination of MongoDB, Express, React and Node.js. Each one is responsible for handling a component of the application. Examining the high level structure of a MERN Stack application can be done by examining each component individually and identifying how they connect to one another.

**M** - MongoDB

- A NoSQL database program, MongoDB provides an application with a document-based database system. A document-based or oriented database system is different from a relational database system in it's data storage format due to it's lack of table rows and relations. MongoDB instead uses a document database, storing its data in "JSON-like documents". Search queries are structured to read through JSON formatted contents within documents. JavaScript can utilise this format efficiently due to the JSON format. MongoDB is used within this stack environment due to its speed, its aforementioned data model format and its use of JavaScript, which not only makes development and data manipulation much more streamlined but also allows it to be integrated with the rest of the stack components nicely.

**E** - Express

- Express is a back-end Node.js framework. Express utilises its support for middleware components to make back-end Node content much easier to write. Express simplifies standard Node.js content such as defining request handlers for HTTP verb actions, routing and API calls. Express often accomplishes Node.js functionality in much fewer lines of code, keeping the program DRY.

**R** - React

- React is Facebook's JavaScript library used for front-end web development. React is built for designing user interfaces and is 'component based', with separate files and sections of the code coming together to compose user interface. React uses Babel, a JavaScript compiler, to allow developers to write JSX code and have it transpiled into JavaScript. JSX is an XML/HTML-like extension of JavaScript which React uses to implement ES6 functionality and HTML-like tags. React renders compiled components to the DOM. React applies changes to a web page's user interface without refreshing the page through the use of component states.

**N** - Node.js

- Node.JS is a JavaScript runtime environment used to execute code outside of a web browser. Built on Chrome's V8 JavaScript engine, Node.js allows developers to take what used to be code exclusive to running in a web browser into a server environment. Node.js is open source and is used for developing server-side applications.

References Used:
[1](https://www.mongodb.com/), [2](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction), [3](https://nodejs.org/en/about/)

## Q4

A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

**Answer:**

## Q5

With reference to one of your own projects, discuss what knowledge or skills were required to complete your project, and to overcome challenges

**Answer:**

## Q6

With reference to one of your own projects, evaluate how effective your knowledge and skills were for this project, and suggest changes or improvements for future projects of a similar nature

**Answer:**

Reflecting upon my time completing my time completing my first Ruby assessment for Code Academy, I can identify both my strengths and weaknesses in my knowledge and skills.
At that time, I was finishing up the remainder of my full-time work at my previous workplace and was only participating in 50% of the classes that was teaching the basics for programming within Ruby. At the time that the first assessment was provided to us, I had only just caught up with the learning content to produce the application. I knew going in to the 'sprints' and applying what I had just learned, I had to focus on completing an MVP - the most complete version of the project.

| Skill            | Insight                                                                                                                                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Documentation    | While generally covering the major points of the program such as the software development plan, feature outline and application flow diagram, the contents could have been expanded upon in greater detail                        |
| Ruby Functions   | Solid understanding of syntactic expressions, but could have been formatted much neater                                                                                                                                           |
| Control Flow     | Understanding of control flow and calling methods was basic at the time, and could now be expanded upon. Parts of the program could have been passed as expressions or parameters to other methods that required this information |
| Project Planning | Planning phase of application was strong, as all key features for the MVP were clearly defined before coding was started                                                                                                          |
| Time Management  | Not all planned parts of the application were implemented before the deadline. My time on each component of the MVP could have been changed                                                                                       |
| Project Scope    | The scope of the project was changed to remove many non-MVP components to reach the deadline                                                                                                                                      |
| Presentation     | I am confident that my ability to present to the classroom and demonstrate the application and its features was successful                                                                                                        |
| Git              | Using Git, while in a limited capacity was a success after learning how to use it not long before the project had begun                                                                                                           |

## Q7

Explain control flow, using an example from the JavaScript programming language

**Answer:**

As is the case in many programming languages, JavaScript utilises the concept of control flow which defines the order of instructions that the program executes its code.

JavaScript's different control flow sets known as control flow statements have different syntax and helps define attributes of the program such as scope and the order of events.

A block statement is the simplest of these control flow statements. Variables defined within a block are scoped to within that limited to its range with the exception of `var` variables. Blocks are delimited with `{}` curly brackets. The below example demonstrates blocks and the scope of declarations within it.

```javascript
{
  let text1 = "Hello" // Block level scope variable
  var text2 = "Hey" // Global scope level variable
  const text3 = "G'day" // Block level, read only constant variable

  console.log(text3) // G'day
}

console.log(test2) // Hello
console.log(test) // ReferenceError: test2 is not defined
```

Blocks are often used in conjunction with other control flow statements such as `if`, `while`, `for`.

If-else control flow statements directs code if a certain condition is met - if the condition is true, a certain block of code is executed. If the condition is false, a different code block is executed.

```javascript
let age = 24
if (age > 18) {
  console.log("You are an adult!")
} else {
  console.log("Too young!")
}
// Ternary operator can alternatively be used condition ? expression1 : expression2;
```

Blocking the below statement encloses a conditional statement.

```javascript
let x = 0

while (x < 10) {
  console.log(x++)
  /* 0
  1
  2
  3
  4
  5
  6
  7
  8
  9 */
}
```

A switch statement functions similarly to an if-else, however it is used to match an expression to what's known as a case label. The evaulation returns true if the parameter matches a given result or case label.

```javascript
foodChoice = "Brocolli"

switch (
  foodChoice // The switch statement's parameter is equal to the case label for Brocolli
) {
  case "Brocolli":
    console.log("I like Brocolli")
    break
  case "Tomato":
    console.log("I like Tomato!")
    break
  default:
    console.log("I like most vegetables.")
    break
}
```

Blocking is also used for error handling in JavaScript in the use of try-catch blocks, which tells the program to try execute a block of code and capture any exceptions that may be raised, separating the concerns of each.

References Used:

[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling), [2](https://www.javascripttutorial.net/javascript-ternary-operator/)

## Q8

Explain type coercion, using examples from the JavaScript programming language

**Answer:**

Type coercion is the automatic or conversion of values from one data type to another.

In JavaScript, data can be either implicitly coerced or explicitly coerced using different syntax.

Type conversions can be implicitly or explicitly made. In JavaScript is automatically performed. The MDN refers implicit conversion of values from one type to another type.

_Example:_

```javascript
let var1 = 5
let var2 = "5"

let sum = var1 + var2

console.log(sum) // 55
```

This above code treats a variable of one data type as if it belongs to a different data type. The example demonstrates coercion of the value of `5` from var1 into a string. These two strings are then concatenated together to result in the string of `55` being logged.
In this case we will require explicit coercion and is performed by certain syntactic instructions. In JavaScript, we will need to be explicitly tell it to convert the number `5` to a number using the `Number()` method.

```javascript
sum = Number(var2) + var1
```

Another example where JavaScript performs type coercion is with the equals `=` operation.
The `==` operator performs an 'equal to' operation on a set of values to determine if the result is true or false. With this syntax. When `==` is used, the code will check for equality once any type conversions found within the operation are performed. The `===` operator however will not perform any coercion and will strictly compare the values as their current data type.

_Example:_

```javascript
5 == "5" // True

5 === "5" // False
```

References Used:
[1](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)

## Q9

Explain data types, using examples from the JavaScript programming language

**Answer:**

A data type is a attribute given to data describe what kind of format and structure it must adhere to. In computer science, the type assigned to a value tells the interpreted language or its compiler how it should behave.

In JavaScript (ECMAScript standards), nine data and structure types are defined:

- BigInt
  - Numeric type that represents integer values with an arbitrary or unpredictable position. Used when appending `n` at end of a given integer.
    _Example:_
    ```javascript
    let largeNumber = 3n ** 64n // 3433683820292512484657849089281n
    ```
- Boolean
  - Boolean represents a logical entity which can only have two values: true and false. Application used for conditional testing, boolean algebra and relations.
    _Example:_
    `javascript let x = true let y = false x == y // false let a = 5 let b = 10 a < b // true`
- null
  - Represents a nonexistent data that when assigned a null data type no longer exists.
    _Example:_
    ```javascript
    let hobbies = ["reading", "writing", "long walks at the beach"]
    person = null // Person is now null. Type becomes an object
    ```
- Number
  - Represents numbers between -(253 − 1) and 253 − 1) (BigInt to express numbers outside this range. Can express integers with decimal point.
    _Example:_
    ```javascript
    let num1 = 64
    let num2 = 64.0
    ```
- Object
  - Denoted using `{}`, objects contain data of key:value pairs.
    _Example:_
    `javascript let person = { hair: "blond" eyes: "blue" }`
- Function

  - Functions are objects with the added ability to be callable.
    _Example:_

    ```javascript
    function myFunction() { //ES5
      return "Hello!"
    }

    function myFunction = () => { //ES6
      return "Hello!"
    }
    ```

- String

  - Represents text data. Written in quotes, contains series of characters.
    _Example:_
    ```javascript
    let aboutme = "I am Aiden Waring! - 24." // Valid string entry using alphanumeric characters
    ```

- undefined
  - The value given to a declared variable with no defined data.
    _Example:_
    ```javascript
    const data // Value is not defined
    ```

References Used:
[1](https://developer.mozilla.org/en-US/docs/Glossary/Type), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

## Q10

Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language

**Answer:**

In JavaScript, an array is a collection or store of a number of elements. These collections of data are stored in an array data type and may contain elements of various different data types. These list-like objects have no fixed length, nor are the types of each element in it. Properties such as the array's length and the location of the elements within the array can be manipulated. Items within the array can be set and updated by using (square) bracket `[]` notation and providing the integer index value of the associated value. The below code demonstrates creating a new array.

_Example:_

```javascript
// Creates new array with string contents
let beaches = ["Burleigh", "Miami", "Kirra", "Rainbow"]
console.log(beaches.length) // 4
console.log(beaches) // [ 'Burleigh', 'Miami', 'Kirra', 'Rainbow' ]
```

JavaScript includes a large number of inbuilt array methods that can be used to manipulate arrays and its contents. Outlined are a number of examples for commonly used array manipulation methods:

_Example:_

```javascript
//array.join() - Returns new string concatenating all elements with a separator string
let beaches = ["Burleigh", "Miami", "Kirra", "Rainbow"]

console.log(beaches.join("")) // BurleighMiamiKirraRainbow
console.log(beaches.join("-")) // Burleigh-Miami-Kirra-Rainbow
```

```javascript
//array.map() - Creates a new array with the results of a callback function performed on each element within the array
let favouriteNumbers = ["4", "6", "2", "3"]

const map1 = favouriteNumbers.map((x) => x * 2) // Multiplies each element in the array, x, by 2

console.log(map1) // [ 8, 12, 4, 6 ]
```

```javascript
//array.pop() - Removes the last item from an array and returns that item
let beaches = ["Burleigh", "Miami", "Kirra", "Rainbow"]

console.log(beaches.pop()) // Rainbow
```

```javascript
//array.push() - Adds additional elements to the end of an array and returns the new length
let beaches = ["Burleigh", "Miami", "Kirra", "Rainbow"]

console.log(beaches.push("Mermaid")) // 5

console.log(beaches) // [ 'Burleigh', 'Miami', 'Kirra', 'Rainbow', 'Mermaid' ]
```

```javascript
//array.reverse() - Reverses an array's contents
let beaches = ["Burleigh", "Miami", "Kirra", "Rainbow"]

console.log(beaches.reverse()) // [ 'Rainbow', 'Kirra', 'Miami', 'Burleigh' ]
```

```javascript
//array.shift() - Removes the first element and returns the removed element
let beaches = ["Burleigh", "Miami", "Kirra", "Rainbow"]

console.log(beaches.shift()) //

console.log(beaches) // [ 'Miami', 'Kirra', 'Rainbow' ]
```

```javascript
//array.slice() - Returns a portion of an array into a new array selected from a start and end representing the index of items within the collection
let beaches = ["Burleigh", "Miami", "Kirra", "Rainbow"]
// slice(start,end)
console.log(beaches.slice(2)) // [ 'Kirra', 'Rainbow' ]
console.log(beaches.slice(1, 2)) // [ 'Miami' ]
```

```javascript
//array.toSring() - Returns a string representing the contents of an array
let beaches = ["Burleigh", "Miami", "Kirra", "Rainbow"]

console.log(beaches.toString()) // Burleigh,Miami,Kirra,Rainbow
```

# Q11

Explain how objects can be manipulated in JavaScript, using examples from the JavaScript programming language

**Answer:**

An object in JavaScript, similar to many other programming languages, is an assortment of related data and its properties. These collections of data are stored as collections of key:value pairs. JavaScript object properties can be accessed using dot or square bracket notation in the following formats:

```javascript
myObject.propertyName
myObject["propertyName"]
```

For the below literal object, the property can be manipulated and updated using dot notation to assign the property of the phone object a new value:

```javascript
let phone = {
  make: "Apple",
  model: "iPhone X",
  year: 2017,
}

phone.year = 2018
console.log(phone["year"]) // 2018
```

Manipulating the data contained within these objects can be done for objects defined in constructor functions:

```javascript
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}

let myCar = new Car("Toyota", "Hilux", 2020)
myCar.year = 2021
console.log(myCar) // Car { make: 'toyota', model: 'hilux', year: 2021 }
```

We can assign the value of myCar.year a new value, manipulating the value for the stance of Car 'myCar'.

In modern JavaScript there are several methods that allow you to manipulate, view or alter an object.

Using the JavaScript keyword `this` you can refer to the current object within a method.

_Adding a Method to an Object with expression interpolation_

```javascript
let person = {
  firstName: "Aiden",
  lastName: "Waring",
}
person.name = function () {
  return this.firstName + " " + this.lastName
}

console.log("My name is " + person.name()) // My name is Aiden Waring
```

_Looping over an Object_

The for...in loop will iterate over each of the object's properties and will perform a given action for each item within the object. In our case the below code outputs a string of the names object's name and value.

```javascript
let numberOfPizzas = { pepperoni: 1, hawaiian: 2, vego: 3 }

for (pizza in numberOfPizzas) {
  console.log(
    `There are ${numberOfPizzas[pizza]} ${pizza} pizzas at the party.`
  )
}

/* Result:
There are 1 pepperoni pizzas at the party.
There are 2 hawaiian pizzas at the party.
There are 3 vego pizzas at the party. */
```

JavaScript contains many inbuilt methods for objects that further manipulate its contents:

_Deleting properties_

```javascript
let myObject = {
  a: 1,
  b: 2,
} // { a: 1, b: 2 }

delete myObject.a
console.log(myObject) //{ b: 2 }
```

Other inbuild functions include .freeze(), which freezes a given object preventing code from changing or deleting it's paramaters, .keys() which returns an array of the keys in the object and much more. The full list of these functions can be found on on the [MDN web docs here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

References Used:
[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects), [3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Q12

Explain how JSON can be manipulated in JavaScript, using examples from the JavaScript programming language

**Answer:**

JSON stands for JavaScript Object Notation and is a format for the storing and sharing of data. JSON bears a syntactical resemblance to the JavaScript - the JSON data exists as a string format. Written in key:value pairs, JSON uses the same data types as those found within JavaScript objects.

Below is an example of a formatted JSON string:

```json
{
  "Trainer Name": "Red",
  "homeTown": "Pallet Town",
  "born": 1996,
  "partyPokemon": [
    {
      "name": "Pikachu",
      "level": 81,
      "type": "Electric",
      "moves": ["Charm", "Quick Attack", "Thunderbolt", "Thunder"]
    },
    {
      "name": "Blastoise",
      "level": 84,
      "type": "Water",
      "moves": ["Rain Dance", "Blizzard", "Surf", "Whirlpool"]
    },
    {
      "name": "Snorlax",
      "level": 75,
      "type": "Normal",
      "moves": ["Amnesia", "Snore", "Rest", "Body Slam"]
    }
  ]
}
```

**JSON Manipulation:**

Using the JavaScript function `JSON.parse(params)` contents can be parsed from string data type into a JavaScript object, where params represents the JSON data.

To access this information within JavaScript (.js), we parse it with **JSON.parse()** to convert the string to JavaScript object syntax.

```javascript
const data =
  '{"trainerName": "Red","homeTown": "Pallet Town","born": 1996,"partyPokemon": [{"name": "Pikachu","level": 81,"type": "Electric","moves": ["Charm", "Quick Attack", "Thunderbolt", "Thunder"]},{"name": "Blastoise","level": 84,"type": "Water","moves": ["Rain Dance", "Blizzard", "Surf", "Whirlpool"]},{"name": "Snorlax","level": 75,"type": "Normal","moves": ["Amnesia", "Snore", "Rest", "Body Slam"]}]}'

const pokedata = JSON.parse(data)

console.log(pokedata.trainerName) // "Red"
console.log(pokedata["trainerName"]) // "Red"
console.log(pokedata.partyPokemon[0].name) // Pikachu
```

To convert a JavaScript object to JSON, we use the method **JSON.stringify()** instead.

```javascript
let object = {
  trainerName: "Blue",
  born: 1996,
  partyPokemon: [
    {
      name: "Arcanine",
      level: 63,
      type: "Fire",
      moves: ["Roar", "Leer", "Ember", "Take Down"],
    },
  ],
}

let bluepokedata = JSON.stringify(object) // {"trainerName":"Blue","born":1996,"partyPokemon":[{"name":"Arcanine","level":63,"type":"Fire","moves":["Roar","Leer","Ember","Take Down"]}]}
```

## Q13

For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes

```javascript
class Car {
  constructor(brand) {
    this.carname = brand
  }
  present() {
    return "I have a " + this.carname
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand)
    this.model = mod
  }
  show() {
    return this.present() + ", it was made in " + this.model
  }
}

let makes = ["Ford", "Holden", "Toyota"]
let models = Array.from(new Array(40), (x, i) => i + 1980)

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

for (model of models) {
  make = makes[randomIntFromInterval(0, makes.length - 1)]
  model = models[randomIntFromInterval(0, makes.length - 1)]

  mycar = new Model(make, model)
  console.log(mycar.show())
}
```

**Answer:**

```javascript
class Car {
  // New car Class
  constructor(brand) {
    // Constructor for car class with parameter brand
    this.carname = brand // Defining carname with parameter input
  }
  present() {
    // Present function
    return "I have a " + this.carname // Returns string with interpolated carname parameter
  }
}

class Model extends Car {
  // Model class with Car inheritance
  constructor(brand, mod) {
    // Model constructor with two parameters, brand and mod
    super(brand) // Instantiates brand parameter from parent Car class
    this.model = mod // Defining mod with parameter input
  }
  show() {
    // Show function
    return this.present() + ", it was made in " + this.model // Returns full string returned result from parent method present, interpolates model input from parameter as part of returned result
  }
}

let makes = ["Ford", "Holden", "Toyota"] // Creates an array with three string elements and assigns it to the makes variable.
let models = Array.from(new Array(40), (x, i) => i + 1980) // Creates a new shallow copy array and assigns it to the models variable. Using the Array.from method with three parameters. The first parameter represents an array-like or iterable object to convert to an array. The second and third parameters are optional, with the second using the Map function to call on each element on the array and the third represents a value to use as `this` (or the index) when executing the Map function. A new array is within the first parameter using 'new Array(40)', where 40 represents the array length. 'new Array(40) creates an array of 40 empty elements. (x,i) represents a callback function where x is the value and i is the index of the map. i + 1980 performed as part of the map function, which in this case is 40 times. The result of the full execution is an array stored in variable models contains numbers from 1980 through to 2019.

function randomIntFromInterval(min, max) {
  // min and max included //Declares a named function called randomIntFromInterval which takes two parameters, min and max
  return Math.floor(Math.random() * (max - min + 1) + min) // Returns the largest whole integer less than or equal to a given number. In our case, the given number is the result of two calculations: the first is the result of a Math.random function multiplied by the result of (max-min+1) + min.
}

for (model of models) {
  //For loop to iterate over the models array. Model contains 40 elements.

  make = makes[randomIntFromInterval(0, makes.length - 1)] // Variable make is equal to the returned result of makes[randomIntFromInterval(0,makes.length-1)]. In our case as the makes array has a length of 3, this means the value of the parameter for the random function is (0,2), as the length is subtracted by 1. This results in the function possibly randomly generating either a 0, a 1, a 2. The make variable is assigned the content given by this result. When a value is passed into makes[x] where x represents the number result of the random function, the variable make is assigned the returned value at the index of the makes array: either "Ford", "Holden" or "Toyota"
  model = models[randomIntFromInterval(0, makes.length - 1)] // This code performs similarly to the line above where the random number result is either a 0, a 1 or a 2. In the case of the models array, this assigns at random the either the number 1980, 1981 or 1982 to the variable model.

  mycar = new Model(make, model) // mycar is an instance of the Model class which takes two variables make and model. When the program is run, the make and model are randomly generated and assigned from the result of the called random function. This process of creating a mycar instance of the Model class is repeated for each model in the models array.
  console.log(mycar.show()) // The result of the show function run on the mycar class instance is logged to the console. This is performed for each model within the models array: in our case 40 times. Each time the loop is run, the mycar variable is overwritten with a new instance of the Model class and is provided with a randomly generated make and model values
}
```
