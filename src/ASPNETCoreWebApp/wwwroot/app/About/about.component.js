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
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                    this.today = new Date();
                };
                AboutComponent = __decorate([
                    core_1.Component({
                        template: "\n        <my-nav></my-nav>\n        <h1>About us</h1>\n        <p>Here you can learn everything about us.</p>\n        <p>Date: {{today | date: short}}</p>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9BYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFBQTtnQkFNQSxDQUFDO2dCQUhHLGlDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQVpMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLDhKQUkrQjtxQkFDNUMsQ0FBQzs7a0NBQUE7Z0JBT0YscUJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELDJDQU1DLENBQUEiLCJmaWxlIjoiYXBwL0Fib3V0L2Fib3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPG15LW5hdj48L215LW5hdj5cclxuICAgICAgICA8aDE+QWJvdXQgdXM8L2gxPlxyXG4gICAgICAgIDxwPkhlcmUgeW91IGNhbiBsZWFybiBldmVyeXRoaW5nIGFib3V0IHVzLjwvcD5cclxuICAgICAgICA8cD5EYXRlOiB7e3RvZGF5IHwgZGF0ZTogc2hvcnR9fTwvcD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XHJcbiAgICB0b2RheTogRGF0ZTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxufSJdfQ==
