import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  @Input()
  public auto: Auto=new Auto();

}
