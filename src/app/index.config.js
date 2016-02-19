(function () {
    'use strict';

    angular
        .module('formationBordeaux')
        .config(config);

    /** @ngInject */
    function config($logProvider, $urlRouterProvider, $locationProvider) {
        //$urlRouterProvider.otherwise('/home');
        // Enable log
        $logProvider.debugEnabled(true);
        $locationProvider.html5Mode(true);
    }
})();
