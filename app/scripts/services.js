'use strict';

angular.module('IndexOfApp', ['firebase'])

// .constant('baseURL', 'https://startup-chief.firebaseio.com/')

.factory('IndexFactory', function myService(angularFire) {
    var _url = 'https://startup-chief.firebaseio.com/';
    var _ref = new Firebase(_url)

    return {
        items: function(scope, localScopeVarName) {
            angularFire(_ref, scope, localScopeVarName);
        }
    };
});


;