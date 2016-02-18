(function () {
    'use strict';
    angular.module('af.model')
        .factory('postModel', postModel);

    function postModel(DS, $log) {
        return DS.defineResource({
            name: 'post',
            idAttribute: 'id',
            endpoint: 'posts',
            relations: {
                hasMany: {
                    comment: {
                        localField : 'comments',
                        foreignKey : 'postId'
                    }
                }
            },
            afterFindAll: function(resource, obj, cb) {
                $log.debug('Resource : ' + resource);
                $log.debug('Object : ' + obj);
                cb(null, obj);
            }
        })
    }
})();
