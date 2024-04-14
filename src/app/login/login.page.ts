import { Component, OnInit } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private db: Firestore, private router: Router, private toastController: ToastController) { }

  async presentToast(message: string, icon: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      icon: icon,
      color: color,  // Establecer el color del toast
      position: 'bottom'
    });
    await toast.present();
    return toast.onDidDismiss(); // Returns a promise that resolves when the toast is dismissed.
  }

  async signIn() {
    const ref = doc(this.db, 'segues', 'register');
    const docSnap = await getDoc(ref);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      if (userData['correo'] === this.email && userData['contra'] === this.password) {
        await this.presentToast('SUCCESSFUL!', 'checkmark-circle', 'success');  // Uso del color verde para éxito
        this.router.navigateByUrl('/cams');  // Redirección si las credenciales son correctas
      } else {
        await this.presentToast('TRY AGAIN', 'close-circle', 'danger');  // Uso del color rojo para error
        this.router.navigateByUrl('/login');  // Se queda en la página de login si las credenciales son incorrectas
      }
    } else {
      console.error('No se encontraron datos de usuario adecuados');
      await this.presentToast('TRY AGAIN', 'close-circle', 'danger');  // Uso del color rojo para error
      this.router.navigateByUrl('/login');  // Se queda en la página de login si no hay datos
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {
  }
}
