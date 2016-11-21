(function(){
var app = angular.module('store',[]);

app.controller('StoreController',function(){
	this.product = gem; //product is a property of the controller.
});


var gem = {
	name: 'Dodecahedron',
	price: 2.95,
	description: '. . .',
	canPurchase: false,
	soldOut:true
}
})();