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
//# sourceMappingURL=main.js.map