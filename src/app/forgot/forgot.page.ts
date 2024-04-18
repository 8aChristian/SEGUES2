import { Component, OnInit } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  showPassword: boolean = false;
  isSendButtonEnabled: boolean = false;

  constructor(private db: Firestore, private router: Router, private toastController: ToastController) { }
  email: string = '';
  nombre: string = '';
  newpassUsuario: string = '';

  async presentToast(message: string, icon: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      icon: icon,
      color: color, 
      position: 'bottom'
    });
    await toast.present();
    return toast.onDidDismiss();
  }

  async signIn() {
    const ref = doc(this.db, 'segues', 'register');
    const docSnap = await getDoc(ref);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      if (userData['correo'] === this.email && userData['nombre'] === this.nombre) {
        await this.presentToast('SUCCESSFUL!', 'checkmark-circle', 'success'); 
        this.isSendButtonEnabled = true; // Habilitar el botón SEND
        this.router.navigateByUrl('/forgot'); 
      } else {
        await this.presentToast('TRY AGAIN', 'close-circle', 'danger'); 
        this.router.navigateByUrl('/forgot'); 
      }
    } else {
      console.error('No se encontraron datos de usuario adecuados');
      await this.presentToast('TRY AGAIN', 'close-circle', 'danger'); 
      this.router.navigateByUrl('/forgot'); 
    }
  }

  async updateUserProfile() {
    if (this.isSendButtonEnabled) {
      const ref = doc(this.db, 'segues', 'register');
      const usuario = {
        contra: this.newpassUsuario,
      };
      await setDoc(ref, usuario, { merge: true });
      console.log('User profile updated with new country and extension.');
    } else {
      console.log('Save button is disabled, cannot update profile.');
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {
  }
}
