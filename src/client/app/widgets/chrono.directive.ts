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
    export class ChronoDirective implements ng.IDirective {
        
        constructor(private $interval: ng.IIntervalService, private logger : blocks.logger.Logger) {}

        //Directive Properties
        template:string = '<h1>{{duration}}"<h1>';
        restrict:string = 'EA';
        scope:{} = {
                'duration': '=',
                'finish': '&',
                'controls': '='
            };
        //Methods
        link = (scope : IChronoScope, element : ng.IAugmentedJQuery, attrs : ng.IAttributes) =>  {
            var stop : ng.IPromise<any>,
                initialDuration = scope.duration;
                var $interval = this.$interval;
                
            scope.controls = {
                start : start,
                stop : stop,
                reset : reset 
            }
            
            function start(){
                stop = $interval(() => {
                        scope.duration = scope.duration - 1;
                        if (scope.duration == 0){
                                $interval.cancel(stop);
                                if (angular.isDefined(scope.finish))
                                    scope.finish();
                        }
                    }, 1000);
            }
            
            function stopTimer(){
                if(angular.isDefined(stop)) {
                    $interval.cancel(stop);
                    stop = undefined;
                }
            }
            
            function reset (){
                scope.duration = initialDuration;
            }
        };
        
        //Complet Syntax - factory static retourn a fonction. This allows to use annotation injection :  $inject on dependances.
        static factory() : ng.IDirectiveFactory {
            var directive : ng.IDirectiveFactory = function ($interval:ng.IIntervalService, logger : blocks.logger.Logger) {
                  return new ChronoDirective($interval, logger);
            }
            directive.$inject = ['$interval', 'logger'];
            return directive;
        }
    }; 

    angular
        .module('app.widgets')
        .directive('chrono', ChronoDirective.factory());
}
