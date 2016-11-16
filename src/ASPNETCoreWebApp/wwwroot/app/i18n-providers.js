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
        var translationFile = "./locale/messages_" + locale + ".xlf";
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pMThuLXByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBRUE7UUFDRSxvQ0FBb0M7UUFDcEMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBVyxDQUFDO1FBQzVDLGlFQUFpRTtRQUNqRSxJQUFNLFdBQVcsR0FBYSxFQUFFLENBQUM7UUFDakMsc0RBQXNEO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCwrQkFBK0I7UUFDL0IsSUFBTSxlQUFlLEdBQUcsdUJBQXFCLE1BQU0sU0FBTSxDQUFDO1FBQzFELE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxlQUFlLENBQUM7YUFDaEQsSUFBSSxDQUFDLFVBQUMsWUFBb0IsSUFBSyxPQUFBO1lBQzlCLEVBQUUsT0FBTyxFQUFFLG1CQUFZLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtZQUNqRCxFQUFFLE9BQU8sRUFBRSwwQkFBbUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO1lBQ2pELEVBQUUsT0FBTyxFQUFFLGdCQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtTQUN6QyxFQUorQixDQUkvQixDQUFDO2FBQ0QsS0FBSyxDQUFDLGNBQU0sT0FBQSxXQUFXLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBQywyQkFBMkI7SUFDMUQsQ0FBQztJQWxCRCw2REFrQkMsQ0FBQTtJQUVELHFDQUFxQyxJQUFZO1FBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtJQUNoRSxDQUFDIiwiZmlsZSI6ImFwcC9pMThuLXByb3ZpZGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRSQU5TTEFUSU9OUywgVFJBTlNMQVRJT05TX0ZPUk1BVCwgTE9DQUxFX0lEIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2xhdGlvblByb3ZpZGVycygpOiBQcm9taXNlPE9iamVjdFtdPiB7XHJcbiAgLy8gR2V0IHRoZSBsb2NhbGUgaWQgZnJvbSB0aGUgZ2xvYmFsXHJcbiAgY29uc3QgbG9jYWxlID0gZG9jdW1lbnRbXCJsb2NhbGVcIl0gYXMgc3RyaW5nO1xyXG4gIC8vIHJldHVybiBubyBwcm92aWRlcnMgaWYgZmFpbCB0byBnZXQgdHJhbnNsYXRpb24gZmlsZSBmb3IgbG9jYWxlXHJcbiAgY29uc3Qgbm9Qcm92aWRlcnM6IE9iamVjdFtdID0gW107XHJcbiAgLy8gTm8gbG9jYWxlIG9yIFUuUy4gRW5nbGlzaDogbm8gdHJhbnNsYXRpb24gcHJvdmlkZXJzXHJcbiAgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSBcImVuXCIpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9Qcm92aWRlcnMpO1xyXG4gIH1cclxuICAvLyBFeDogJ2xvY2FsZS9tZXNzYWdlcy5mci54bGZgXHJcbiAgY29uc3QgdHJhbnNsYXRpb25GaWxlID0gYC4vbG9jYWxlL21lc3NhZ2VzXyR7bG9jYWxlfS54bGZgO1xyXG4gIHJldHVybiBnZXRUcmFuc2xhdGlvbnNXaXRoU3lzdGVtSnModHJhbnNsYXRpb25GaWxlKVxyXG4gICAgLnRoZW4oKHRyYW5zbGF0aW9uczogc3RyaW5nKSA9PiBbXHJcbiAgICAgIHsgcHJvdmlkZTogVFJBTlNMQVRJT05TLCB1c2VWYWx1ZTogdHJhbnNsYXRpb25zIH0sXHJcbiAgICAgIHsgcHJvdmlkZTogVFJBTlNMQVRJT05TX0ZPUk1BVCwgdXNlVmFsdWU6IFwieGxmXCIgfSxcclxuICAgICAgeyBwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiBsb2NhbGUgfVxyXG4gICAgXSlcclxuICAgIC5jYXRjaCgoKSA9PiBub1Byb3ZpZGVycyk7IC8vIGlnbm9yZSBpZiBmaWxlIG5vdCBmb3VuZFxyXG59XHJcbmRlY2xhcmUgdmFyIFN5c3RlbTogYW55O1xyXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGlvbnNXaXRoU3lzdGVtSnMoZmlsZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIFN5c3RlbS5pbXBvcnQoZmlsZSArIFwiIXRleHRcIik7IC8vIHJlbGllcyBvbiB0ZXh0IHBsdWdpblxyXG59Il19
