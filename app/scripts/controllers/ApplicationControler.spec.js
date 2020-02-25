describe('speechRank', function() {
    beforeEach(module('speechRank'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('ApplicationController', function() {
        it('set right user', function() {
            var $scope = {};
            $controller('ApplicationController', { $scope: $scope });
            expect($scope.user).toEqual({
		        username: 'Ola Kunysz',
		        userId: 123
	        });
        });
    });
});
