import { Component, Input } from '@angular/core';
import { Auto } from '../../clases/auto';
import { CommonModule } from '@angular/common';
import { AutoComponent } from "../auto/auto.component";

@Component({
    selector: 'app-carrera',
    standalone: true,
    templateUrl: './carrera.component.html',
    styleUrl: './carrera.component.css',
    imports: [CommonModule, AutoComponent]
})
export class CarreraComponent {
  @Input()
  public autos:Array<Auto> = new Array<Auto>();
  automatico: any;
  
    constructor(){
      this.autos.push(new Auto);
      let automatico:Auto = new Auto;
      automatico.automatico=true;
      this.autos.push(automatico);
    }

    cargar(){}
    recorrer(){}
    

}
