(function () {
    'use strict';
    angular.module('af.model')
        .factory('commentModel', commentModel);

    function commentModel(DS) {
        return DS.defineResource({
            name: 'comment',
            idAttribute: 'id',
            endpoint: 'comments',
            relations: {
                belongTo: {
                    post: {
                        localField: 'post',
                        localKey: 'postId'
                    }
                }
            }
        })
    }
})();
