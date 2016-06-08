angular.module('wikiReader')
    .controller('MainController', ['openSearch', function(openSearch) {
        var self = this;

        self.getSuggestions = function(input, limit){
            openSearch.suggest(input, limit, function(res){
                self.suggestions = res.data[1];
                console.log(self.suggestions)
            })
        };
        self.collapseHide = function() {
            $('.collapse').collapse('hide');
        }
        self.collapser = function(input) {
            if (!input) {self.collapseHide()}
            else $('.collapse').collapse('show');
        }

    }])
