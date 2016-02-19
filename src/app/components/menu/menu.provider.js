(function () {
    'use strict';

    angular.module('af.menu')
        .provider('afMenu', AfMenuProvider);

    /**
     *
     * @ngInject
     */
    function AfMenuProvider() {
        var self = this;
        var menuItems = [];

        this.addMenuItem = addMenuItem;
        this.$get = serviceConstructor;

        function addMenuItem(menuItem) {
            if (!angular.isObject(menuItem)) {
                throw new Error('not an object');
            } else {
                menuItems.push(menuItem);
            }
            return self;
        }

        /**
         *
         * @ngInject
         */
        function serviceConstructor() {
            return {
                menuItems: menuItems
            };
        }
    }
})();
