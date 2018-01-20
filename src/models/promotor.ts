import { Contacto } from "./contacto";

export class Promotor extends Contacto{

    public id: number;
    public contacto_id: number;
    public obra_id: number;
    public intervencion: string;

    public constructor() {
        super();
        this.contacto_id = 0;
        this.obra_id = 0;
        this.intervencion = '';
    }
}