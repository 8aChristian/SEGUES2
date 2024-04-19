import { Component, OnInit } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

constructor(private db: Firestore) { }

nombreUsuario: string = '';
correoUsuario: string = '';
contraUsuario: string = '';

async registrarUsuario() {
  const ref = doc(this.db, 'segues', 'register');
  const usuario = {
    nombre: this.nombreUsuario,
    correo: this.correoUsuario,
    contra: this.contraUsuario
  };
  await setDoc(ref, usuario, { merge: true });
}

  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}

ngOnInit() {
}

}
