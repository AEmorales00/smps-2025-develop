import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'scanner',
  templateUrl: 'scanner.component.html',
  imports:[
    ZXingScannerModule,
    CommonModule
  ]
})

export class ScannerComponent implements OnInit {

  selectedDevice: MediaDeviceInfo | undefined;
  result:any

  constructor() { }

  ngOnInit(): void {
    navigator.mediaDevices.enumerateDevices().then(devices => {

      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      if (videoDevices.length > 0) {
        this.selectedDevice = videoDevices[0];
        console.log('Cámara seleccionada:', this.selectedDevice);
      } else {
        console.warn('No se encontraron cámaras.');
      }

    });
  }

  onCodeResult(result: string): void {
    console.log('QR Result:', result);
    this.result= result
  }
}
