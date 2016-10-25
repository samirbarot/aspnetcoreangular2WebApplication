System.register(["@angular/router", "./about.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, about_component_1;
    var aboutRoutes;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            exports_1("aboutRoutes", aboutRoutes = router_1.RouterModule.forChild([
                { path: "about", component: about_component_1.AboutComponent }
            ]));
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9BYm91dC9hYm91dC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUdhLFdBQVc7Ozs7Ozs7Ozs7WUFBWCx5QkFBQSxXQUFXLEdBQUcscUJBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzdDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTthQUMvQyxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJhcHAvQWJvdXQvYWJvdXQucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gXCIuL2Fib3V0LmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFib3V0Um91dGVzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcclxuICAgIHsgcGF0aDogXCJhYm91dFwiLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH1cclxuXSk7Il19
