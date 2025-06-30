# javascript and classes

## OOP

## Object
- collections of properties and methods
- toLowerCase

## why use OOP

## parts of OOP
Object literal 

- Constructor function
- Protoypes
- Classes
- Instances(new, this)

## 4. pillars
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism


## JavaScript supports inheritance through two main approaches:

### 1. Class-based Inheritance (extends keyword):
- Introduced in ES6.
- Allows one class to inherit properties and methods from another.
- Uses the "extends" keyword.

Example:
``` javascript

class Student extends Person { ... }

```
### 2. Prototype-based Inheritance:
- The traditional and core mechanism of JavaScript.
- Uses __proto__ or Object.setPrototypeOf() to link one object to another.
- Allows objects to inherit directly from other objects.

Example:
``` javascript

Object.setPrototypeOf(childObj, parentObj);

```

Note: Even class-based inheritance internally uses prototypes, so both are just different ways of achieving the same thing.