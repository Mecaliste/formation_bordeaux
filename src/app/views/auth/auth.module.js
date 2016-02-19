(function () {
    'use strict';
    angular.module('af.auth', [
            'satellizer',
            'ngMaterial',
            'ui.router'
        ])
        .config(authConfig)
        .constant('afAuthConfig', {
            baseUrl: 'http://localhost:3000'
        });
    /**
     *
     * @param $authProvider
     * @param afAuthConfig
     * @param $stateProvider
     * @ngInject
     */
    function authConfig($authProvider, afAuthConfig, $stateProvider) {
        angular.extend($authProvider, afAuthConfig);
        $stateProvider.state('auth', {
            url: '',
            abstract: true,
            templateUrl: 'app/views/auth/auth.html',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        })
    }

    /**
     * @ngInject
     * @param $auth
     * @param $q
     */
    function skipIfLoggedIn($auth, $q, $location) {
        /* eslint no-unused-vars:0*/
        return $q(function (resolve, reject) {
            if ($auth.isAuthenticated()) {
                $location.path('home');
            } else {
                resolve();
            }
        })
    }
})();
