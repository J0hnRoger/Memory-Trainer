/// <reference path="../../tsd.d.ts" />
namespace app.dates {

	interface IDatesController {
		events : app.domain.HistoricDate[]
	}
	
	export class DatesController implements IDatesController {
		title : string = "Dates Historiques"
		events : app.domain.HistoricDate[];
		duration : number = 5;
		display : boolean = true;
		chrono : any;
		score : number = 0;
		themes : string [] =  ["Indépendance des états-unis", "Révolution Française", "Histoire du Hip Hop"];
		intro : boolean = true;
		
		static $inject: Array<string> = ['logger', 'HistoricDatesService'];
        constructor(private logger: blocks.logger.Logger, private historicDatesFactory : app.dates.HistoricDatesService) {
			historicDatesFactory.getHistoryThemes().then(
				(data) => {
					this.events = data;
				}
			)
			
			
		}
		
		CalculateResults() {
			angular.forEach(this.events, (event) => {
                event.dateIsCorrect = false;
                event.titleIsCorrect = false;
                if (event.date == event.dateResult)
                    this.score = this.score + 1;
                if (event.title == event.titleResult)
                    this.score = this.score + 1;
            });
			this.display = true;
			this.chrono.reset();
		}
	}
	
	angular.module("app.dates")
		.controller("DatesController", DatesController)
}