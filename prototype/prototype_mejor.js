'use strict';


// File 1.

/** @constructor */
var Person = function(fName) {
  /** @private */
  this.firstName = fName;
};

/** @private */
Person.extremities = 4;
/** @private */
Person.head = 1;


/** @private */
Person.prototype.getExtremities = function() {
  return Person.extremities;
};

Person.prototype.getName = function(){
 return this.firstName;
};

Person.prototype.sayHello = function(){
  console.log('hello, im ' + this.firstName);
};

//instancias de persona
var p1 = new Person('Annie');
var p2 = new Person('Eni');

//ejecuta metodos publicos
p1.sayHello();
p2.sayHello();

/////////////////
//clase hija
/////////////////

var Ninja = function(fName, type){
  //llama al constructor padre usando call con esto nos aseguramos que
  //el this se setea correctamente durante la llamada
  Person.call(this, fName);

  //propiedades publicas de Ninja
  this.type = type;  
};

//el "extends" de js
//crea un objeto de tipo Ninja.prototype que hereda de Person.prototype
Ninja.prototype = Object.create(Person.prototype);
//setea la propiedad constructor para referir a Ninja
Ninja.prototype.constructor = Ninja;

Ninja.prototype.attack = function(){
  console.log(this.firstName + ' makes haduken');
};

var n1 = new Ninja('Bob', 'karate');
var n2 = new Ninja('Janet', 'taekondo');

n1.sayHello();
n1.attack();

n2.sayHello();
n2.attack();


