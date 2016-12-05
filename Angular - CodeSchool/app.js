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
	images: 
	[//start of the array
	{//image object, we can use something in the lines of product.images[0].full
		full: 'dodecahedron-01-full.jpg',
		thumb: 'dodecahedron-01-thumb.jpg' 
	},
	{
		full: 'dodecahedron-02-full.jpg',
		thumb: 'dodecahedron-02-thumb.jpg'
	}
	]
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