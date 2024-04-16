import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auto } from '../clases/auto';

@Component({
  selector: 'app-auto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.css'
})
export class AutoComponent {

  public auto:Array<Auto> = new Array<Auto>;




}
