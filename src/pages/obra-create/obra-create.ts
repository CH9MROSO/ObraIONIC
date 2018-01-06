import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-obra-create',
  templateUrl: 'obra-create.html'
})
export class ObraCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  unableCamera: boolean = true;
  conditionCamera: boolean = true;
  labelResponse: string="Cámara";

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, 
              formBuilder: FormBuilder, public camera: Camera) {
    if(viewCtrl.data){
      this.item = viewCtrl.data;
      this.form = formBuilder.group({
        profilePic: [this.item.profilePic],
        id: [this.item.id, Validators.required],
        descripcion: [this.item.descripcion, Validators.required],
        ubicacion: [this.item.ubicacion, Validators.required],
        fecha_inicio: [this.item.fecha_inicio],
        fecha_fin: [this.item.fecha_fin],
        estado: [this.item.estado]
      });
    }else{
      this.form = formBuilder.group({
        profilePic: [''],
        id: ['', Validators.required],
        descripcion: ['', Validators.required],
        ubicacion: ['', Validators.required],
        fecha_inicio: [''],
        fecha_fin: [''],
        estado: ['']
      });
    }

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

