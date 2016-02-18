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
        vm.postModel = postModel;
        vm.log = $log;
    }

    FormController.prototype.submit = function () {
        var vm = this;
        vm.submit = function (post) {
            if (vm.postForm.$valid) {
                vm.postModel
                    .create(post)
                    .then(function (createdPost) {
                        vm.log.debug(createdPost);
                    })
                    .catch(function (err) {

                        vm.log.debug(err);
                    })
            }
            $log.debug('Form controller ending');
        }
    }
})();
