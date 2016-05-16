//wrapped function in a closure
(function(){
var sortableTable = angular.module("SortableTable", []);

sortableTable.controller("sortableTableController", sortableTableController);

sortableTableController.$inject = ["$scope"];

function sortableTableController($scope) {
	//we just need to know what is the predicate and what order user want's see the data    
	//order based on asc and predicate values  
    $scope.order = function() {
		if($scope.obj.asc)
        $filter('orderby')($scope.foodArray, $scope.predicate);
	else
		$filter('orderby')($scope.foodArray, $scope.predicate, reverse);
   
	}
	
	this.setPrdicateAndOrder = function(value, order){
		$scope.predicate = value;
		$scope.asc = order;
	};
	
$scope.foodArray = [
        {name: "banana", type: "fruit", price: "$1.00", unit: "bundle", stock: 2, demand: 4, need: 2},
        {name: "hamburger", type: "meat", price: "$3.99", unit: "pound", stock: 1, demand: 7, need: 6},
        {name: "milk", type: "dairy", price: "$1.99", unit: "gallon", stock: 0, demand: 2, need: 2},
        {name: "bread", type: "grain", price: "$0.99", unit: "loaf", stock: 0, demand: 4, need: 4},
        {name: "milk", type: "dairy", price: "$1.99", unit: "gallon", stock: 0, demand: 2, need: 2},
        {name: "cheese", type: "dairy", price: "$3.99", unit: "pound", stock: 0, demand: 1, need: 1},
        {name: "coffee", type: "caffeine", price: "$10.99", unit: "pound", stock: 0, demand: 2, need: 2},
        {name: "yogurt", type: "dairy", price: "$0.99", unit: "container", stock: 0, demand: 2, need: 2},
        {name: "cereal", type: "grain", price: "$2.99", unit: "box", stock: 0, demand: 1, need: 1},
        {name: "sausage", type: "meat", price: "$1.99", unit: "gallon", stock: 0, demand: 2, need: 2},
        {name: "chicken", type: "meat", price: "$1.99", unit: "pound", stock: 1, demand: 2, need: 1},
        {name: "carrots", type: "vegetable", price: "$0.49", unit: "pound", stock: 0, demand: 4, need: 4},
        {name: "corn", type: "vegetable", price: "$0.99", unit: "ear", stock: 3, demand: 4, need: 1},
        {name: "potatoes", type: "vegetable", price: "$1.99", unit: "pound", stock: 2, demand: 2, need: 0},
        {name: "red bull", type: "caffeine", price: "$1.99", unit: "can", stock: 1, demand: 2, need: 1},
        {name: "peas", type: "vegetable", price: "$1.99", unit: "pound", stock: 0, demand: 1, need: 1},
        {name: "green chile", type: "vegetable", price: "$0.99", unit: "pound", stock: 1, demand: 3, need: 2},
        {name: "jalepenos", type: "vegetable", price: "$0.99", unit: "pound", stock: 1, demand: 2, need: 1},
        {name: "tomatoes", type: "vegetable", price: "$1.99", unit: "pound", stock: 1, demand: 2, need: 1},
        {name: "ramen", type: "grain", price: "$0.29", unit: "pound", stock: 2, demand: 2, need: 0},
        {name: "spahgetti noodles", type: "grain", price: "$0.99", unit: "pound", stock: 0, demand: 2, need: 2},
        {name: "tortillas", type: "grain", price: "$1.99", unit: "pound", stock: 0, demand: 2, need: 2}
    ];
    
	$scope.predicateCategory = ["name", "type", "price", "unit", "stock", "demand", "need"];
    $scope.foodGroups = ["fruit", "vegetable", "meat", "dairy", "grain", "caffeine"];
        
	//used obj so that child controller can update the value
	$scope.predicate = "type";
	$scope.asc = true;
		
	
 };

	//no need of sortByHearder function. Because we can sort based on predicate and asc value
	//keeping track of asc value for each and every predicate is not necessary. So removed those variables on scope 
})();

