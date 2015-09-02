/// <reference path="../../tsd.d.ts" />
namespace app.dates {

	interface IDatesController {
		
	}
	
	export class DatesController implements IDatesController {
		title : string = "Dates Historiques"
		static $inject: Array<string> = ['logger', 'wordsGeneratorService'];
        constructor(private logger: blocks.logger.Logger, private wordsGenerator : app.words.WordsGeneratorService ) {}
        
	}
	
	angular.module("app.dates")
		.controller("DatesController", DatesController)
}