(function () {
    'use strict';
    angular.module('af.layout', [
            'ui.router',
            'ngMaterial',
            'af.home',
            'af.post',
            'af.form'])
        .config(layoutRouting);

    /**
     *
     * @param $stateProvider
     * @ngInject
     */
    function layoutRouting($stateProvider) {
        $stateProvider.state('layout', {
            url: '',
            abstract: true,
            templateUrl: 'app/views/layout/layout.html'
        })
    }
})();
