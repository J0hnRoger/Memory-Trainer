/// <reference path="../../../../typings/angularjs/angular.d.ts" />
var app;
(function (app) {
    var words;
    (function (words) {
        'use strict';
        // Generate a chronometer.
        // Usage:
        //  <chrono duration="vm.duration" controls="vm.chrono" finish="vm.DisplayResult()"/>
        // Creates:
        //  <chrono duration="vm.duration" controls="vm.chrono" finish="vm.DisplayResult()"/>
        Chrono.$inject = ['$interval', 'logger'];
        function Chrono($interval, logger) {
            var directive = {
                scope: {
                    'duration': '=',
                    'finish': '&',
                    'controls': '='
                },
                link: link,
                template: '<h1>{{duration}}"<h1>',
                restrict: 'EA'
            };
            function link(scope, element, attrs) {
                var stop, initialDuration = scope.duration;
                scope.controls = {
                    start: start,
                    stop: stop,
                    reset: reset
                };
                function start() {
                    stop = $interval(function () {
                        scope.duration = scope.duration - 1;
                        if (scope.duration == 0) {
                            $interval.cancel(stop);
                            if (angular.isDefined(scope.finish))
                                scope.finish();
                        }
                    }, 1000);
                }
                function stop() {
                    if (angular.isDefined(stop)) {
                        $interval.cancel(stop);
                        stop = undefined;
                    }
                }
                function reset() {
                    scope.duration = initialDuration;
                }
            }
            return directive;
        }
        angular
            .module('app.widgets')
            .directive('chrono', Chrono);
    })(words = app.words || (app.words = {}));
})(app || (app = {}));
//# sourceMappingURL=chrono.directive.js.map