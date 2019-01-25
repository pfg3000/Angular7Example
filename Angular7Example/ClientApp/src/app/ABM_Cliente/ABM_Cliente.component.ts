import { Component } from '@angular/core';

@Component({
  selector: 'app-ABM_Cliente-component',
  templateUrl: './ABM_Cliente.component.html',
})
export class ABM_ClienteComponent {
  public mostrarLista: boolean = false;

  public Cancelar() {
    this.mostrarLista = true;
  }

}
