import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.page.html',
  styleUrls: ['./manual.page.scss']
})
export class ManualPage implements OnInit {
  constructor() {
    (window as any).pdfWorkerSrc = './assets/pdf.worker.min.js';
  }
  pdfSrc = "./assets/ADMIN MANUAL.pdf";
  pdfSrc1 = "./assets/USER MANUAL.pdf";

  ngOnInit() {
  }
}
