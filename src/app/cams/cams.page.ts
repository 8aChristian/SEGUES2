import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs'; // Asegúrate de importar Observable y Subject desde 'rxjs'

@Component({
  selector: 'app-cams',
  templateUrl: './cams.page.html',
  styleUrls: ['./cams.page.scss'],
})
export class CamsPage implements OnInit {

  private trigger: Subject<void> = new Subject<void>();
  public mostrarCamara: boolean = false;
  
  triggerSnapshot(): void {
    this.trigger.next();
  }
  
  handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
  }
  
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  
  // Método para activar la cámara cuando se hace clic en el botón
  activarCamara(): void {
    this.mostrarCamara = true;
  }
  
  desactivarCamara(): void {
    this.mostrarCamara = false;
  }

  tiempo: string="";
  fecha: string="";
  constructor() {
    this.actualizarReloj();
    setInterval(() => this.actualizarReloj(), 1000);
   }
   
   private actualizarReloj(): void {
    const f = new Date();
    const dia = ('0' + f.getDate()).slice(-2);
    const mes = ('0' + (f.getMonth() + 1)).slice(-2);
    const anio = f.getFullYear();
    const diaSemana = f.getDay();

    this.tiempo = f.toLocaleTimeString();

    const semana = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
    const showSemana = semana[diaSemana];
    this.fecha = `${showSemana} ${dia}-${mes}-${anio}`;
  }

  ngOnInit() {
  }

}
