sortableTable.directive('uparrowButton', function(){
	return {
		restrict: 'EA',
		templateUrl: 'uparrow-button.html',
		require: '^sortableTableController',
		/*scope: {
			predicate = '=',
			asc = '='
		},*/
		controller: function() {
			
				scope.makePrdicate = function(){
					sortableTableCtrl.setPredicateAndOrder(attr.sortValue, true);
					//scope.asc = true;
				};
		}
		
	};
});