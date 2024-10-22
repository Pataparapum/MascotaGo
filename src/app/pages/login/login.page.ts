import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';
  mensaje: string = '';
  isLoading: boolean = false;

  constructor(private router: Router, private alertController: AlertController) {}

  async iniciarSesion() {
    if (!this.usuario || !this.contrasena) {
      this.mensaje = 'Por favor, ingrese usuario y contraseña';
      return;
    }

    this.isLoading = true;
    this.mensaje = '';

    setTimeout(async () => {

      const dominio = this.usuario.split('@')[1];
      const loginExitoso = (dominio === 'cliente.com' || dominio === 'prestador.com') && this.contrasena === '1234';

      if (loginExitoso) {
        this.mensaje = 'Inicio de sesión correcto';

        const dominio = this.usuario.split('@')[1];

        let ruta = '';

        if (dominio === 'cliente.com') {
          ruta = '/home-cliente';
        } else if (dominio === 'prestador.com') {
          ruta = '/home-prestador';
        } else {
          ruta = '/home-general';
        }

        // Redirección y muestra de mensaje de éxito
        this.router.navigate([ruta]).then(async () => {
          const alert = await this.alertController.create({
            backdropDismiss: false,
            header: this.usuario,
            message: 'Inicio de sesión exitoso',
            buttons: ['OK']
          });
          await alert.present();
        });

      } else {
        const alert = await this.alertController.create({
          backdropDismiss: false,
          header: 'Error',
          message: 'Usuario o contraseña incorrectos',
          buttons: ['OK']
        });
        await alert.present();
      }

      this.isLoading = false;
    }, 1000);
  }
}
