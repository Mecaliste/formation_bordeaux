(function () {
    'use strict';

    angular
        .module('formationBordeaux')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope) {
        /*eslint angular/on-watch:0*/
        $rootScope
            .$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                $log.error(error);
            });
        $log.debug('runBlock end');
    }

})();
