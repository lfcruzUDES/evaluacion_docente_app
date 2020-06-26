/// <reference path="../Tables/Tables.ts" />
/// <reference path="../GSS/sheet.ts" />
/// <reference path="../Settings.ts" />


namespace MODELS {

    /**
     * Modelo de la hoja de preguntas.
     */
    export function QuestionsModel() {
        class Questions_Model extends SHEET.ModelSheet {
            id_url_booK = SETTINGS.BOOK;
            sheet_name = SETTINGS.QUESTIONS;
            cols = TABLES.QUESTIONS_TABLE;

            constructor() {
                super();
                this.make();
            }
        }

        return new Questions_Model();
    }

    /**
     * Modelo de la hoja de Participantes.
     */
    export function ParticipantsModel() {
        class Participants_Model extends SHEET.ModelSheet {
            id_url_booK = SETTINGS.BOOK;
            sheet_name = SETTINGS.PARTICIPANTS;
            cols = TABLES.PARTICIPANTS_TABLE;

            constructor() {
                super();
                this.make();
            }
        }

        return new Participants_Model();
    }

    /**
     * Modelo de la hoja de Datos.
     */
    export function DatasModel() {
        class Datas_Model extends SHEET.ModelSheet {
            id_url_booK = SETTINGS.BOOK;
            sheet_name = SETTINGS.DATAS;
            cols = TABLES.DATAS_TABLE;

            constructor() {
                super();
                this.make();
            }
        }

        return new Datas_Model();
    }

}