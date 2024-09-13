import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Obtener el usuario desde el localStorage
    this.usuario = localStorage.getItem('usuario') || 'Invitado';
  }

  registrarAsistencia() {
    // Este método no hará nada por ahora, solo es un placeholder
    console.log('Botón de Registrar asistencia presionado');
  }
}
