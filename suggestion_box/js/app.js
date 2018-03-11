var app = angular.module('SuggestionBox',['ngRoute']);
app.config(function($routeProvider){$routeProvider

.when('/',{
	controller:'HomeController',
	templateUrl:'C:/ANGULARJS_PROJECT/suggestion_box/views/home.html'
})
.when('/',{
	controller:'SuggestionController',
	templateUrl:'C:/ANGULARJS_PROJECT/suggestion_box/views/suggestion.html'
})

otherwise({
	redirectTo: '/'
});
});
