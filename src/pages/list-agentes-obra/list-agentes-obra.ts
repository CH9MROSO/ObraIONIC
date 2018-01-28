import { ConstantesProvider } from './../../providers/constantes/constantes';
import { ObraDetailPage } from './../obra-detail/obra-detail';
import { ContactosProvider } from './../../providers/contactos/contactos';
import { Component, Input, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { AgentesProvider } from '../../providers/agentes/agentes';
import { Cliente } from '../../models/cliente';
import { TabsPage } from '../tabs/tabs';

import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the ListAgentesObraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-agentes-obra',
  templateUrl: 'list-agentes-obra.html',
})
export class ListAgentesObraPage implements AfterViewInit {
  @Input() currentIdObra: number;
  currentItems = {
    'Clientes': [],
    'Promotores': [],
    'Constructores': [],
    'Tecnicos': [],
    'Subcontratistas': []
  }

  collapseClientes = false;
  collapsePromotores = false;
  collapseConstructores = false;
  collapseTecnicos = false;
  collapseSubcontratistas = false;

  constructor(public navCtrl: NavController, public agentesSrv: AgentesProvider,
    public contactosSrv: ContactosProvider,
    public modalCtrl: ModalController, public toastCtrl: ToastController) {

  }

  /**
   * The view loaded, let's query our items for the list
   */
  ngAfterViewInit() {
    if (this.currentIdObra) {
      /*       Object.keys(this.currentItems).forEach(function (key, index) {
              console.log(key)
              console.log(index)
            }); */
      // Petición de Clientes
      this.agentesSrv.getAllClientesObra(this.currentIdObra).subscribe((resp: any) => {
        if (resp && resp.success) {
          for (let cliente of resp.clientes) {
            cliente.type = 'Cliente';
            this.currentItems.Clientes.push(cliente);
          }
        } else {
          this.doErrorToastAgente('La obra no posee Clientes');
        }
      }, (err) => {
        this.doErrorToastAgente('Error al obtener Clientes');
      });

      // Petición de Promotores
      this.agentesSrv.getAllPromotoresObra(this.currentIdObra).subscribe((resp: any) => {
        if (resp && resp.success) {
          for (let promotor of resp.promotores) {
            promotor.type = 'Promotor';
            this.currentItems.Promotores.push(promotor);
          }
        } else {
          this.doErrorToastAgente('La obra no posee Promotores');
        }
      }, (err) => {
        this.doErrorToastAgente('Error al obtener Promotores');
      });

      // Petición de Constructores
      this.agentesSrv.getAllConstructoresObra(this.currentIdObra).subscribe((resp: any) => {
        if (resp && resp.success) {
          for (let constructor of resp.constructores) {
            constructor.type = 'Constructor';
            this.currentItems.Constructores.push(constructor);
          }
        } else {
          this.doErrorToastAgente('La obra no posee Constructores');
        }
      }, (err) => {
        this.doErrorToastAgente('Error al obtener Constructores');
      });
      // Petición de Tecnicos
      this.agentesSrv.getAllTecnicosObra(this.currentIdObra).subscribe((resp: any) => {
        if (resp && resp.success) {
          for (let tecnico of resp.tecnicos) {
            tecnico.type = 'Tecnico';
            this.currentItems.Tecnicos.push(tecnico);
          }
        } else {
          this.doErrorToastAgente('La obra no posee Tecnicos');
        }
      }, (err) => {
        this.doErrorToastAgente('Error al obtener Tecnicos');
      });
      // Petición de Subcontratistas
      this.agentesSrv.getAllSubcontratistasObra(this.currentIdObra).subscribe((resp: any) => {
        if (resp && resp.success) {
          for (let subcontratista of resp.subcontratistas) {
            subcontratista.type = 'Sucontratista';
            this.currentItems.Subcontratistas.push(subcontratista);
          }
        } else {
          this.doErrorToastAgente('La obra no posee Subcontratistas');
        }
      }, (err) => {
        this.doErrorToastAgente('Error al obtener Subcontratistas');
      });

    }
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    switch (item.type) {
      case 'Cliente': {
        // Petición Eliminación de Cliente
        this.agentesSrv.deleteCliente(item.id).subscribe((resp: any) => {
          if (resp && resp.success) {
            this.currentItems.Clientes.splice(this.currentItems.Clientes.indexOf(item),1);

          } else {
            this.doErrorToastAgente('Error eliminando Cliente');
          }
        }, (err) => {
          this.doErrorToastAgente('Error eliminando Cliente');
        });
        break;
      }
      case 'Promotor': {
        // Petición Eliminación de Promotore
        this.agentesSrv.deletePromotor(item.id).subscribe((resp: any) => {
          if (resp && resp.success) {
            this.currentItems.Promotores.splice(this.currentItems.Promotores.indexOf(item),1);

          } else {
            this.doErrorToastAgente('Error eliminando Promotor');
          }
        }, (err) => {
          this.doErrorToastAgente('Error eliminando Promotor');
        });
        break;
      }
      case 'Constructor': {
        // Petición Eliminación de Constructor
        this.agentesSrv.deleteConstructor(item.id).subscribe((resp: any) => {
          if (resp && resp.success) {
            this.currentItems.Constructores.splice(this.currentItems.Constructores.indexOf(item),1);

          } else {
            this.doErrorToastAgente('Error eliminando Constructor');
          }
        }, (err) => {
          this.doErrorToastAgente('Error eliminando Constructor');
        });
        break;
      }
      case 'Tecnico': {
        // Petición Eliminación de Tecnico
        this.agentesSrv.deleteTecnico(item.id).subscribe((resp: any) => {
          if (resp && resp.success) {
            this.currentItems.Tecnicos.splice(this.currentItems.Tecnicos.indexOf(item),1);

          } else {
            this.doErrorToastAgente('Error eliminando Tecnico');
          }
        }, (err) => {
          this.doErrorToastAgente('Error eliminando Tecnico');
        });
        break;
      }
      case 'Subcontratista': {
        // Petición Eliminación de Subcontratista
        this.agentesSrv.deleteSubcontratista(item.id).subscribe((resp: any) => {
          if (resp && resp.success) {
            this.currentItems.Subcontratistas.splice(this.currentItems.Subcontratistas.indexOf(item),1);

          } else {
            this.doErrorToastAgente('Error eliminando Subcontratista');
          }
        }, (err) => {
          this.doErrorToastAgente('Error eliminando Subcontratista');
        });
        break;
      }

      default: {
        //statements; 
        break;
      }
    }

  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: any, e: Event) {
    this.navCtrl.push('ContactoDetailPage', {
      typeItem: item.type,
      item: item,
    });
  }

  /**
    * Prompt the user to add a new item. This shows our ItemCreatePage in a
    * modal and then adds the new item to our data source if the user created one.
    */
  addItemCliente() {
    // SECCIÓN NUEVO Cliente
    let addModal = this.modalCtrl.create('ContactoCreatePage', {type : 'Cliente'});
    addModal.onDidDismiss(clienteNuevo => {
      if (clienteNuevo) {
        console.log(clienteNuevo);

        // Petición de creación de Contacto
        this.contactosSrv.createContacto(clienteNuevo).subscribe((data: any) => {
          if (data && data.success && data.id) {
            console.log('Contacto creado');

            // Petición de creación Cliente
            this.agentesSrv.createCliente(clienteNuevo, data.id, this.currentIdObra).subscribe((resp: any) => {
              if (resp && resp.success) {
                console.log('Cliente creado');
                clienteNuevo.id= resp.id;
                clienteNuevo.contacto_id = data.id;
                clienteNuevo.obra_id = this.currentIdObra;
                clienteNuevo.type = 'Cliente';
                this.currentItems.Clientes.push(clienteNuevo);

              } else {
                this.doErrorToastAgente('Error creando Cliente');
              }
            }, (err) => {
              this.doErrorToastAgente('Error creando Cliente');
            });
          } else {
            this.doErrorToastAgente('Error creando Contacto');
          }
        }, (err) => {
          this.doErrorToastAgente('Error creando Contacto');
        });
      }
    })
    addModal.present();
  }

  addItemPromotor() {
    // SECCIÓN NUEVO Promotor
    let addModal = this.modalCtrl.create('ContactoCreatePage', {type : 'Promotor'});
    addModal.onDidDismiss(promotorNuevo => {
      if (promotorNuevo) {
        console.log(promotorNuevo);

        // Petición de creación de Contacto
        this.contactosSrv.createContacto(promotorNuevo).subscribe((data: any) => {
          if (data && data.success && data.id) {
            console.log('Contacto creado');

            // Petición de creación Promotor
            this.agentesSrv.createPromotor(promotorNuevo, data.id, this.currentIdObra).subscribe((resp: any) => {
              if (resp && resp.success) {
                console.log('Promotor creado');
                promotorNuevo.id= resp.id;
                promotorNuevo.contacto_id = data.id;
                promotorNuevo.obra_id = this.currentIdObra;
                promotorNuevo.type = 'Promotor';
                this.currentItems.Promotores.push(promotorNuevo);

              } else {
                this.doErrorToastAgente('Error creando Promotor');
              }
            }, (err) => {
              this.doErrorToastAgente('Error creando Promotor');
            });
          } else {
            this.doErrorToastAgente('Error creando Contacto');
          }
        }, (err) => {
          this.doErrorToastAgente('Error creando Contacto');
        });
      }
    })
    addModal.present();
  }

  addItemConstructor() {
    // SECCIÓN NUEVO Constructor
    let addModal = this.modalCtrl.create('ContactoCreatePage', {type : 'Constructor'});
    addModal.onDidDismiss(constructorNuevo => {
      if (constructorNuevo) {
        console.log(constructorNuevo);

        // Petición de creación de Contacto
        this.contactosSrv.createContacto(constructorNuevo).subscribe((data: any) => {
          if (data && data.success && data.id) {
            console.log('Contacto creado');

            // Petición de creación Constructor
            this.agentesSrv.createConstructor(constructorNuevo, data.id, this.currentIdObra).subscribe((resp: any) => {
              if (resp && resp.success) {
                console.log('Constructor creado');
                constructorNuevo.id= resp.id;
                constructorNuevo.contacto_id = data.id;
                constructorNuevo.obra_id = this.currentIdObra;
                constructorNuevo.type = 'Constructor';
                this.currentItems.Constructores.push(constructorNuevo);

              } else {
                this.doErrorToastAgente('Error creando Constructor');
              }
            }, (err) => {
              this.doErrorToastAgente('Error creando Constructor');
            });
          } else {
            this.doErrorToastAgente('Error creando Contacto');
          }
        }, (err) => {
          this.doErrorToastAgente('Error creando Contacto');
        });
      }
    })
    addModal.present();
  }

  addItemTecnico() {
    // SECCIÓN NUEVO Tecnico
    let addModal = this.modalCtrl.create('ContactoCreatePage', {type : 'Tecnico'});
    addModal.onDidDismiss(tecnicoNuevo => {
      if (tecnicoNuevo) {
        console.log(tecnicoNuevo);

        // Petición de creación de Contacto
        this.contactosSrv.createContacto(tecnicoNuevo).subscribe((data: any) => {
          if (data && data.success && data.id) {
            console.log('Contacto creado');

            // Petición de creación Tecnico
            this.agentesSrv.createTecnico(tecnicoNuevo, data.id, this.currentIdObra).subscribe((resp: any) => {
              if (resp && resp.success) {
                console.log('Tecnico creado');
                tecnicoNuevo.id= resp.id;
                tecnicoNuevo.contacto_id = data.id;
                tecnicoNuevo.obra_id = this.currentIdObra;
                tecnicoNuevo.type = 'Tecnico';
                this.currentItems.Tecnicos.push(tecnicoNuevo);

              } else {
                this.doErrorToastAgente('Error creando Tecnico');
              }
            }, (err) => {
              this.doErrorToastAgente('Error creando Tecnico');
            });
          } else {
            this.doErrorToastAgente('Error creando Contacto');
          }
        }, (err) => {
          this.doErrorToastAgente('Error creando Contacto');
        });
      }
    })
    addModal.present();
  }

  addItemSubcontratista() {
    // SECCIÓN NUEVO Subcontratista
    let addModal = this.modalCtrl.create('ContactoCreatePage', {type : 'Subcontratista'});
    addModal.onDidDismiss(subcontratistaNuevo => {
      if (subcontratistaNuevo) {
        console.log(subcontratistaNuevo);

        // Petición de creación de Contacto
        this.contactosSrv.createContacto(subcontratistaNuevo).subscribe((data: any) => {
          if (data && data.success && data.id) {
            console.log('Contacto creado');

            // Petición de creación Subcontratista
            this.agentesSrv.createSubcontratista(subcontratistaNuevo, data.id, this.currentIdObra).subscribe((resp: any) => {
              if (resp && resp.success) {
                console.log('Subcontratista creado');
                subcontratistaNuevo.id= resp.id;
                subcontratistaNuevo.contacto_id = data.id;
                subcontratistaNuevo.obra_id = this.currentIdObra;
                subcontratistaNuevo.type = 'Subcontratista';
                this.currentItems.Subcontratistas.push(subcontratistaNuevo);

              } else {
                this.doErrorToastAgente('Error creando Subcontratista');
              }
            }, (err) => {
              this.doErrorToastAgente('Error creando Subcontratista');
            });
          } else {
            this.doErrorToastAgente('Error creando Contacto');
          }
        }, (err) => {
          this.doErrorToastAgente('Error creando Contacto');
        });
      }
    })
    addModal.present();
  }

  updateItemCliente(item: any) {
    // SECCIÓN ACTUALIZACIÓN Cliente
    let addModal = this.modalCtrl.create('ContactoCreatePage', item);
    addModal.onDidDismiss(clienteActualizado => {
      if (clienteActualizado) {
        console.log(clienteActualizado);

        // Petición de actualización de Contacto
        this.contactosSrv.updateContacto(clienteActualizado.contacto_id, clienteActualizado).subscribe((data: any) => {
          if (data && data.success) {
            console.log('Contacto actualizado');
            clienteActualizado.id = item.id;
            clienteActualizado.type = 'Cliente'
            
            // Petición de actualización Cliente
            this.agentesSrv.updateCliente(item.id, clienteActualizado).subscribe((resp: any) => {
              if (resp && resp.success) {
                console.log('Cliente actualizado');
                this.currentItems.Clientes.splice(this.currentItems.Clientes.indexOf(item),1,clienteActualizado);

              } else {
                this.doErrorToastAgente('Error actualizando Cliente');
              }
            }, (err) => {
              this.doErrorToastAgente('Error actualizando Cliente');
            });
          } else {
            this.doErrorToastAgente('Error actualizando Contacto');
          }
        }, (err) => {
          this.doErrorToastAgente('Error actualizando Contacto');
        });
      }
    })
    addModal.present();
  }
  updateItemPromotor(item: any) {
    // SECCIÓN ACTUALIZACIÓN Promotor
    let addModal = this.modalCtrl.create('ContactoCreatePage', item);
    addModal.onDidDismiss(promotorActualizado => {
      if (promotorActualizado) {
        console.log(promotorActualizado);

        // Petición de actualización de Contacto
        this.contactosSrv.updateContacto(promotorActualizado.contacto_id, promotorActualizado).subscribe((data: any) => {
          if (data && data.success) {
            console.log('Contacto actualizado');
            promotorActualizado.id = item.id;
            promotorActualizado.type = 'Promotor'

            // Petición de actualización Promotor
            this.agentesSrv.updatePromotor(item.id, promotorActualizado).subscribe((resp: any) => {
              if (resp && resp.success) {
                console.log('Promotor actualizado');
                this.currentItems.Promotores.splice(this.currentItems.Promotores.indexOf(item),1,promotorActualizado);

              } else {
                this.doErrorToastAgente('Error actualizando Promotor');
              }
            }, (err) => {
              this.doErrorToastAgente('Error actualizando Promotor');
            });
          } else {
            this.doErrorToastAgente('Error actualizando Contacto');
          }
        }, (err) => {
          this.doErrorToastAgente('Error actualizando Contacto');
        });
      }
    })
    addModal.present();
  }
  updateItemConstructor(item: any) {
    // SECCIÓN ACTUALIZACIÓN Constructor
    let addModal = this.modalCtrl.create('ContactoCreatePage', item);
    addModal.onDidDismiss(constructorActualizado => {
      if (constructorActualizado) {
        console.log(constructorActualizado);

        // Petición de actualización de Contacto
        this.contactosSrv.updateContacto(constructorActualizado.contacto_id, constructorActualizado).subscribe((data: any) => {
          if (data && data.success) {
            console.log('Contacto actualizado');
            constructorActualizado.id = item.id;
            constructorActualizado.type = 'Constructor'
            
            // Petición de actualización Constructor
            this.agentesSrv.updateConstructor(item.id, constructorActualizado).subscribe((resp: any) => {
              if (resp && resp.success) {
                console.log('Constructor actualizado');
                this.currentItems.Constructores.splice(this.currentItems.Constructores.indexOf(item),1,constructorActualizado);

              } else {
                this.doErrorToastAgente('Error actualizando Constructor');
              }
            }, (err) => {
              this.doErrorToastAgente('Error actualizando Constructor');
            });
          } else {
            this.doErrorToastAgente('Error actualizando Contacto');
          }
        }, (err) => {
          this.doErrorToastAgente('Error actualizando Contacto');
        });
      }
    })
    addModal.present();
  }
  updateItemTecnico(item: any) {
    // SECCIÓN ACTUALIZACIÓN Tecnico
    let addModal = this.modalCtrl.create('ContactoCreatePage', item);
    addModal.onDidDismiss(tecnicoActualizado => {
      if (tecnicoActualizado) {
        console.log(tecnicoActualizado);

        // Petición de actualización de Contacto
        this.contactosSrv.updateContacto(tecnicoActualizado.contacto_id, tecnicoActualizado).subscribe((data: any) => {
          if (data && data.success) {
            console.log('Contacto actualizado');
            tecnicoActualizado.id = item.id;
            tecnicoActualizado.type = 'Tecnico'

            // Petición de actualización Tecnico
            this.agentesSrv.updateTecnico(item.id, tecnicoActualizado).subscribe((resp: any) => {
              if (resp && resp.success) {
                console.log('Tecnico actualizado');
                this.currentItems.Tecnicos.splice(this.currentItems.Tecnicos.indexOf(item),1,tecnicoActualizado);

              } else {
                this.doErrorToastAgente('Error actualizando Tecnico');
              }
            }, (err) => {
              this.doErrorToastAgente('Error actualizando Tecnico');
            });
          } else {
            this.doErrorToastAgente('Error actualizando Contacto');
          }
        }, (err) => {
          this.doErrorToastAgente('Error actualizando Contacto');
        });
      }
    })
    addModal.present();
  }
  updateItemSubcontratista(item: any) {
    // SECCIÓN ACTUALIZACIÓN Subcontratista
    let addModal = this.modalCtrl.create('ContactoCreatePage', item);
    addModal.onDidDismiss(subcontratistaActualizado => {
      if (subcontratistaActualizado) {
        console.log(subcontratistaActualizado);

        // Petición de actualización de Contacto
        this.contactosSrv.updateContacto(subcontratistaActualizado.contacto_id, subcontratistaActualizado).subscribe((data: any) => {
          if (data && data.success) {
            console.log('Contacto actualizado');
            subcontratistaActualizado.id = item.id;
            subcontratistaActualizado.type = 'Subcontratista'

            // Petición de actualización Subcontratista
            this.agentesSrv.updateSubcontratista(item.id, subcontratistaActualizado).subscribe((resp: any) => {
              if (resp && resp.success) {
                console.log('Subcontratista actualizado');
                this.currentItems.Subcontratistas.splice(this.currentItems.Subcontratistas.indexOf(item),1,subcontratistaActualizado);

              } else {
                this.doErrorToastAgente('Error actualizando Subcontratista');
              }
            }, (err) => {
              this.doErrorToastAgente('Error actualizando Subcontratista');
            });
          } else {
            this.doErrorToastAgente('Error actualizando Contacto');
          }
        }, (err) => {
          this.doErrorToastAgente('Error actualizando Contacto');
        });
      }
    })
    addModal.present();
  }

  changeCollapseClientes(){
    this.collapseClientes= !this.collapseClientes;
  }
  changeCollapsePromotores(){
    this.collapsePromotores= !this.collapsePromotores;
  }
  changeCollapseConstructores(){
    this.collapseConstructores= !this.collapseConstructores;
  }
  changeCollapseTecnicos(){
    this.collapseTecnicos= !this.collapseTecnicos;
  }
  changeCollapseSubcontratistas(){
    this.collapseSubcontratistas= !this.collapseSubcontratistas;
  }

  doErrorToastAgente(msg: string) {
    // Unable to log in
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
