System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2;
    var HelloService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HelloService = (function () {
                // private headers: Headers;
                function HelloService(http) {
                    this.http = http;
                    this.url = "http://localhost:57386/api/hello/";
                }
                HelloService.prototype.greet = function (name) {
                    return this.http
                        .get("/api/hello?name=" + name)
                        .map(function (res) {
                        return res.text();
                    });
                };
                HelloService.prototype.greetcore = function (name) {
                    //this.headers = new Headers();
                    //this.headers.append("Content-Type", "application/json");
                    //this.headers.append("Access-Control-Allow-Origin", "*");
                    // const headers = new Headers({ "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
                    var headers = new http_2.Headers({ "Content-Type": "application/json" });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return (this.http.get(this.url + JSON.stringify(name), options)
                        .map(function (res) { return res.text(); }));
                    //return (this.http.get(this.url + JSON.stringify(name), { headers: this.headers })
                    //    .map(res => { return res.text() as string; }));
                };
                HelloService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], HelloService);
                return HelloService;
                var _a;
            }());
            exports_1("HelloService", HelloService);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Ib21lL2hlbGxvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUdJLDRCQUE0QjtnQkFFNUIsc0JBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFIdEIsUUFBRyxHQUFHLG1DQUFtQyxDQUFDO2dCQUtsRCxDQUFDO2dCQUVELDRCQUFLLEdBQUwsVUFBTSxJQUFZO29CQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTt5QkFDWCxHQUFHLENBQUMscUJBQW1CLElBQU0sQ0FBQzt5QkFDOUIsR0FBRyxDQUFDLFVBQUEsR0FBRzt3QkFDSixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBWSxDQUFDO29CQUNoQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVELGdDQUFTLEdBQVQsVUFBVSxJQUFZO29CQUVsQiwrQkFBK0I7b0JBQy9CLDBEQUEwRDtvQkFDMUQsMERBQTBEO29CQUUxRCwyR0FBMkc7b0JBQzNHLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDcEUsSUFBTSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBRXpELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUM7eUJBQzFELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFbkQsbUZBQW1GO29CQUNuRixxREFBcUQ7Z0JBQ3pELENBQUM7Z0JBakNMO29CQUFDLGlCQUFVLEVBQUU7O2dDQUFBO2dCQWtDYixtQkFBQzs7WUFBRCxDQWpDQSxBQWlDQyxJQUFBO1lBakNELHVDQWlDQyxDQUFBIiwiZmlsZSI6ImFwcC9Ib21lL2hlbGxvLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhlbGxvU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTczODYvYXBpL2hlbGxvL1wiO1xyXG4gICAgLy8gcHJpdmF0ZSBoZWFkZXJzOiBIZWFkZXJzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBncmVldChuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldChgL2FwaS9oZWxsbz9uYW1lPSR7bmFtZX1gKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdyZWV0Y29yZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG5cclxuICAgICAgICAvL3RoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgLy90aGlzLmhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAvL3RoaXMuaGVhZGVycy5hcHBlbmQoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIgfSk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAodGhpcy5odHRwLmdldCh0aGlzLnVybCArIEpTT04uc3RyaW5naWZ5KG5hbWUpLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiB7IHJldHVybiByZXMudGV4dCgpIGFzIHN0cmluZzsgfSkpO1xyXG5cclxuICAgICAgICAvL3JldHVybiAodGhpcy5odHRwLmdldCh0aGlzLnVybCArIEpTT04uc3RyaW5naWZ5KG5hbWUpLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KVxyXG4gICAgICAgIC8vICAgIC5tYXAocmVzID0+IHsgcmV0dXJuIHJlcy50ZXh0KCkgYXMgc3RyaW5nOyB9KSk7XHJcbiAgICB9XHJcbn1cclxuIl19
