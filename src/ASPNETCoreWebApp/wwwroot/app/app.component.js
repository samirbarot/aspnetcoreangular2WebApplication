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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app",
                        template: "\n\t<h1>My First Angular App</h1>\n\t\t<h2 i18n=\"header\">Login form</h2>\n\t<div>\n\t\t<span i18n>Email</span>\n\t\t<input type=\"text\" placeholder=\"Your email\" i18n-placeholder>\n\t</div>\n\t<div>\n\t\t<span i18n>Password</span>\n\t\t<input type=\"password\" placeholder=\"Password\" i18n-placeholder>\n\t</div>\n\t<hr>\n\t<div i18n>If you want to search something, go to <a href=\"http://google.com\">Google</a></div>\n\n\t<router-outlet></router-outlet>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUFBO2dCQUE0QixDQUFDO2dCQWxCN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsS0FBSzt3QkFDZixRQUFRLEVBQUUsK2NBY3FCO3FCQUNoQyxDQUFDOztnQ0FBQTtnQkFDMEIsbUJBQUM7WUFBRCxDQUE1QixBQUE2QixJQUFBO1lBQTdCLHVDQUE2QixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdFx0c2VsZWN0b3I6IFwiYXBwXCIsXHJcblx0XHR0ZW1wbGF0ZTogYFxyXG5cdDxoMT5NeSBGaXJzdCBBbmd1bGFyIEFwcDwvaDE+XHJcblx0XHQ8aDIgaTE4bj1cImhlYWRlclwiPkxvZ2luIGZvcm08L2gyPlxyXG5cdDxkaXY+XHJcblx0XHQ8c3BhbiBpMThuPkVtYWlsPC9zcGFuPlxyXG5cdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCIgaTE4bi1wbGFjZWhvbGRlcj5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2PlxyXG5cdFx0PHNwYW4gaTE4bj5QYXNzd29yZDwvc3Bhbj5cclxuXHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgaTE4bi1wbGFjZWhvbGRlcj5cclxuXHQ8L2Rpdj5cclxuXHQ8aHI+XHJcblx0PGRpdiBpMThuPklmIHlvdSB3YW50IHRvIHNlYXJjaCBzb21ldGhpbmcsIGdvIHRvIDxhIGhyZWY9XCJodHRwOi8vZ29vZ2xlLmNvbVwiPkdvb2dsZTwvYT48L2Rpdj5cclxuXHJcblx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH0iXX0=
