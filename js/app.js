var app = angular.module('wikiReader', [])
    .controller('SearchController', ['$timeout', function($timeout) {
        var self = this;
        this.foo = 'bar';
        this.userSearch;
        this.logSearch = function(term) {
            if (term === "") {$('.collapse').collapse('hide');}
            $('.collapse').collapse('show');
        };
        this.cities = [
            'Bucharest',
            'London',
            'Busteni'
        ];
    }]);
