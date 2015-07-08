var Service = (function () {
    function Service() {
    }
    Service.prototype.getGreeting = function () {
        return "Hello";
    };
    return Service;
})();
exports.Service = Service;
