import { Component, OnInit } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-conf',
  templateUrl: './conf.page.html',
  styleUrls: ['./conf.page.scss'],
})
export class ConfPage implements OnInit {
  password: string = '';
  showPassword: boolean = false;
  empresaUsuario: string = '';
  roleUsuario: string = '';
  phoneUsuario: string = '';
  newpassUsuario: string = '';
  newName: string = '';
  newCorreo: string = '';
  paises = ["Ecuador", "Mexico", "EEUU", "España", "Colombia", "Chile", "Argentina"];
  country: string = "";
  extension: string = "";
  isToggleEnabled: boolean = false;
  contra1: string = '';
  nombre1: string = '';
  correo1: string = '';
  empresa1: string = '';
  role1: string = '';
  numero1: string = '';
  pais1: string = '';

  constructor(private db: Firestore) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  handleChange(ev: any) {
    this.country = ev.detail.value;
    this.setExtension(this.country);
    this.updateUserProfile();
  }

  setExtension(country: string) {
    switch (country) {
      case "Ecuador":
        this.extension = "+593";
        break;
      case "Mexico":
        this.extension = "+52";
        break;
      case "EEUU":
        this.extension = "+1";
        break;
      case "España":
        this.extension = "+34";
        break;
      case "Colombia":
        this.extension = "+57";
        break;
      case "Chile":
        this.extension = "+56";
        break;
      case "Argentina":
        this.extension = "+54";
        break;
      default:
        this.extension = "";
        console.error('Extension not found for:', country);
        break;
    }
    console.log(`Country: ${country}, Extension: ${this.extension}`);
  }

  async updateUserProfile() {
    if (this.isToggleEnabled) {
      console.log('Updating user profile...');
      const ref = doc(this.db, 'segues', 'register');
      const usuario = {
        empresa: this.empresaUsuario,
        role: this.roleUsuario,
        telefono: this.phoneUsuario,
        contra: this.newpassUsuario,
        country: this.country,
        extension: this.extension,
        nombre: this.newName,
        correo: this.newCorreo,
      };
      await setDoc(ref, usuario, { merge: true });
      console.log('User profile updated with new country and extension.');
    } else {
      console.log('Save button is disabled, cannot update profile.');
    }
  }

  ngOnInit() {
    this.loadUserData();
  }

  async loadUserData() {
    const ref = doc(this.db, 'segues', 'register');
    const docSnap = await getDoc(ref);

    if (docSnap.exists()) {
      const data = docSnap.data();
      this.contra1 = data['contra'] || 'No existe';
      this.nombre1 = data['nombre'] || 'No existe';
      this.correo1 = data['correo'] || 'No existe';
      this.empresa1 = data['empresa'] || 'No existe';
      this.role1 = data['role'] || 'No existe';
      this.numero1 = data['telefono'] || 'No existe';
      this.pais1 = data['country'] || 'No existe';
      console.log('Existing user data loaded.');
    } else {
      console.error('Document does not exist!');
    }
  }

  toggleChanged() {
    console.log('Toggle status:', this.isToggleEnabled);
  }
}
