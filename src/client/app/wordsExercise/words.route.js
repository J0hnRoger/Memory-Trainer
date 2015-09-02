var app;
(function (app) {
    var words;
    (function (words) {
        'use strict';
        angular
            .module('app.words')
            .config(configureStates);
        configureStates.$inject = ['$stateProvider'];
        /* @ngInject */
        function configureStates($stateProvider) {
            var states = getStates();
            states.forEach(function (state) {
                $stateProvider.state(state.state, state.config);
            });
        }
        function getStates() {
            return [
                {
                    state: 'words',
                    config: {
                        url: '/words',
                        templateUrl: 'app/wordsExercise/wordsExercise.html',
                        controller: 'WordsController',
                        controllerAs: 'vm',
                        title: 'words',
                        settings: {
                            nav: 3,
                            content: '<i class="fa fa-list"></i> Words'
                        }
                    }
                }
            ];
        }
    })(words = app.words || (app.words = {}));
})(app || (app = {}));
//# sourceMappingURL=words.route.js.map