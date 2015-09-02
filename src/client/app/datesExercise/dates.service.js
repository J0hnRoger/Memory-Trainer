/// <reference path="../../tsd.d.ts" />
var app;
(function (app) {
    var dates;
    (function (dates) {
        var HistoricDatesService = (function () {
            function HistoricDatesService($http, $q, exception, logger) {
                this.$http = $http;
                this.$q = $q;
                this.exception = exception;
                this.logger = logger;
                this.events = [];
            }
            HistoricDatesService.prototype.getHistoryThemes = function () {
                var _this = this;
                var deferred = this.$q.defer();
                var events = [];
                angular.forEach(GetMockEvents(), function (eventTheme) {
                    angular.forEach(eventTheme.events, function (event) {
                        _this.events.push(new app.domain.HistoricEvent(event.title, event.description, event.date));
                    });
                });
                deferred.resolve(this.events);
                return deferred.promise;
            };
            HistoricDatesService.$inject = ['$http', '$q', 'exception', 'logger'];
            return HistoricDatesService;
        })();
        dates.HistoricDatesService = HistoricDatesService;
        angular.module('app.dates')
            .service('HistoricDatesService', HistoricDatesService);
        function GetMockEvents() {
            return [
                { theme: "guerre d'independance", events: [
                        { date: 1770, title: 'Massacre de Boston', description: "Le massacre de Boston (The Boston Massacre aux États-Unis) du 5 mars 1770 est un épisode de l'opposition entre les colonies britanniques en Amérique du Nord et la Grande-Bretagne pendant la seconde moitié du xviiie siècle, qui aboutira en 1775 à la Révolution américaine et à la guerre d'indépendance." },
                        {
                            date: 1773,
                            title: 'Boston tea party',
                            description: "La Boston Tea Party fut une révolte politique à Boston, la capitale de la Province de la baie du Massachusetts, contre le Parlement britannique en 1773."
                        },
                        {
                            date: 1776,
                            title: "Déclaration d'indépendance des États-Unis",
                            description: "La Déclaration unanime des treize États unis d’Amérique1 (en anglais The unanimous declaration of the thirteen united States of America), généralement appelée « Déclaration d'indépendance des États-Unis d'Amérique », est un texte politique par lequel les treize colonies britanniques d'Amérique du Nord ont fait sécession de la Grande-Bretagne le 4 juillet 1776, pour former les « États unis d'Amérique ». Ce texte est marqué par l'influence de la philosophie des Lumières et tire également les conséquences de la Glorieuse Révolution de 1688 : d'après les abus constatés, les délégués des colons estiment qu'ils ont le droit et le devoir de se révolter contre la monarchie britannique (en fait, le parlement britannique a voté de lourds impôts et taxes frappant les colonies). Depuis, le 4 juillet est devenu la fête nationale des États-Unis : l'Independence Day (jour de l'Indépendance en anglais)."
                        },
                        {
                            date: 1794,
                            title: 'Rebellion du whisky',
                            description: "La Révolte du whisky (en anglais Whiskey Rebellion) est un soulèvement populaire qui débuta en 1791 et connut son apogée en 1794 dans la localité de Washington, dans la vallée de la Monongahela. La rébellion commença peu après que les Articles de la Confédération furent remplacés par la Constitution de 1789, qui instaurait un pouvoir exécutif plus fort. Elle tire son origine du déficit budgétaire causé par la guerre d'indépendance américaine qui amena le Secrétaire du Trésor Alexander Hamilton à trouver de nouveaux expédients : il convainquit le Congrès d'augmenter les taxes sur les spiritueux et les alcools forts comme le whisky. Les comtés de l'Ouest des États-Unis engagèrent alors des opérations de harcèlements contre les collecteurs de taxes. Les « Whiskey Boys » organisèrent des manifestations violentes dans le Maryland, en Virginie, dans les Caroline et en Géorgie. En 1794, cette agitation se transforma en révolte armée. Le Président américain George Washington décréta la loi martiale et mena une armée contre les rebelles en octobre 1794 qui furent écrasés. Il souhaitait alors faire de la Pennsylvanie un terrain d'affirmation de la puissance fédérale."
                        }
                    ]
                }
            ];
        }
    })(dates = app.dates || (app.dates = {}));
})(app || (app = {}));
//# sourceMappingURL=dates.service.js.map