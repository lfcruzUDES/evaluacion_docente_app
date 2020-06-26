/// <reference path="../Settings.ts" />


namespace UTILS {

    export function render(template: string) {
        let output = HtmlService.createTemplateFromFile(template).evaluate();
        output.setTitle(SETTINGS.APP_NAME).addMetaTag('viewport', 'width=device-width, initial-scale=1');
        output.setFaviconUrl(SETTINGS.FAVICON);
        return output;
    }

}