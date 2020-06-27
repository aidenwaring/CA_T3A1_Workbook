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

## Q13

For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes

```
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
