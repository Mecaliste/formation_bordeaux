(function () {
    'use strict';

    angular.module('af.post', [
            'ui.router',
            'ngMaterial',
            'af.model'
        ])
        .config(postConfig);

    /**
     *
     * @param $stateProvider
     * @ngInject
     */
    function postConfig($stateProvider) {
        $stateProvider.state('post', {
            url: 'post/:id',
            parent: 'layout',
            views: {
                content: {
                    templateUrl: 'app/views/layout/post/post.html',
                    controller: "PostController as vm"
                }
            },
            resolve: {
                post: getPost
            }
        })
    }

    /**
     *
     * @param postModel
     * @param $stateParams
     * @param commentModel
     * @ngInject
     */
    /*eslint no-unused-vars: 0*/
    function getPost(postModel, $stateParams, commentModel) {
        return postModel
            .find($stateParams.id)
            .then(function (post) {
                return postModel.loadRelations(post, ['comment'])
            });
    }
})();
