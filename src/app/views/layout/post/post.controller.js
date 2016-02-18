(function () {
    'use strict';

    angular.module('af.post')
        .controller('PostController', PostController);

    /**
     *
     * @param $log
     * @param postModel
     * @param $stateParams
     * @constructor
     * @ngInject
     */
    function PostController($log, postModel, $stateParams) {
        $log.debug('post controller');
        var vm = this;
        vm.title = "Post Page";
        vm.post = postModel.get($stateParams.id);
        $log.debug('post  :' + vm.post);
        $log.debug('post controller ending');
    }
})();
