import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { ConstantesProvider } from '../../providers/constantes/constantes';

@IonicPage()
@Component({
  selector: 'page-contacto-create',
  templateUrl: 'contacto-create.html'
})
export class ContactoCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  unableCamera: boolean = true;
  conditionCamera: boolean = true;
  labelResponse: string="Cámara";

  agente;
  isConstructor: boolean;
  isTecnico: boolean;
  isModoEdicion: boolean;
  intervenciones;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, 
              formBuilder: FormBuilder, public camera: Camera,
              public constantes:ConstantesProvider) {
    
    this.intervenciones = constantes.intervenciones; 
    // Comprobamso si son algún tipo de agente
    this.agente = viewCtrl.data.type;
    this.isConstructor = viewCtrl.data.type == 'Constructor';
    this.isTecnico = viewCtrl.data.type == 'Tecnico';
    // Comprobamos si ya existe el agente o contacto (campo nombre debe existir), para volcar sus datos
    this.isModoEdicion = viewCtrl.data.nombre_razon
      this.item = viewCtrl.data;
      let group = {
        profilePic: [this.item.profilePic],
        dni_cif: [this.item.dni_cif],
        nombre_razon: [this.item.nombre_razon, Validators.required],
        apellidos: [this.item.apellidos],
        direccion: [this.item.direccion],
        cp: [this.item.cp],
        municipio: [this.item.municipio],
        Provincia: [this.item.Provincia],
        Pais: [this.item.Pais],
        email: [this.item.email],
        telefono: [this.item.telefono],
        tipo_persona_juridica: [this.item.tipo_persona_juridica],
        representante: [this.item.representante]
      };

      //Añadimos los campos que correspondan según si es un tipo de agente
      if(this.agente){
        group['contacto_id'] = viewCtrl.data.contacto_id;
        group['intervencion'] = viewCtrl.data.intervencion;
      }
      if(this.isConstructor){
        group['fase_obra'] = viewCtrl.data.fase_obra;
      }
      if(this.isTecnico){
        group['cargo'] = viewCtrl.data.cargo;
      }

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
