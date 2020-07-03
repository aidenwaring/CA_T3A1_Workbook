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


*CMP1043-2.1 Provide an overview and description of your source control process.*
*Provides an extensive overview and description of a standard source control process*

**Answer:**
*From Workbook 2*
Source control workflow refers to the recommended steps and procedure adhered to in a source control environment. Developers utilising a source control system can contribute and work in different ways. The workflow concept is a design that defines the rules versioning, branching and the control of the master branch.
[Reference](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

A popular standard workflow practiced by developers is the centralized workflow.
In a centralized workflow, developers all contribute to a shared repository (as opposed to fork-pull workflow. This central repository is often created and hosted on source control hosting services such as Bitbucket or GitHub.

Problems arise when publishing or "pushing" to the central repository without following a source control workflow. The centralized workflow, sometimes referred to as feature branch workflow, ensures that all code changes are made in new, feature-specific branches instead of master. These feature branches are created on the repository for code changes. Developers will make changes and edit files committing locally and synchronising upstream at a convenient time. Reviewed changes can then be "pulled" back into the shared repositories master branch by initiating a pull request. The request can then either be accepted or denied. Accepted pull requests then see new code "merged" into the master branch. 

This segmentation of new code and it's staged change control methodology ensures that the master branch remains valid, stable and conflict-free. This approach is often employed by organisations for in-house development.
[Reference](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows)

Notes:

Working on the Rails hackathon in a group. Used source control, collaboration tools such as liveshare, communication apps such as WhatsApp. Used Trello.
Worked on different branches. Assigned someone as the master for managing pulls.

## Q2

What are the most important aspects of quality software?

**Answer:**

## Q3

Outline a standard high level structure for a MERN stack application and explain the components

**Answer:**

## Q4

A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

**Answer:**

## Q5

With reference to one of your own projects, discuss what knowledge or skills were required to complete your project, and to overcome challenges

**Answer:**

## Q6

With reference to one of your own projects, evaluate how effective your knowledge and skills were for this project, and suggest changes or improvements for future projects of a similar nature

**Answer:**

## Q7

Explain control flow, using an example from the JavaScript programming language

**Answer:**

## Q8

Explain type coercion, using examples from the JavaScript programming language

**Answer:**

## Q9

Explain data types, using examples from the JavaScript programming language

**Answer:**

## Q10

Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language

**Answer:**

# Q11

Explain how objects can be manipulated in JavaScript, using examples from the JavaScript programming language

**Answer:**

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

Using the JavaScript function ``JSON.parse(params)`` contents can be parsed from string data type into a JavaScript object, where params represents the JSON data.

To access this information within JavaScript (.js), we parse it with **JSON.parse()** to convert the string to JavaScript object syntax.

```javascript
const data = '{"trainerName": "Red","homeTown": "Pallet Town","born": 1996,"partyPokemon": [{"name": "Pikachu","level": 81,"type": "Electric","moves": ["Charm", "Quick Attack", "Thunderbolt", "Thunder"]},{"name": "Blastoise","level": 84,"type": "Water","moves": ["Rain Dance", "Blizzard", "Surf", "Whirlpool"]},{"name": "Snorlax","level": 75,"type": "Normal","moves": ["Amnesia", "Snore", "Rest", "Body Slam"]}]}'

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
      moves: ["Roar", "Leer", "Ember", "Take Down"]
    }
  ]
}

let bluepokedata = JSON.stringify(object) // {"trainerName":"Blue","born":1996,"partyPokemon":[{"name":"Arcanine","level":63,"type":"Fire","moves":["Roar","Leer","Ember","Take Down"]}]}
```

## Q13

For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it was made in ' + this.model;
  }
}

let makes = ["Ford", "Holden", "Toyota"]
let models = Array.from(new Array(40), (x,i) => i + 1980)

function randomIntFromInterval(min,max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min);
}

for (model of models) {

  make = makes[randomIntFromInterval(0,makes.length-1)]
  model = models[randomIntFromInterval(0,makes.length-1)]
    
  mycar = new Model(make, model);
  console.log(mycar.show())
}


```

**Answer:**

```javascript
class Car {
  //New car Class
  constructor(brand) {
    //Constructor for car class with parameter brand
    this.carname = brand //Defining carname with parameter input
  }
  present() {
    //Present function
    return "I have a " + this.carname //Returns string with interpolated carname parameter
  }
}

class Model extends Car {
  //Model class with Car inheritance
  constructor(brand, mod) {
    //Model constructor with two parameters, brand and mod
    super(brand) //Extantiates brand parameter from parent Car class
    this.model = mod //Defining mod with parameter input
  }
  show() {
    //Show function
    return this.present() + ", it was made in " + this.model //Returns full string returned result from parent method present, interpolates model input from parameter as part of returned result
  }
}

let makes = ["Ford", "Holden", "Toyota"] //Creates an array with three string elements and assigns it to the makes variable.
let models = Array.from(new Array(40), (x, i) => i + 1980) //Creates a new shallow copy array and assigns it to the models variable. Using the Array.from method with three parameters. The first parameter represents an array-like or iterable object to convert to an array. The second and third parameters are optional, with the second using the Map function to call on each element on the array and the third represents a value to use as `this` (or the index) when executing the Map function. A new array is within the first parameter using 'new Array(40)', where 40 represents the array length. 'new Array(40) creates an array of 40 empty elements. (x,i) represents a callback function where x is the value and i is the index of the map. i + 1980 performed as part of the map function, which in this case is 40 times. The result of the full execution is an array stored in variable models contains numbers from 1980 through to 2019.

function randomIntFromInterval(min, max) {
  // min and max included //Declares a named function called randomIntFromInterval which takes two parameters, min and max
  return Math.floor(Math.random() * (max - min + 1) + min) // Returns the largest whole integer less than or equal to a given number. In our case, the given number is the result of two calculations: the first is the result of a Math.random function multiplied by the result of (max-min+1) + min.
}

for (model of models) {
  //For loop to iterate over the models array. Model contains 40 elements.

  make = makes[randomIntFromInterval(0, makes.length - 1)] //Variable make is equal to the returned result of makes[randomIntFromInterval(0,makes.length-1)]. In our case as the makes array has a length of 3, this means the value of the parameter for the random functon is (0,2), as the length is subtracted by 1. This results in the function possibly randomly generating either a 0, a 1, a 2. The make variable is assigned the content given by this result. When a value is passed into makes[x] where x represents the number result of the random function, the variable make is assigned the returned value at the index of the makes array: either "Ford", "Holden" or "Toyota"
  model = models[randomIntFromInterval(0, makes.length - 1)] //This code performs similarly to the line above where the random number result is either a 0, a 1 or a 2. In the case of the models array, this assigns at random the either the number 1980, 1981 or 1982 to the variable model.

  mycar = new Model(make, model) //mycar is an instance of the Model class which takes two variables make and model. When the program is run, the make and model are randomly generated and assigned from the result of the called random function. This process of creating a mycar instance of the Model class is repeated for each model in the models array.
  console.log(mycar.show()) //The result of the show function run on the mycar class instance is logged to the console. This is performed for each model within the models array: in our case 40 times. Each time the loop is run, the mycar variable is overwritten with a new instance of the Model class and is provided with a randomly generated make and model values
}
```