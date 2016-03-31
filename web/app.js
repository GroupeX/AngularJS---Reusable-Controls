'use strict';

var app = angular.module("myApp",[]);

app.controller("DefaultController", ['$scope', 'StringFactory', function($scope, StringFactory) {
        $scope.person = {firstName: 'Cristiano', lastName: 'Ronaldo'};
        $scope.titles = StringFactory.titleCase('my example service');
        $scope.cameled = StringFactory.camelCase('my example service');
        $scope.dashed = StringFactory.dashCase('my example service');
}]);

app.filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});

app.filter('name', function() {
    return function(input) {
        return input.lastName + ", " + input.firstName;
    };
});

app.directive('loginForm', function() {
    return {
        templateUrl:'partials/loginform.html'
    };
});

app.factory('StringFactory' , function() {
    
    var titleCase = function (text) {
            return text.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
    };
    
    var camelCase = function (text) {
        var textUpppered = text.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        return textUpppered.replace(/\W+/g, '')
                .replace(/([a-z\d])([A-Z])/g, '$1$2');
    };
    
    var dashCase = function (text) {
        var textUpppered = text.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        return textUpppered.replace(/\W+/g, '')
                .replace(/([a-z\d])([A-Z])/g, '$1-$2');
    };
    
    return {
        titleCase: titleCase,
        camelCase: camelCase,
        dashCase: dashCase
    };  
});