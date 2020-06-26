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
        // let form = FORM_APP.get_form();
        // if (form) {
        //     Logger.log(<FORM.Form>form.as_p());
        // }
        let already_answered = ON_START.has_user_already_answered();
        if (already_answered) {
            return UTILS.render('Templates/not_authorized');
        }
        // ON_START.set_user_participation();
        return UTILS.render('Templates/index');
    }


}