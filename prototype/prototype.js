
//constuctor is a function

var Dinner = function(cuisine, priceRange, ratings) {
	this.cuisine = cuisine;
	this.priceRange = priceRange;
	this.ratings = ratings;
	this.serve = function(){
		alert('Dinner is served');
	};
	this.heatUp = function() {
		alert('heating up dinner');
	}
};

Dinner.prototype.serve = function(){
	alert('Dinner is served');
};

//
Dinner.prototype.heatUp = function() {
	alert('heating up dinner');
};

var justinesDinner = new Dinner('Italian', 'dirt cheap', 5);

console.log(justinesDinner);

