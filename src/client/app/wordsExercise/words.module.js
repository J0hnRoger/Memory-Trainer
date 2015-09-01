var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        'use strict';
        angular.module('app.words', [
            'app.core',
            'app.widgets'
        ]);
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));
//# sourceMappingURL=words.module.js.map