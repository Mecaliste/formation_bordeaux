(function () {
    'use strict';

    angular.module('af.auth')
        .controller('LoginController', LoginController);

    /**
     *
     * @param $log
     * @param $auth
     * @constructor
     * @ngInject
     */
    function LoginController($log, $auth, $state) {
        $log.debug('login controller');
        var vm = this;
        vm.login = function (user) {
            $auth
                .login(user)
                .then(function (data) {
                    $auth.me = data.user;
                    $log.debug('success', data);
                    $state.go('home');
                }).catch(function (err) {
                    $log.debug(err);
            })
        };
        $log.debug('login controller ending');
    }
})();
