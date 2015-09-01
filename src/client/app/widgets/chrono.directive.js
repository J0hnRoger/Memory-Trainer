/// <reference path="../../../../typings/angularjs/angular.d.ts" />
var app;
(function (app) {
    var words;
    (function (words) {
        'use strict';
        Chrono.$inject = ['$interval', 'logger'];
        function Chrono($interval, logger) {
            var directive = {
                scope: {
                    'duration': '=',
                    'trigger': '=',
                    'finish': '&'
                },
                link: link,
                template: '<h1>{{duration}}"<h1>',
                restrict: 'EA'
            };
            function link(scope, element, attrs) {
                var stop;
                scope.$watch("trigger", function () {
                    if (scope.trigger == true) {
                        stop = $interval(function () {
                            scope.duration = scope.duration - 1;
                            if (scope.duration == 0) {
                                $interval.cancel(stop);
                                scope.finish();
                            }
                        }, 1000);
                    }
                });
            }
            return directive;
        }
        angular
            .module('app.widgets')
            .directive('chrono', Chrono);
    })(words = app.words || (app.words = {}));
})(app || (app = {}));
//# sourceMappingURL=chrono.directive.js.map