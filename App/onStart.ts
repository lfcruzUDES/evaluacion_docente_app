/// <reference path="../Models/Models.ts" />


namespace ON_START {

    /**
     * Revisa si el usuario ya respondió,
     * si ya respondió regresa true si no
     * regresa false.
     */
    export function has_user_already_answered() {
        let participants = MODELS.ParticipantsModel();
        let user = participants.get({ email: Session.getActiveUser().getEmail() })
        if (user) {
            return true;
        }
        return false;
    }


    /**
     * Agrega al usuario a la hoja de participantes
     * lo que indica que ya contestó la encuesta.
     */
    export function set_user_participation() {
        let participants = MODELS.ParticipantsModel();
        participants.create({ email: Session.getActiveUser().getEmail() })
    }

}