#Angular!

Basically, Angular is a tool used for adding dinamicy in web pages/web apps. Thinking about a page with buttons and menus, each time you want an action to happen, you'd need to send a request to the server and it'd return the whole page again. Angular is a powerful tool to change this behavior, so that the server only sends the information needed for the changes on the page, without having to reload it fully.

[TOC]

##Modules

An AngularJS module defines an application. A module is a container for the application controllers, services, filters, directives, etc. So, we need to declare a module with:

```javascript
var someVariableName = angular.module("someModuleName",[]);
```
So, parameters:

1. Name of the module
2. List of modules "someModuleName" depends on.

Wherever we want to use this module, we need to have a reference to it with *ng-app*. So, if we want to use it in an HTML page, we would do the following>

```html
<!DOCTYPE html>
<html ng-app = "example"> <!--Necessary to use "example" directives inside the html document-->
<head>
	<script type="text/javascript">
		var app = angular.module("example",[]); //this should go inside app.js
	</script>
</head>
<body>

</body>
</html>
```
##Controllers

Controllers are where we define our app's behavior by defining functions and values.

~~Maybe we can create a parallel between a controller and an object in POO.~~ We can declare a simple one as:

```html
app.controller('StoreController',function(){
	this.product = gem; //product is a property of the controller.
});

var gem = {
	name: 'Dodecahedron',
	price: 2.95,
	description: '. . .',

```

To put it into the html, we use *ng-controller* directive:

 ```html
<!DOCTYPE html>
<html ng-app = "example"> <!--Necessary to use "example" directives inside the html document-->
<head>
	<script type="text/javascript">
		var app = angular.module("example",[]); //this should go inside app.js
	</script>
</head>
<body ng-controller = 'StoreController as store'> <!--ng-controller is a directive, StoreController is the name of our controller and store is our alias-->
{{store.product.name}}<!--ALIAS.CONTROLLER PROPERTY."FIELD"-->
</body>
</html>
```

###Some directives

####NG-APP

	As explained in the Module section, this is for attaching the application module to the page.

	```html
	<html ng-app="store">
	```
####NG-CONTROLLER

	As explained in the Controllers section, this is for attaching the Controller function to the page.

	```html
	<body ng-controller="StoreController as store">
	```

####NG-SHOW

	Allow us to control the visibility of an HTML element:

	```html
	<h1> {{store.product.name}} </h1>
	<h2> ${{store.product.price}}</h2>
	<p>  {{store.product.description}}</p>
	<button ng-show="store.product.canPurchase"> Add to Cart</button>
	```
####NG-HIDE

	Yeap, exactly the opposite of the above.

####NG-REPEAT

	This is a very useful one, so we can show several items from an array.

	So, we have:
	Controller: store
	Property: products

	The code says, use the StoreController (alias = store)
					repeat each item on the products array, from the controller store as product(alias)

	```html
	<div ng-controller = "StoreController as store"> 
		<div ng-repeat = "product in store.products">
			<h1> {{product.name}} </h1>
			<h2> ${{product.price}}</h2>
			<p>  {{product.description}}</p>
		</div>
	</div>
	```




##References

Angular modules: [W3 Schools](http://www.w3schools.com/angular/angular_modules.asp)
Most of the things: [CodeSchool](http://campus.codeschool.com/courses/shaping-up-with-angular-js)