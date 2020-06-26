/// <reference path="../Models/Models.ts" />
/// <reference path="../Forms/Fields.ts" />
/// <reference path="../Forms/Form.ts" />
/// <reference path="../Settings.ts" />


namespace FORM_APP {

    type field_data_content = {
        name: string,
        label_text: string,
        attrs: {},
        choices?: {},
        make: any,
        required: boolean,
        hidden: boolean,
    }

    type col = {
        name: string,
        data_type: string,
        col?: string,
        verbose_name?: string,
        default?: any,
        choices?: {},
        max?: number,
        min?: number,
        auto_add?: any,
    }


    /**
     * Crea los campos para el formulario y su tabla virtual
     * de las preguntas de la hoja de Preguntas.
     */
    export function create_fields_and_virtual_table() {
        let questions_model = MODELS.QuestionsModel();
        let questions = questions_model.all();
        let fields: field_data_content[] = [];
        let virtual_table: col[] = []

        for (let i = 0; i < questions.length; i++) {

            if (questions[i].datas.type !== SETTINGS.QUESTION_TYPES.immutable) {
                let field_type;
                let question_name = `question_${i}`
                let attrs = {}
                if (questions[i].datas.type === 'textarea') {
                    field_type = SETTINGS.QUESTION_TYPES[questions[i].datas.type]
                    attrs['rows'] = 3;
                } else if (questions[i].datas.type === 'range') {
                    field_type = SETTINGS.QUESTION_TYPES[questions[i].datas.type]
                    let options = questions[i].datas.options.split('///');
                    let range = options[0].split('-');
                    let tags = options[1].split('//');
                    attrs['type'] = 'range';
                    attrs['min'] = range[0];
                    attrs['max'] = range[1];
                    attrs['step'] = 1;

                }

                fields.push(
                    {
                        name: question_name,
                        label_text: questions[i].datas.question,
                        attrs: { 'class': 'form-control', 'v-model': `response[${i}]`, ...attrs },
                        make: FIELDS[field_type],
                        required: questions[i].datas.required ? true : false,
                        hidden: false,
                    }
                );

                virtual_table.push(
                    {
                        name: question_name,
                        data_type: 'string',
                        verbose_name: questions[i].datas.question
                    }
                );
            }
        }

        return [virtual_table, fields];
    }


    /**
     * Construye el formulario.
     */
    export function get_form(data: [col[], field_data_content[]]): FORM.Form | boolean {
        let table, fields;
        [table, fields] = data;
        if (table.length >= 1 && fields.length >= 1) {

            class form extends FORM.Form {
                cols = table;
                fields_data = fields;

                constructor(datas?: any) {
                    super();
                    this.fields_collector(datas);
                }
            }

            return new form();
        }

        return false
    }
}