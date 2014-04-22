
// //*****FUNCTION DECLARATION
// function plus(a,b) {
// 	//statments goes inside the cury bracets
// 	var sum = a+b;

// 	//return statment, a function can return anything
// 	return sum; 
// }
// //call the function
// plus(2,2);


// //****ANNONYMOUS FUNCTION
// var plus = function(a,b) {
// 	return console.log(a+b);
// };
// //calling annonumous function
// plus(2,2);

// //Executing the annonymous function imediately
// var plus = function(a,b) {
// 	return console.log(a+b);
// }(2,2);

//*****METHOD FUNCTION
// function plus(a,b){
// 	//use the retunr method as a function
// 	return (
// 		console.log(a+b),
// 		console.log(this), //this has the global object that is in this case the window
// 		console.log(arguments) //an array like object gives a list of the two parameters. 
// 	)
// }

// plus(2,2);

//OBJECT
// var info = { //object always start and end with cury braces
// 	full_name : "Ray Villalobos", //value pair
// 	title : "Staff Author",
// 	links : [ //an array
// 				{ blog : "http://iviewsource.com"}, //set of objects notice the curly braces
// 				{ twitter : "http://twitter.com/planetof the week"}
// 			]
// };

var calc = {
	status : 'Awesome',
	plus: function (a,b){
		return (
			console.log(this),
			console.log(a+b),
			console.log(arguments),
			console.log(this.status) //this attribute get's the value of the object!
		)
	}
}

calc.plus(2,2); //invoking the function with . notation

// //CONSTRUCTOR
// //the constructor should be capitalised
// var Dog = function() {
// 	var name, breed;
// 	return console.dir(this);
// }

// firstDog = new Dog; //created a new instanse of the object
// firstDog.name = "Rober";
// firstDog.breed = "doberman";

// secondDog = new Dog;
// secondDog.name = "kelly";
// secondDog.breed = "spanier";

// // console.log(firstDog.name);
// // console.log(secondDog.name);


// //PROTOTYPE - you can base a functionality of an obejct on another object
// //by linking an other objects prototype to another object
// var speak = function(saywhat) {
// 	console.log(saywhat);
// }

// var Dog = function() {
// 	var name, breed;
// 	return console.dir(this);
// }

// var Cat = function() {
// 	var name, breed;
// 	return console.dir(this);
// }

// Dog.prototype.speak = speak; //gives dog the ability to speak
// Cat.prototype.speak = speak; //gives dog the ability to speak

// firstDog = new Dog;
// firstDog.name = "rover";
// firstDog.breed = "doberman";
// firstDog.speak('woof');

// firstCat = new Cat;
// firstCat.name = "snikker";
// firstCat.breed = "dob";
// firstCat.speak('mai');

// //INDIRECT INVOCATION CALL AND APPLY, DEFINE THE VALUE OF THIS PARAMETERS
// //gives you the power to bind objects to functions, 
// //call passes a value and 
// var speak = function(what) {
// 	console.log(what);
// 	console.log(this.love);
// }

// var saySomething = { normal: "meow", love : "pur"} //an object
// speak.call(saySomething, saySomething.normal); //calling the object saySomething when speak is declared

// //apply passes an array

// var speak = function(what) {
// 	console.log(what);
// 	console.log(this.love);
// }

// var saySomething = { normal: "meow", love : "pur"} //an object
// speak.apply(saySomething, ["meouff"]); //passing the array object, first array

// //ARGUMENTS PARAMETER, list of elements passed, an array like object
// var plus = function() {
// 	var sum = 0; 
// 	for (var i = arguments.length - 1; i >= 0; i--) { //it just accepts as many things as you want. 
// 		sum += arguments[i];
// 	}
// 	return sum;
// }
// console.log(plus(2,2,2)); //I can add as many parameters as I want to


// //SELF EXECUTING FUNCTION ANNONUMOUS CLOSURE
// (function() {
// 	console.log('foo'); //variables are only going to be known inside the function
// })(); //we are asking to execute the function 
// //we are closing the function

// //SCOPE, life and death of variables
// function myDog() {
// 	var dogName = 'fido'; 
// 	console.log(dogName + " says woof");
// }	

// myDog();

//MODULES
var ray = (function() {
//	var private; //not accessible outside the function
	return { //return an object
		speak : function() {
			console.log('hello');
		}
	};

})();

//






