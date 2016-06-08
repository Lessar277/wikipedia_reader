angular.module('wikiReader')
    .service('openSearch', ['$http', function($http) {
        this.suggest = function(input, callback){
            if (input) {
                $http.jsonp(`http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${input}&limit=5&namespace=0&suggest=1&warningsaserror=1&callback=JSON_CALLBACK`).then(callback)
            }
        }
    }]);
