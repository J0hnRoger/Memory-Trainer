/// <reference path="../../../../typings/angularjs/angular.d.ts" />
namespace app.words {
    'use strict';

    export interface IChronoScope extends ng.IScope {
     duration : number,
	 trigger : boolean,
	 finish : Function
    }
    
    Chrono.$inject = ['$interval', 'logger'];
    function Chrono ($interval : ng.IIntervalService, logger : blocks.logger.Logger) : ng.IDirective {
        var directive = <ng.IDirective> {
            scope: {
                'duration': '=',
                'trigger': '=',
                'finish': '&'
            },
            link : link,
            template: '<h1>{{duration}}"<h1>',
            restrict: 'EA'
        };
        
        function link(scope : IChronoScope, element : ng.IAugmentedJQuery, attrs : ng.IAttributes ) : void {
            var stop : ng.IPromise<any>;

            scope.$watch("trigger", ():void => {
                if (scope.trigger == true){
                    stop = $interval(():void => {
                        scope.duration = scope.duration - 1;
                        if (scope.duration == 0){
                                $interval.cancel(stop);
                                scope.finish();
                        }
                    }, 1000)    
                }
            });
        }
        return directive; 
    } 

    angular
        .module('app.widgets')
        .directive('chrono', Chrono);
}
