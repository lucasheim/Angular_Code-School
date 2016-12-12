(function()
{
	var app = angular.module('store',[]);

	app.controller('StoreController',function()
	{
		this.products = [
		{
			name: 'Awesome Multi-touch keyboard',
			price: 250.00,
			description: '...',
			reviews:[
			{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com"
			},
			{
				stars: 1,
				body: "This product sucks",
				author: "tim@hater.com"
			}]
		}]
	});

	
	/*app.controller('PanelController',function()
	{
		this.tab = 1;

		this.selectTab = function(setTab)
		{
			this.tab = setTab;
		};

		this.isSelected = function(checkTab)
		{
			return this.tab === checkTab;
		};

	});*/

	app.controller('ReviewController',function()
	{
		this.review = {};

		this.addReview = function(product)
		{
			product.reviews.push(this.review); //Putting this.review (the one we are creating) to the reviews array of product.
			this.review={};
		}
	});

	app.directive('productTitle',function(){
		return{
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels',function(){
		return{
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function()
			{
				this.tab = 1;

				this.selectTab = function(setTab)
				{
					this.tab = setTab;
				};

				this.isSelected = function(checkTab)
				{
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});


var gems = 
[

	{
		name: "Dodecahedron",
		price: 2.95,
		description: "This is a great Dodecahedron, taken from the Titicaca Lake",
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
		description: "The Pentagonal Gem has a great value, been one of the rarest gems in the world",
		canPurchase: true,
		soldOut: true,
	}

];
})();