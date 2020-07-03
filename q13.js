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
