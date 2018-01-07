export class Cliente {

    public id: number;
    public contacto_id: number;
    public obra_id: number;
    public intervencion: string;
    public dni_cif: number;
    public nombre_razon: string;
    public apellidos: string;
    public direccion: string;
    public cp: number;
    public municipio: string;
    public Provincia: string;
    public Pais: string;
    public email: string;
    public telefono: string;
    public tipo_persona_juridica: string;
    public representante: string;
    public profilePic: string;

    public constructor() {
        this.contacto_id = 0;
        this.obra_id = 0;
        this.intervencion = '';
    }
}