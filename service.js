var Service = (function () {
    function Service() {
    }
    Service.prototype.getHello = function () {
        return "Hello";
    };
    return Service;
})();
exports.Service = Service;
