import { Contacto } from "./contacto";
import { Constructor } from "./construtor";

export class Subcontratista extends Contacto{

    public id: number;
    public contacto_id: number;
    public obra_id: number;
    public constructor_id: number;
    public constructor_subcontratista: Constructor;
    public intervencion: string;

    public constructor() {
        super();
        this.contacto_id = 0;
        this.obra_id = 0;
        this.constructor_id = 0;
        this.constructor_subcontratista = null;
        this.intervencion = '';
    }
}