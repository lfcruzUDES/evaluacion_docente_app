/// <reference path="../Settings.ts" />
/// <reference path="../GSS/sheet.ts" />
/// <reference path="../App/onStart.ts" />

/**
 * Ejecuta la función para guardar los datos de la encuesta
 * y también ejecuta la función "set_user_participation", esta
 * función agrega al usuario a la lista de usuarios que ya contestaron
 * para evitar que vulevan a hacerlo.
 * @param data Datos del usuario a guardar
 * @param set_as_participation Indica si es la primer ves que contesta
 */
function save_answer(data: string[], set_as_participation: boolean) {
    if (set_as_participation) {
        Logger.log(set_as_participation)
        ON_START.set_user_participation();
    }
    return SAVE.save_data(data);
}



namespace SAVE {

    /**
     *
     * @param data Datos de la encuesta a guardar
     */
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