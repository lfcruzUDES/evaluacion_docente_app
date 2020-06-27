/// <reference path="../Settings.ts" />
/// <reference path="../GSS/sheet.ts" />


function save_answer(data: string[]) {
    return SAVE.save_data(data);
}



namespace SAVE {

    export function save_data(data: {}[]) {
        try {
            if (data.length >= 1) {
                let sheet = SpreadsheetApp.openByUrl(SETTINGS.BOOK).getSheetByName(SETTINGS.RESPONSES);
                let data_to_save = data.map(el => el.value)
                sheet?.appendRow(data_to_save);
                return true
            }
        } catch (error) {
            return false;
        }
    }

}