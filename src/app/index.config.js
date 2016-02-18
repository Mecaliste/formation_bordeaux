(function () {
    'use strict';

    angular
        .module('formationBordeaux')
        .config(config);

    /** @ngInject */
    function config($logProvider, $urlRouterProvider) {
        // Enable log
        $logProvider.debugEnabled(true);
        $urlRouterProvider.when('','/home');
        //$urlRouterProvider.otherwise('/home');
    }

})();
