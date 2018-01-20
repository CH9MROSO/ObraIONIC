export class Visita {

    public id: number;
    public num_visita: number;
    public fecha: Date;
    public fase: string;
    public observaciones: string;
    public elementos: string;
    public estado_elementos: number;
    public documentos: string;
    public estado_documentos: number;
    public obra_id: number;

    public constructor() {
        this.num_visita = 0;
        this.fecha = new Date();
        this.fase = '';
        this.observaciones = '';
        this.elementos = '';
        this.estado_elementos = 0;
        this.documentos = '';
        this.estado_documentos = 0;
    }
}