

sortableTable.directive('downarrowButton', function(){
	return {
		restrict: 'EA',
		templateUrl: 'downarrow-button.html',
		require: 'sortableTableController',
		controller: function() {
			
				scope.makePrdicate = function(){
					sortableTableCtrl.setPredicateAndOrder(attr.sortValue, true);
					//scope.asc = true;
				};
	
		}
}
});