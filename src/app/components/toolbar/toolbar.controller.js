(function () {
    'use strict';

    angular.module('af.toolbar')
        .controller('ToolbarController', ToolbarController);

    /**
     *
     * @param $log
     * @param $auth
     * @param $mdSidenav
     * @param $state
     * @constructor
     * @ngInject
     */
    function ToolbarController($log, $auth, $mdSidenav, $state) {
        $log.debug('toolbar controller');
        var vm = this;
        vm.toggleAside = toggleAside;
        vm.logout = logout;

        function toggleAside() {
            $mdSidenav('menu').toggle();
        }

        function logout() {
            $auth.logout();
            $state.go('login');
        }
        $log.debug('toolbar controller ending');
    }
})();
