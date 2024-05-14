import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-cams',
  templateUrl: './cams.page.html',
  styleUrls: ['./cams.page.scss'],
})
export class CamsPage implements OnInit, OnDestroy {
  private trigger: Subject<void> = new Subject<void>();
  public mostrarCamara: boolean = false;
  public camaraActivaIglesia: boolean = false;
  public camaraActivaCancha: boolean = false;
  tiempo: string = "";
  fecha: string = "";
  videoStream: MediaStream | null = null;
  videoElement: HTMLVideoElement | null = null;

  constructor() {
    this.actualizarReloj();
    setInterval(() => this.actualizarReloj(), 1000);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // Asegúrate de detener la transmisión de video al destruir el componente
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
    }
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
    this.activateUSBWebcam();
  }

  activarCamaraCancha(): void {
    this.mostrarCamara = true;
    this.camaraActivaCancha = true;
    this.activateUSBWebcam();
  }

  desactivarCamara(): void {
    this.mostrarCamara = false;
    this.camaraActivaIglesia = false;
    this.camaraActivaCancha = false;
    this.stopUSBWebcam();
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

  private async activateUSBWebcam() {
    try {
      // Accede a la cámara utilizando getUserMedia
      const constraints: MediaStreamConstraints = { video: true };
      this.videoStream = await navigator.mediaDevices.getUserMedia(constraints);
      
      // Muestra el video en un elemento HTMLVideoElement
      if (this.videoStream) {
        this.videoElement = document.createElement('video');
        this.videoElement.srcObject = this.videoStream;
        this.videoElement.play();
      }
    } catch (error) {
      console.error('Error al activar la cámara USB:', error);
    }
  }

  private stopUSBWebcam() {
    // Detiene la transmisión de video
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
    }
    // Detiene la reproducción del video
    if (this.videoElement) {
      this.videoElement.pause();
      this.videoElement.srcObject = null;
    }
  }
}
