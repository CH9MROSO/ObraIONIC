import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { ConstantesProvider } from '../../providers/constantes/constantes';

/**
 * Generated class for the VisitaCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visita-create',
  templateUrl: 'visita-create.html',
})
export class VisitaCreatePage {

  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  unableCamera: boolean = true;
  conditionCamera: boolean = true;
  labelResponse: string="Cámara";

  isModoEdicion: boolean;

  estados_elementos;
  estados_documentos;
  intervenciones;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, 
              formBuilder: FormBuilder, public camera: Camera,
              public constantes:ConstantesProvider) {

      this.estados_elementos = constantes.estadosElementos;  
      this.estados_documentos = constantes.estadosDocumentos;  
      this.intervenciones = constantes.intervenciones;  
    // Comprobamos si ya existe el agente o contacto (campo nombre debe existir), para volcar sus datos
      this.isModoEdicion = viewCtrl.data
      this.item = viewCtrl.data;
      let group = {
        id: [this.item.id],
        profilePic: [this.item.profilePic],
        num_visita: [this.item.num_visita],
        fase: [this.item.fase, Validators.required],
        fecha: [this.item.fecha],
        observaciones: [this.item.observaciones],
        elementos: [this.item.elementos],
        estado_elementos: [this.item.estado_elementos],
        documentos: [this.item.documentos],
        estado_documentos: [this.item.estado_documentos],
        obra_id: [this.item.obra_id],
      };

      this.form = formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    if (Camera['installed']()) {
      this.unableCamera = false;
    }
  }
  changeLabel() {
    if(!this.conditionCamera){
      this.labelResponse = "Archivo";
    }
    else{
      this.labelResponse = "Cámara";
    }
  }

  getPicture() {
    if (Camera['installed']() && this.conditionCamera) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth:  800,
        targetHeight: 600
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Foto no disponible');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData:string = (readerEvent.target as any).result;
      if (imageData.length < 1024000){
        this.form.patchValue({ 'profilePic': imageData });
      } else{
        alert('Tamaño imagen excesivo');
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
}