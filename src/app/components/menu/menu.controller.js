(function () {
    'use strict';

    angular.module('af.menu')
        .controller('MenuController', MenuController);

    /**
     *
     * @param $log
     * @constructor
     * @ngInject
     */
    function MenuController($log, afMenu) {
        $log.debug('Menu controller');
        var vm = this;

        vm.menuItems = afMenu.menuItems;

        $log.debug('Menu controller ending');
    }
})();
