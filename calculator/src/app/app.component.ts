import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcateComponent } from "./calcate/calcate.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public resultado:Number = 0

  obtenerResult(result : Number){
    this.resultado = result
  }
}
