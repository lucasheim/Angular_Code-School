#Angular!

Basically, Angular is a tool used for adding dinamicy in web pages/web apps. Thinking about a page with buttons and menus, each time you want an action to happen, you'd need to send a request to the server and it'd return the whole page again. Angular is a powerful tool to change this behavior, so that the server only sends the information needed for the changes on the page, without having to reload it fully.

[TOC]

##Modules

An AngularJS module defines an application. A module is a container for the application controllers and the controllers always belong to one.

Example:
```html
<!DOCTYPE html>
<html ng-app = "example"> //Necessary to use "example" directives inside the html document
<head>
	<script type="text/javascript">
		var app = angular.module("example",[]);
	</script>
</head>
<body>

</body>
</html>
```



##References

Angular modules: [W3 Schools](http://www.w3schools.com/angular/angular_modules.asp)