export class Contacto {

    public id: number;
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
        this.dni_cif = 0;
        this.nombre_razon = '';
        this.apellidos = '';
        this.direccion = '';
        this.cp = 0;
        this.municipio = '';
        this.Provincia = '';
        this.Pais = '';
        this.email = '';
        this.telefono = '';
        this.tipo_persona_juridica = '';
        this.representante = '';
        this.profilePic = '';
    }
}