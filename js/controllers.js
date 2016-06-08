angular.module('wikiReader')
    .controller('MainController', ['openSearch', function(openSearch) {
        var self = this;
        this.input="";

        this.getSuggestions = function(input, limit){
            openSearch.getSuggestions(input, limit, function(res){
                self.suggestions = res.data[1];
            })
        };
        this.collapseHide = function() {
            setTimeout(function(){$('.collapse').collapse('hide')}, 100)
        }
        this.collapser = function(input) {
            if (!input) {self.collapseHide()}
            else $('.collapse').collapse('show');
        }
        this.setSearchValue = function(choice) {
            self.input = choice;
            console.log(choice)
        }
    }])
    

    .controller('ArticlesController', ['openSearch', function(openSearch){
        var self = this;
        this.isEmpty = true;
        this.testing = function(input) {
            console.log(1, input)
        }
        this.getArticles = function(input, limit) {
            openSearch.getSuggestions(input, limit, function(res) {
                self.titles = res.data[1];
                self.descriptions = res.data[2];
                self.links = res.data[3];
                self.isEmpty = false;
            })
        }
    }])