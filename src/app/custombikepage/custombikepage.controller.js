    'use strict';
    (function () {

    angular
        .module('app.custombikepage')
        .controller('CustomBikePageController', CustomBikePageController);

    /* @ngInject */
	function CustomBikePageController($stateParams, $scope,  $q, logger, CoreService)
	{

        $scope.forkColor = "black";
        $scope.frameColor = 'white';
        $scope.seatColor = 'white';
        $scope.handleColor = 'white';
        $scope.frameDecalColor = 'white';
        $scope.click = function()
        {
            $scope.forkColor = "orange";
        }

        $scope.forkColor = "black";
        $scope.frameColor = 'black';
        $scope.seatColor = 'black';
        $scope.handleColor = 'black';
        $scope.frameDecalColor = 'black';
    }
})();
