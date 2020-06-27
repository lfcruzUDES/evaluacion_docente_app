/// <reference path="../Models/Models.ts" />


function search_subject(academic_offert: string, grade: string, group: string) {
    return SEARCH.subject(academic_offert, grade, group);
}

namespace SEARCH {

    export function subject(academic_offert: string, grade: string, group: string) {
        let datas_model = MODELS.DatasModel();
        let subjects = datas_model.filter({ academic_offert: String(academic_offert), grade: Number(grade), group: String(group) });
        try {
            subjects = subjects.map(el => {
                return {subject: el.datas.subject, teacher: el.datas.teacher};
            });

        } catch (error) {
            return [];
        }
        return subjects;

    }

}