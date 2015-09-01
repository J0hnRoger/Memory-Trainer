var app;
(function (app) {
    var words;
    (function (words_1) {
        'use strict';
        var WordsGeneratorService = (function () {
            function WordsGeneratorService($http, $q, exception, logger) {
                var _this = this;
                this.$http = $http;
                this.$q = $q;
                this.exception = exception;
                this.logger = logger;
                this.getMessageCount = function () { return _this.$q.when(72); };
                this.getRandomWords = function (nbElement) { return _this.getInternalRandomWords(nbElement); };
                this.success = function (response) { return response.data; };
                this.fail = function (error) {
                    var msg = error.data.description;
                    var reason = 'query for people failed.';
                    _this.exception.catcher(msg)(reason);
                    return _this.$q.reject(msg);
                };
            }
            WordsGeneratorService.prototype.getInternalRandomWords = function (nbWords) {
                var deferred = this.$q.defer();
                this.$http.get("https://fr.wikipedia.org")
                    .then(function (data) {
                    var text = $(data.data).find("#mf-lumieresur").text();
                    var words = text.split(' ');
                    var results = [];
                    angular.forEach(words, function (word) {
                        if ($.inArray(word, results) === -1 && word.length > 5)
                            results.push(word);
                    });
                    var randomIndex = Math.floor(Math.random() * results.length - nbWords);
                    deferred.resolve(results.slice(randomIndex, randomIndex + nbWords));
                });
                return deferred.promise;
            };
            WordsGeneratorService.$inject = ['$http', '$q', 'exception', 'logger'];
            return WordsGeneratorService;
        })();
        words_1.WordsGeneratorService = WordsGeneratorService;
        angular
            .module('app.words')
            .service('wordsGeneratorService', WordsGeneratorService);
    })(words = app.words || (app.words = {}));
})(app || (app = {}));
//# sourceMappingURL=words.service.js.map