import { Contacto } from "./contacto";

export class Constructor extends Contacto{

    public id: number;
    public contacto_id: number;
    public obra_id: number;
    public fase_obra: string;
    public intervencion: string;

    public constructor() {
        super();
        this.contacto_id = 0;
        this.obra_id = 0;
        this.intervencion = '';
        this.fase_obra ='';
    }
}