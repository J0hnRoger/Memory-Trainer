/// <reference path="../../../../typings/angularjs/angular.d.ts" />
namespace app.words {
    'use strict';
    
    interface IChronoScope extends ng.IScope {
     duration : number,
	 finish : Function,
     controls : {}
    }
    
    // Generate a chronometer.
    // Usage:
    //  <chrono duration="vm.duration" controls="vm.chrono" finish="vm.DisplayResult()"/>
    // Creates:
    //  <chrono duration="vm.duration" controls="vm.chrono" finish="vm.DisplayResult()"/>
    Chrono.$inject = ['$interval', 'logger'];
    function Chrono ($interval : ng.IIntervalService, logger : blocks.logger.Logger) : ng.IDirective {
        var directive = <ng.IDirective> {
            scope: {
                'duration': '=',
                'finish': '&',
                'controls': '='
            },
            link : link,
            template: '<h1>{{duration}}"<h1>',
            restrict: 'EA'
        };
        
        function link(scope : IChronoScope, element : ng.IAugmentedJQuery, attrs : ng.IAttributes ) : void {
            var stop : ng.IPromise<any>,
                initialDuration = scope.duration;
            
            scope.controls = {
                start : start,
                stop : stop,
                reset : reset 
            }
            
            function start(){
                stop = $interval(():void => {
                            scope.duration = scope.duration - 1;
                            if (scope.duration == 0){
                                    $interval.cancel(stop);
                                    if (angular.isDefined(scope.finish))
                                        scope.finish();
                            }
                        }, 1000);
            }
            
            function stop(){
                if(angular.isDefined(stop)) {
                    $interval.cancel(stop);
                    stop = undefined;
                }
            }
            
            function reset (){
             scope.duration = initialDuration;
            }
        }
        
        return directive; 
    } 

    angular
        .module('app.widgets')
        .directive('chrono', Chrono);
}
