namespace app.domain {
	interface IEvent {
		title : string;
		description : string;
		date : number;
	} 
	
	export class HistoricEvent implements IEvent {
		constructor(public title : string, public description : string, public date : number) {}
	}  
}