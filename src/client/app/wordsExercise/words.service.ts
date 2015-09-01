namespace app.words {
    'use strict';

    export interface IWordService {
        getRandomWords: (nbWord : number) => ng.IPromise<string[]>;
    }

    export class WordsGeneratorService implements IWordService {
        static $inject: Array<string> = ['$http', '$q', 'exception', 'logger'];
        
		constructor(
            private $http: ng.IHttpService,
            private $q: ng.IQService,
            private exception: blocks.exception.IException,
            private logger: blocks.logger.Logger) {
        }

        getMessageCount: () => ng.IPromise<number> = () => this.$q.when(72);

        getRandomWords: (nbElement : number) => ng.IPromise<string[]> = (nbElement : number) => this.getInternalRandomWords(nbElement);
        
        private getInternalRandomWords( nbWords : number){
            var deferred = this.$q.defer();
            this.$http.get("https://fr.wikipedia.org")
                    .then(function (data){
                        var text = $(data.data).find("#mf-lumieresur").text();
                        var words = text.split(' ');
                        var results = [];
                        angular.forEach(words, function (word){
                            if ($.inArray(word, results) === -1 && word.length > 5)
                                results.push(word);
                        });
                        var randomIndex = Math.floor(Math.random()*results.length - nbWords);
                        deferred.resolve(results.slice(randomIndex, randomIndex + nbWords));                        
                    });
            return deferred.promise;        
        }
        
        private success: (response: any) => {} = (response) => response.data;

        private fail: (error: any) => {} = (error) => {
            var msg = error.data.description;
            var reason = 'query for people failed.';
            this.exception.catcher(msg)(reason);
            return this.$q.reject(msg);
        }
    }

    angular
        .module('app.words')
        .service('wordsGeneratorService', WordsGeneratorService);
}
