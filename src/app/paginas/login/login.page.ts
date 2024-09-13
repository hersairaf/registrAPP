import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  alumno = { user: '', password: '' };
  errorMessage: string = '';
  mensaje: string = '';
  correo: string = '';
  isModalOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit(): boolean {
    // Verificar valores en la consola
    console.log('Usuario ingresado: ', this.alumno.user);
    console.log('Contraseña ingresada: ', this.alumno.password);

    // Validar si los campos están vacíos
    if (!this.alumno.user || !this.alumno.password) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return false;
    }

    // Validación de Usuario
    if (this.alumno.user === 'pepito' && this.alumno.password === '123') {
      // Almacenar usuario en local storage
      this.errorMessage = ''; // Limpiar mensaje de error
      localStorage.setItem('usuario', this.alumno.user);
      this.router.navigate(['/home']);
      return true;
    } else {
      this.errorMessage = 'Usuario o contraseña incorrecta';
      return false;
    }
  }

  abrirModalRestablecer() {
    this.isModalOpen = true;
  }

  cerrarModalRestablecer() {
    this.isModalOpen = false;
    this.mensaje = ''; // Limpiar mensaje al cerrar el modal
  }

  enviarCorreoRestablecimiento() {
    this.mensaje = 'Si su correo está registrado, le enviaremos un mensaje';
    console.log('Correo ingresado: ', this.correo);
  }
}
