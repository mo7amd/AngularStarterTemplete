'use strict';

angular.module('IndexOfApp')

.controller('IndexController', ['$scope', 'IndexFactory',
    function($scope, IndexFactory) {

        $scope.showHellow = true;
        $scope.message = 'Loading ...';
        // ******************fetch dishes data from server**************************
        IndexFactory.items($scope, 'hellow');
    }
]);