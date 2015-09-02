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
        var ChronoDirective = (function () {
            function ChronoDirective($interval, logger) {
                var _this = this;
                this.$interval = $interval;
                this.logger = logger;
                //Directive Properties
                this.template = '<h1>{{duration}}"<h1>';
                this.restrict = 'EA';
                this.scope = {
                    'duration': '=',
                    'finish': '&',
                    'controls': '='
                };
                //Methods
                this.link = function (scope, element, attrs) {
                    var stop, initialDuration = scope.duration;
                    var $interval = _this.$interval;
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
                    function stopTimer() {
                        if (angular.isDefined(stop)) {
                            $interval.cancel(stop);
                            stop = undefined;
                        }
                    }
                    function reset() {
                        scope.duration = initialDuration;
                    }
                };
            }
            //Complet Syntax - factory static retourn a fonction. This allows to use annotation injection :  $inject on dependances.
            ChronoDirective.factory = function () {
                var directive = function ($interval, logger) {
                    return new ChronoDirective($interval, logger);
                };
                directive.$inject = ['$interval', 'logger'];
                return directive;
            };
            return ChronoDirective;
        })();
        words.ChronoDirective = ChronoDirective;
        ;
        angular
            .module('app.widgets')
            .directive('chrono', ChronoDirective.factory());
    })(words = app.words || (app.words = {}));
})(app || (app = {}));
//# sourceMappingURL=chrono.directive.js.map