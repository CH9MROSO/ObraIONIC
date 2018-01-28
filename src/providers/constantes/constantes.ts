import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConstantesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantesProvider {

  estadosObra = [
    {id:1, name : 'Proyecto Ejecución'},
    {id:2, name : 'Pendiente Inicio'},
    {id:3, name : 'En construcción'},
    {id:4, name : 'Subsanación Reservas'},
    {id:5, name : 'Pendiente Documentación'},
    {id:6, name : 'Proyecto Final'},
    {id:7, name : 'Terminada'},
  ]
  estadosDocumentos = [
    {id:0, name : ''},
    {id:1, name : 'Pendiente Entrega'},
    {id:2, name : 'Solicitado'},
    {id:3, name : 'Entregado'},
  ]
  estadosElementos = [
    {id:0, name : ''},
    {id:1, name : 'Denegado'},
    {id:2, name : 'Pendiente Revisión'},
    {id:3, name : 'Aceptado'},
  ]

  generos = [
    {id:1, name : 'Masculino'},
    {id:2, name : 'Femenino'},
  ]

  intervenciones = [
    {id:1, name : 'Total'},
    {id:2, name : 'Parcial'},
    {id:3, name : 'Demoliciones'},
    {id:4, name : 'Movimiento tierras'},
    {id:5, name : 'Saneamiento'},
    {id:6, name : 'Cimentacion'},
    {id:7, name : 'Estructura'},
    {id:8, name : 'Albañileria'},
    {id:9, name : 'Cubiertas'},
    {id:10, name : 'Bajantes y Canalones'},
    {id:11, name : 'Aislamientos'},
    {id:12, name : 'Impermeabilizaciones'},
    {id:13, name : 'Instalación Eléctrica'},
    {id:14, name : 'Instalación Telefonía'},
    {id:15, name : 'Protección contra incendios'},
    {id:16, name : 'Instalación antirrobo'},
    {id:17, name : 'Instalación Fontanería'},
    {id:18, name : 'Energía solar térmica'},
    {id:19, name : 'Instalación Calefacción'},
    {id:20, name : 'Instalación Climatización'},
    {id:21, name : 'Instalación Ventilación'},
    {id:22, name : 'Carpintería exterior y cerrajería'},
    {id:23, name : 'Carpintería interior'},
    {id:24, name : 'Solados y Alicatados'},
    {id:25, name : 'Revestimientos y Aplacados'},
    {id:26, name : 'Pinturas'},
    {id:27, name : 'Urbanización'},
    {id:28, name : 'Pavimentación'},
    {id:29, name : 'Red Alumbrado'},
    {id:30, name : 'Red Abastecimiento'},
    {id:31, name : 'Red Alcantarillado'},
    {id:32, name : 'Seguridad y Salud'},
    {id:33, name : 'Ensayos y Control de Calidad'},
    {id:34, name : 'Gestión de Residuos'}
  ]



}
