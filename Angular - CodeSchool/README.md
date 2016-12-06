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

```javascript
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

##Directives

####NG-APP####

As explained in the Module section, this is for attaching the application module to the page.

```html
<html ng-app="store">
```
####NG-CONTROLLER####

As explained in the Controllers section, this is for attaching the Controller function to the page.

```html
<body ng-controller="StoreController as store">
```

####NG-SHOW####

Allow us to control the visibility of an HTML element:

```html
<h1> {{store.product.name}} </h1>
<h2> ${{store.product.price}}</h2>
<p>  {{store.product.description}}</p>
<button ng-show="store.product.canPurchase"> Add to Cart</button>
```
####NG-HIDE####

Yeap, exactly the opposite of the above.

####NG-REPEAT####

This is a very useful one, so we can show several items from an array.

So, we have:
Controller: store
Property: products

The code says:
1. use the StoreController (alias = store)
2. repeat each item on the products array, from the controller store as product(alias)

```html
<div ng-controller = "StoreController as store"> 
	<div ng-repeat = "product in store.products">
		<h1> {{product.name}} </h1>
		<h2> ${{product.price}}</h2>
		<p>  {{product.description}}</p>
	</div>
</div>
```
####NG-SRC####

To display images:

```html
<h3>
	{{product.name}}
	<em class="pull-right">{{product.price | currency}}</em>
	<img ng-src="{{product.images[0].full}}">
</h3>
```

####NG-CLICK####

It raises an event when that part of the html is clicked. It takes an expression for assigning values.

```html
<ul class="nav nav-pills">
		<li> <a href ng-click="tab = 1">Description</a></li>
		<li> <a href ng-click="tab = 2">Specifications</a></li>
		<li> <a href ng-click="tab = 3">Reviews</a></li>
	</ul>
```
When you click, the {{tab}} value automatically gets updated. You can use {{tab}} to display it.

####NG-INIT####

Allows us to evaluate an expression in the current scope

```html
<section ng-init="tab = 1">
				<ul class="nav nav-pills">
					<li> <a href ng-click="tab = 1">Description</a></li>
					<li> <a href ng-click="tab = 2">Specifications</a></li>
					<li> <a href ng-click="tab = 3">Reviews</a></li>
				</ul>
			</section>
			<div class="panel" ng-show="tab===1">
				<h4>Description</h4>
				<p>{{product.description}}</p>
			</div>
</section>
```

####NG-CLASS####

Okay, this one is a bit tricky. An example:

```html
<section ng-init="tab = 1">
				<ul class="nav nav-pills">
					<li ng-class="{active:tab===1}"> <a href ng-click="tab = 1">Description</a></li>
					<li ng-class="{active:tab===2}"> <a href ng-click="tab = 2">Specifications</a></li>
					<li ng-class="{active:tab===3}"> <a href ng-click="tab = 3">Reviews</a></li>
				</ul>
			</section>
```
So, this basically means that:
If tab===X, X being the value being compared in each <li>, then we set the li class to active. This is the format in which we pass an object to the ng-class directive: 
*{nameOfTheClass:booleanExpression}*

We can use a simple string too:

```html
<section ng-init="tab = 1">
				<ul class="nav nav-pills">
					<li ng-class="active"> <a href ng-click="tab = 1">Description</a></li>
					<li ng-class="active"> <a href ng-click="tab = 2">Specifications</a></li>
					<li ng-class="active"> <a href ng-click="tab = 3">Reviews</a></li>
				</ul>
			</section>
```
So we just set a class.

##FILTERS

First, it is important for us to know what the PIPE CARACTHER does:
	| -> Take the result of the first expression and send the output into the second expression.

So, when we have:

```html
<div ng-controller = "StoreController as store">
	<ul class="list-group">
		<li class="list-group-item" ng-repeat="product in store.products">
			<h3>
				{{product.name}}
				<em class="pull-right">{{product.price | currency}}</em>
			</h3>
		</li>
	</ul>
</div>
```
We are saying:

1. Get the value of product.price
2. Output it as a currency (FILTER)

It'll automatically add the dollar sign and the decimals.

###Some filters

```html
{{'1388123412323' | date:'MM/dd/yyyy' @ h:mma'}} //Convert date

{{'octagon gem' | uppercase}} //all upper/lower case

{{'My Description' | limitTo:8}}//limit the number of characters

<li ng-repeat="product in store.products | limiteTo:3">//limit the number of repeats

<li ng-repeat="product in store.products | orderBy> '-price'">//order by "-" = descending order

```
	
##References

Angular modules: [W3 Schools](http://www.w3schools.com/angular/angular_modules.asp)

Most of the things: [CodeSchool](http://campus.codeschool.com/courses/shaping-up-with-angular-js)
