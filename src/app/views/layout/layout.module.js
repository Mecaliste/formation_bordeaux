(function () {
    'use strict';
    angular.module('af.layout', [
            'ui.router',
            'ngMaterial',
            'af.home',
            'af.post',
            'af.form',
            'af.toolbar',
            'af.menu'
    ])
        .config(layoutRouting);

    /**
     *
     * @param $stateProvider
     * @ngInject
     */
    function layoutRouting($stateProvider, afMenuProvider) {
        $stateProvider.state('layout', {
            url: '',
            abstract: true,
            templateUrl: 'app/views/layout/layout.html',
            resolve: {
                restricted: restricted
            }
        });
        afMenuProvider
            .addMenuItem({
                name:'home',
                state:'home'
            })
            .addMenuItem({
                name:'form',
                state:'form'
            });
    }

    /**
     *
     * @param $auth
     * @param $location
     * @param $http
     * @param $log
     * @returns {*|Promise}
     * @ngInject
     */
    function restricted ($auth, $location, $http, $log) {
        if ($auth.isAuthenticated) {
            return $http.get('http://localhost:3000/auth/me')
                .then(function(httpData) {
                    $auth.me = httpData.data;
                    return httpData;
                }).catch(function(err) {
                    $log.debug(err);
                    $auth.logout();
                    $location.path('/login');
                });
        } else {
            $location.path('/login');
        }
    }
})();
