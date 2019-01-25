import { Component } from '@angular/core';

@Component({
  selector: 'app-ABM_Auto-component',
  templateUrl: './ABM_Auto.component.html',
})
export class ABM_AutoComponent {
  public mostrarLista : boolean  = false;



  public Cancelar() {
    this.mostrarLista = true;
  }

}
