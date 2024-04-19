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
  rememberMe: boolean = false;

  constructor(private db: Firestore, private router: Router, private toastController: ToastController) { }

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
      if (userData['correo'] === this.email && userData['contra'] === this.password) {
        await this.presentToast('SUCCESSFUL!', 'checkmark-circle', 'success');
        this.router.navigateByUrl('/cams');  

        if (this.rememberMe) {
          localStorage.setItem('email', this.email);
          localStorage.setItem('password', this.password);
        }
      } else {
        await this.presentToast('TRY AGAIN', 'close-circle', 'danger');
        this.router.navigateByUrl('/login');
      }
    } else {
      console.error('No se encontraron datos de usuario adecuados');
      await this.presentToast('TRY AGAIN', 'close-circle', 'danger');
      this.router.navigateByUrl('/login');
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  saveCheckboxState(event: any) {
    this.rememberMe = event.detail.checked;
  }

  ngOnInit() {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      this.email = storedEmail;
      this.password = storedPassword;
      this.rememberMe = true;
    } else {
      this.rememberMe = false;
    }
  }
}
