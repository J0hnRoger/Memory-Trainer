/// <reference path="../../tsd.d.ts" />
var app;
(function (app) {
    var dates;
    (function (dates) {
        var DatesController = (function () {
            function DatesController(logger, historicDatesFactory) {
                var _this = this;
                this.logger = logger;
                this.historicDatesFactory = historicDatesFactory;
                this.title = "Dates Historiques";
                this.duration = 5;
                this.display = true;
                this.score = 0;
                this.themes = ["Indépendance des états-unis", "Révolution Française", "Histoire du Hip Hop"];
                this.intro = true;
                historicDatesFactory.getHistoryThemes().then(function (data) {
                    _this.events = data;
                });
            }
            DatesController.prototype.CalculateResults = function () {
                var _this = this;
                angular.forEach(this.events, function (event) {
                    event.dateIsCorrect = false;
                    event.titleIsCorrect = false;
                    if (event.date == event.dateResult)
                        _this.score = _this.score + 1;
                    if (event.title == event.titleResult)
                        _this.score = _this.score + 1;
                });
                this.display = true;
                this.chrono.reset();
            };
            DatesController.$inject = ['logger', 'HistoricDatesService'];
            return DatesController;
        })();
        dates.DatesController = DatesController;
        angular.module("app.dates")
            .controller("DatesController", DatesController);
    })(dates = app.dates || (app.dates = {}));
})(app || (app = {}));
//# sourceMappingURL=dates.controller.js.map