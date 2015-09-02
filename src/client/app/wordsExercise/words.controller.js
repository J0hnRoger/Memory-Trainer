var app;
(function (app) {
    var words;
    (function (words) {
        'use strict';
        var WordsController = (function () {
            function WordsController(logger, wordsGenerator) {
                this.logger = logger;
                this.wordsGenerator = wordsGenerator;
                this.title = 'Words Training';
                this.duration = 5;
                this.nbElement = 10;
                this.showConfig = true;
                this.finish = false;
                this.result = false;
                this.score = 0;
            }
            //Methods
            WordsController.prototype.SetRandomWords = function () {
                var that = this;
                this.wordsGenerator.getRandomWords(this.nbElement)
                    .then(function (data) {
                    that.words = [];
                    angular.forEach(data, function (word) {
                        that.words.push({ "word": word, "color": "black" });
                    });
                    that.showConfig = false;
                    that.result = false;
                });
            };
            WordsController.prototype.DisplayResult = function () {
                this.finish = true;
            };
            WordsController.prototype.CalculateResults = function () {
                var that = this;
                angular.forEach(this.words, function (word) {
                    word.isCorrect = false;
                    if (word.word == word.result) {
                        that.score = that.score + 1;
                        word.color = "green";
                        word.isCorrect = true;
                    }
                    else
                        word.color = "red";
                });
                this.finish = false;
                this.result = true;
                this.showConfig = true;
                this.chrono.reset();
            };
            WordsController.$inject = ['logger', 'wordsGeneratorService'];
            return WordsController;
        })();
        words.WordsController = WordsController;
        angular
            .module('app.words')
            .controller('WordsController', WordsController);
    })(words = app.words || (app.words = {}));
})(app || (app = {}));
//# sourceMappingURL=words.controller.js.map