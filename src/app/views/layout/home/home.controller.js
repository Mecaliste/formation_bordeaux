(function () {
    'use strict';

    angular.module('af.home')
        .controller('HomeController', HomeController);

    /**
     *
     * @param $log
     * @param postModel
     * @constructor
     * @ngInject
     */
    function HomeController($log, postModel) {
        $log.debug('home controller');
        var vm = this;
        vm.title = "Home Page";
        vm.posts = postModel.getAll();
        $log.debug('home controller ending');
    }
})();
