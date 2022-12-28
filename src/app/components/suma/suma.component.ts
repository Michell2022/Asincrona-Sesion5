import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit{

  numeroUno!:string;
  numeroDos!:string;
  total!:number;
  valorInicial = 0;

  constructor() {}

  operacion(operador:string){
    if(this.numeroUno && this.numeroDos != null){

      if(operador == '+'){
        this.total=parseInt(this.numeroUno)+parseInt(this.numeroDos);
        this.valorInicial = this.total;
      }else if(operador == '-'){
        this.total=parseInt(this.numeroUno)-parseInt(this.numeroDos);
        this.valorInicial = this.total;
      }else if(operador == '*'){
        this.total=parseInt(this.numeroUno)*parseInt(this.numeroDos);
        this.valorInicial = this.total;
      }else if(operador == '/'){
        this.total=parseInt(this.numeroUno)/parseInt(this.numeroDos);
        this.valorInicial = this.total;
      }

    }else{
     Swal.fire('Debe rellenar los campos')
    }
  
  }

  ngOnInit(): void {
    
  }

}
