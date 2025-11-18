import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ ReactiveFormsModule, JsonPipe],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  miForm: FormGroup = new FormGroup(
    {
      nombre: new FormControl('', [ 
                                                      Validators.required, 
                                                      Validators.minLength(3), 
                                                      Validators.maxLength(20)
                                                    ]
                                                  ),
      apellidos: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      planAmigo: new FormControl()
    }
  );

  MandarDatosRegistro():void{
    console.log('datos del formulario de registro a mandar a nodejs... ', this.miForm.value);
  }
}
