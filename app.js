/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var service_1 = require('./service');
var MyAppComponent = (function () {
    function MyAppComponent(service) {
        var _this = this;
        this.greeting = service.getGreeting();
        setTimeout(function () { return _this.greeting = 'Howdy'; }, 1000); //'Alice';
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            appInjector: [service_1.Service]
        }),
        angular2_1.View({
            template: ' <h1> {{greeting}} World </h1>' // Defines the inline template for the component
        }), 
        __metadata('design:paramtypes', [service_1.Service])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
