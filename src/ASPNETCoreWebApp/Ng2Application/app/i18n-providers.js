System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    function getTranslationProviders() {
        // Get the locale id from the global
        var locale = document["locale"];
        // return no providers if fail to get translation file for locale
        var noProviders = [];
        // No locale or U.S. English: no translation providers
        if (!locale || locale === "en") {
            return Promise.resolve(noProviders);
        }
        // Ex: 'locale/messages.fr.xlf`
        var translationFile = "./lang/messages_" + locale + ".xlf";
        return getTranslationsWithSystemJs(translationFile)
            .then(function (translations) { return [
            { provide: core_1.TRANSLATIONS, useValue: translations },
            { provide: core_1.TRANSLATIONS_FORMAT, useValue: "xlf" },
            { provide: core_1.LOCALE_ID, useValue: locale }
        ]; })
            .catch(function () { return noProviders; }); // ignore if file not found
    }
    exports_1("getTranslationProviders", getTranslationProviders);
    function getTranslationsWithSystemJs(file) {
        return System.import(file + "!text"); // relies on text plugin
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=i18n-providers.js.map