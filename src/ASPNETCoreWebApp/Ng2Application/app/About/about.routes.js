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
//# sourceMappingURL=about.routes.js.map