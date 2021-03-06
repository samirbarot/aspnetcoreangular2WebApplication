System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var NavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NavComponent = (function () {
                function NavComponent() {
                }
                NavComponent = __decorate([
                    core_1.Component({
                        selector: "my-nav",
                        template: "\n        <a routerLink=\"/home\">Home</a> |\n        <a routerLink=\"/about\">About</a> |\n        <a routerLink=\"/product\">Product</a>\n        <hr>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavComponent);
                return NavComponent;
            }());
            exports_1("NavComponent", NavComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9TaGFyZWQvbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUFBO2dCQUVBLENBQUM7Z0JBVkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDBKQUlEO3FCQUNaLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC9TaGFyZWQvbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LW5hdlwiLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8YSByb3V0ZXJMaW5rPVwiL2hvbWVcIj5Ib21lPC9hPiB8XHJcbiAgICAgICAgPGEgcm91dGVyTGluaz1cIi9hYm91dFwiPkFib3V0PC9hPiB8XHJcbiAgICAgICAgPGEgcm91dGVyTGluaz1cIi9wcm9kdWN0XCI+UHJvZHVjdDwvYT5cclxuICAgICAgICA8aHI+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IHtcclxuXHJcbn0iXX0=
