namespace app.dates {
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
                state: 'dates',
                config: {
                    url: '/dates',
                    templateUrl: 'app/datesExercise/datesExercise.html',
                    controller: 'DatesController',
                    controllerAs: 'vm',
                    title: 'dates',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-history"></i> Historic Dates'
                    }
                }
            }
        ];
    }
}
