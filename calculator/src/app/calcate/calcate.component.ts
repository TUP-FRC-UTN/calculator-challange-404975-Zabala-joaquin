import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calcate.component.html',
  styleUrl: './calcate.component.css'
})
export class CalcateComponent {

 
  @Output() resultEmitter = new EventEmitter<Number>();
  
  numero1: number = 0;  
  numero2: number = 0;

  add(){
    const result = this.numero1 + this.numero2;
    this.resultEmitter.emit(result);
  }

  multiply(){
    const result = this.numero1 * this.numero2;
    this.resultEmitter.emit(result);
  }

  divide()
{
  const result = this.numero1 / this.numero2;
  this.resultEmitter.emit(result);
}  

  substract(){
    const result = this.numero1 - this.numero2;
    this.resultEmitter.emit(result);
  }

  sqrt(){
    const result = Math.sqrt(this.numero1);
    this.resultEmitter.emit(result);
  }

}
