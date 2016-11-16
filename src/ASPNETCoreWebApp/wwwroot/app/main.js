System.register(["@angular/platform-browser-dynamic", "./app.module", "./i18n-providers"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1, i18n_providers_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (i18n_providers_1_1) {
                i18n_providers_1 = i18n_providers_1_1;
            }],
        execute: function() {
            i18n_providers_1.getTranslationProviders()
                .then(function (providers) {
                var options = { providers: providers };
                platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule, (options))
                    .catch(function (err) { return console.error(err); });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQSx3Q0FBdUIsRUFBRTtpQkFDdEIsSUFBSSxDQUFDLFVBQUEsU0FBUztnQkFDYixJQUFNLE9BQU8sR0FBRyxFQUFFLG9CQUFTLEVBQUUsQ0FBQztnQkFDOUIsaURBQXNCLEVBQUUsQ0FBQyxlQUFlLENBQUMsc0JBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBUSxDQUFDO3FCQUNsRSxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BsYXRmb3JtQnJvd3NlckR5bmFtaWN9ICAgICAgICAgIGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWNcIjtcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvblByb3ZpZGVycyB9IGZyb20gXCIuL2kxOG4tcHJvdmlkZXJzXCI7XHJcblxyXG5nZXRUcmFuc2xhdGlvblByb3ZpZGVycygpXHJcbiAgLnRoZW4ocHJvdmlkZXJzID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7IHByb3ZpZGVycyB9O1xyXG4gICAgcGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUsIChvcHRpb25zKSBhcyBhbnkpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxuIl19
