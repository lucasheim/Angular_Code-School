(function()
{
	var app = angular.module('store',[]);

	app.controller('StoreController',function()
	{
		this.products = gems; //product is a property of the controller.
	}
	);


var gems = [

{
	name: "Dodecahedron",
	price: 2.95,
	description: ". . .",
	canPurchase: true,
},

{
	name: "Pentagonal Gem",
	price: 5.95,
	description: ". . .",
	canPurchase: true,
	soldOut: true,
}

];
})();