import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auto } from '../../clases/auto';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-auto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.css'
})
export class AutoComponent {

  public autos:Array<Auto> = new Array<Auto>();
automatico: any;

  constructor(){
    this.autos.push(new Auto);
    let automatico:Auto = new Auto;
    automatico.automatico=true;
    this.autos.push(automatico);
  }




}
