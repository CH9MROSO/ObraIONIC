export class Obra {

    public id: number;
    public fecha_inicio: Date;
    public fecha_fin: Date;
    public descripcion: string;
    public ubicacion: string;
    public estado: string;
    public profilePic: string;

    public constructor() {
        this.fecha_inicio = new Date();
        this.fecha_fin = new Date();
        this.descripcion = '';
        this.ubicacion = '';
        this.estado = '';
        this.profilePic = '';
    }
}