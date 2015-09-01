namespace app.dashboard {
    'use strict';

    angular
        .module('app.words')
        .config(configureStates);

    configureStates.$inject = ['$stateProvider'];
    /* @ngInject */
    function configureStates($stateProvider: ng.ui.IStateProvider) {
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
}
