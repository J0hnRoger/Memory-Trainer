/// <reference path="../../tsd.d.ts" />
var app;
(function (app) {
    var dates;
    (function (dates) {
        var DatesController = (function () {
            function DatesController(logger, wordsGenerator) {
                this.logger = logger;
                this.wordsGenerator = wordsGenerator;
                this.title = "Dates Historiques";
            }
            DatesController.$inject = ['logger', 'wordsGeneratorService'];
            return DatesController;
        })();
        dates.DatesController = DatesController;
        angular.module("app.dates")
            .controller("DatesController", DatesController);
    })(dates = app.dates || (app.dates = {}));
})(app || (app = {}));
//# sourceMappingURL=dates.controller.js.map