import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScannerService } from './scanner.service';

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

  constructor(private scanerService: ScannerService) { }

  ngOnInit(): void {
    navigator.mediaDevices.enumerateDevices().then(devices => {

      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      if (videoDevices.length > 0) {
        this.selectedDevice = videoDevices[0];
      } else {
      }

    });
  }

  onCodeResult(result: string): void {
    if (this.result === result) {
      alert('El código QR ya fue procesado:'+ result);
      return;
    }
    this.result = result;

    const body={qr_code: result }
    this.scanerService.postUsuarioAsistente(body)
    .then((responser)=>{
      this.result= result
      alert('✅ Codigo QR escaneado correctamente.');
      })
      .catch((error) => {
        alert('❌ Ocurrió un error al escanear código QR del participante.\n' + JSON.stringify(error.error));
      });
  }
}
