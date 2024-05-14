import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cams',
  templateUrl: './cams.page.html',
  styleUrls: ['./cams.page.scss'],
})
export class CamsPage implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  public mostrarCamara: boolean = false;
  tiempo: string = "";
  fecha: string = "";

  constructor() {
    this.actualizarReloj();
    setInterval(() => this.actualizarReloj(), 1000);
  }

  ngOnInit() {
    this.accederCamaraUSB();
  }

  accederCamaraUSB() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream: MediaStream) => {
        this.mostrarCamara = true;
        if (this.videoPlayer) {
          this.videoPlayer.nativeElement.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Error accediendo a la cámara USB:', error);
        // Manejar el error
      });
  }

  desactivarCamara(): void {
    this.mostrarCamara = false;
    if (this.videoPlayer && this.videoPlayer.nativeElement.srcObject instanceof MediaStream) {
      const tracks = (this.videoPlayer.nativeElement.srcObject as MediaStream).getTracks();
      tracks.forEach((track: any) => track.stop());
    }
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
