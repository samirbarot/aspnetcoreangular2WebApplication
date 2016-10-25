System.register(["@angular/router", "./home.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1;
    var homeRoutes;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            exports_1("homeRoutes", homeRoutes = router_1.RouterModule.forChild([
                { path: "home", component: home_component_1.HomeComponent }
            ]));
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Ib21lL2hvbWUucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFHYSxVQUFVOzs7Ozs7Ozs7O1lBQVYsd0JBQUEsVUFBVSxHQUFHLHFCQUFZLENBQUMsUUFBUSxDQUFDO2dCQUM1QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7YUFDN0MsQ0FBQyxDQUFBLENBQUMiLCJmaWxlIjoiYXBwL0hvbWUvaG9tZS5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVSb3V0ZXMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cclxuXSk7Il19
