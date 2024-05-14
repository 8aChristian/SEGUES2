import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-cams',
  templateUrl: './cams.page.html',
  styleUrls: ['./cams.page.scss'],
})
export class CamsPage implements OnInit {
  private trigger: Subject<void> = new Subject<void>();
  public mostrarCamara: boolean = false;
  public camaraActivaIglesia: boolean = false;
  public camaraActivaCancha: boolean = false;
  tiempo: string = "";
  fecha: string = "";

  constructor() {
    this.actualizarReloj();
    setInterval(() => this.actualizarReloj(), 1000);
  }

  ngOnInit() {
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  activarCamaraIglesia(): void {
    this.mostrarCamara = true;
    this.camaraActivaIglesia = true;
  }

  activarCamaraCancha(): void {
    this.mostrarCamara = true;
    this.camaraActivaCancha = true;
  }

  desactivarCamara(): void {
    this.mostrarCamara = false;
    this.camaraActivaIglesia = false;
    this.camaraActivaCancha = false;
  }

  private actualizarReloj(): void {
    const f = new Date();
    const dia = ('0' + f.getDate()).slice(-2);
    const mes = ('0' + (f.getMonth() + 1)).slice(-2);
    const anio = f.getFullYear();
    const diaSemana = f.getDay();
    this.tiempo = f.toLocaleTimeString();

    const semana = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const showSemana = semana[diaSemana];
    this.fecha = `${showSemana} ${dia}-${mes}-${anio}`;
  }
}