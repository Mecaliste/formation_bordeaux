(function () {
    'use strict';
    angular.module('af.model', ['js-data'])
        .config(modelConfig)
        .constant('afModelConfig', {
            basePath: 'http://jsonplaceholder.typicode.com'
        });

    /**
     *
     * @param DSProvider
     * @param DSHttpAdapterProvider
     * @param afModelConfig
     * @ngInject
     */
    function modelConfig (DSProvider, DSHttpAdapterProvider, afModelConfig) {
        angular.extend(DSProvider.defaults, afModelConfig);
        angular.extend(DSHttpAdapterProvider.defaults, afModelConfig);
    }
})();
