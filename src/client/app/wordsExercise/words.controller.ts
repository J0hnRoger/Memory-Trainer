namespace app.words {
    'use strict';
    
    export interface IExercice {
		title : string;
		duration : number;
		nbElement : number;
        words : Array<any>;
        SetRandomWords : (nbWord : number) => void;
        showConfig : boolean;
        score : number;
        chrono : { start : Function, reset: Function };        
	}
    
    export class WordsController implements IExercice {
        title: string = 'Words Training';
        duration : number = 5;
        nbElement : number = 10;
        words : Array<any>;
        wordGenerator : app.words.WordsGeneratorService;
        showConfig : boolean = true;
        finish :boolean = false;
        result:boolean = false;
        score:number = 0;
        chrono : { start : Function, reset: Function };
         
        static $inject: Array<string> = ['logger', 'wordsGeneratorService'];
        constructor(private logger: blocks.logger.Logger, private wordsGenerator : app.words.WordsGeneratorService ) {}
        
        //Methods
        SetRandomWords(){
            this.words = [];
            this.wordsGenerator.getRandomWords(this.nbElement)
                .then((data : string[] ) => {
                    angular.forEach(data, (word) => this.words.push({"word" : word, "color" : "black"}));
                    this.showConfig = false;
                    this.result = false;
                });
        }
        
        DisplayResult(){
           this.finish = true;
        }
        
        CalculateResults() {
            var that = this;
            angular.forEach(this.words, function(word){
                word.isCorrect = false;
                if (word.word == word.result){
                    that.score = that.score + 1;
                    word.color = "green";
                    word.isCorrect = true;                    
                }
                else
                    word.color = "red"; 
            });
            this.finish = false;
            this.result = true;
            this.showConfig = true;
            this.chrono.reset();
        }
    }

    angular
        .module('app.words')
        .controller('WordsController', WordsController);
}
