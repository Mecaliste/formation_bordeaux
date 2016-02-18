(function () {
    'use strict';

    angular.module('af.form')
        .controller('FormController', FormController);

    /**
     *
     * @param $log
     * @param postModel
     * @constructor
     * @ngInject
     */
    function FormController($log, postModel) {
        $log.debug('Form controller');
        var vm = this;
        vm.submit = function (post) {
            if (vm.postForm.$valid) {
                postModel
                    .create(post)
                    .then(function (createdPost) {
                        $log.debug(createdPost);
                    })
                    .catch(function (err) {

                        $log.debug(err);
                    })
            }
        }
        $log.debug('Form controller ending');
    }
})();
