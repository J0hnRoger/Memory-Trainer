var app;
(function (app) {
    var domain;
    (function (domain) {
        var HistoricEvent = (function () {
            function HistoricEvent(title, description, date) {
                this.title = title;
                this.description = description;
                this.date = date;
            }
            return HistoricEvent;
        })();
        domain.HistoricEvent = HistoricEvent;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=event.model.js.map