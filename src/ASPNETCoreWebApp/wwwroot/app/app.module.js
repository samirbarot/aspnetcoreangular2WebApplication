System.register(["@angular/core", "@angular/platform-browser", "./app.component", "./app.routes", "@angular/http", "./home/home.module", "./about/about.module"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_component_1, app_routes_1, http_1, home_module_1, about_module_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (home_module_1_1) {
                home_module_1 = home_module_1_1;
            },
            function (about_module_1_1) {
                about_module_1 = about_module_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            app_routes_1.routing,
                            home_module_1.HomeModule,
                            about_module_1.AboutModule
                        ],
                        declarations: [
                            app_component_1.AppComponent
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUFBO2dCQUF5QixDQUFDO2dCQWQxQjtvQkFBQyxlQUFRLENBQUM7d0JBQ04sT0FBTyxFQUFFOzRCQUNMLGdDQUFhOzRCQUNiLGlCQUFVOzRCQUNWLG9CQUFPOzRCQUVQLHdCQUFVOzRCQUNWLDBCQUFXO3lCQUNkO3dCQUNELFlBQVksRUFBRTs0QkFDViw0QkFBWTt5QkFDZjt3QkFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO3FCQUM1QixDQUFDOzs2QkFBQTtnQkFDdUIsZ0JBQUM7WUFBRCxDQUF6QixBQUEwQixJQUFBO1lBQTFCLGlDQUEwQixDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gICBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7cm91dGluZ30gZnJvbSBcIi4vYXBwLnJvdXRlc1wiO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7SG9tZU1vZHVsZX0gZnJvbSBcIi4vaG9tZS9ob21lLm1vZHVsZVwiO1xyXG5pbXBvcnQge0Fib3V0TW9kdWxlfSBmcm9tIFwiLi9hYm91dC9hYm91dC5tb2R1bGVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIHJvdXRpbmcsXHJcblxyXG4gICAgICAgIEhvbWVNb2R1bGUsXHJcbiAgICAgICAgQWJvdXRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
