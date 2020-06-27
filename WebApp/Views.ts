/// <reference path="./utils.ts" />
/// <reference path="../App/onStart.ts" />
/// <reference path="../App/form_app.ts" />
/// <reference path="../Forms/Form.ts" />


namespace VIEWS {

    type url_param = {
        parameter: {
            path: string,
            // ID de la hoja de cálculo.
            ssid: string,
            // ID del final de la URL del Classroom.
            crid: string,
        }
    }

    /**
     * Vista del index
     * @param e : parámetros GET.
     */
    export function IndexView(e: url_param) {
        let already_answered = ON_START.has_user_already_answered();
        if (already_answered) {
            return UTILS.render('Templates/not_authorized');
        }
        return UTILS.render('Templates/index');
    }

    /**
     * Vista del index
     * @param e : parámetros GET.
     */
    export function FinishedView(e: url_param) {
        return UTILS.render('Templates/finished');
    }
}