import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tiphonejsapi } from 'src/assets/tiphonejsapi.js';

declare var tiphonejsapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'example';
  usuario = { nombre: '' };
  tiphonejsapi: any;
  mostrar: boolean = false;
  paletaConectada: boolean = false;

  @ViewChild("paleta") paleta: ElementRef;

  ngOnInit() {

  }

  login(form: NgForm) {
    console.log(form.value.usuario);
    this.mostrar = true;
    this.identificacion(form.value.usuario);
  }

  @HostListener('window:message', ['$event']) onPostMessage(event) {
    // here your code
    console.log('Recibido: ', event);
    let data = JSON.parse(event.data);
    console.log(data);

    switch (data.nombre) {

      case "PaletaConectada":

        this.paletaConectada = true;

        break;

      case "Reconnect":

        this.paletaConectada = false;
        this.mostrar = false;

        break;

      case "ExpandirPaleta":

        this.paleta.nativeElement.height = '600px';

        break;

      case "ExpandirSelector":

        this.paleta.nativeElement.height = '600px';

        break;

      case "ContraerPaleta":

        this.paleta.nativeElement.height = '48px';

        break;

      case "ExpandirDial":

        this.paleta.nativeElement.height = '650px';

        break;

      case "ExpandirSegundaLlamada":

        let altura = (data.height * 2) + 'px';
        this.paleta.nativeElement.height = altura

        break;

      case "PaletaAlturaMinima":

        let height = data.altura;
        this.paleta.nativeElement.height = height + "px";

        break;

      case "PreviewCallData":

        console.log(data);

        break;

      case "PredictiveCallData":

        console.log(data);

        break;

      case "InboundCallData":

        console.log(data);

        break;

      case "VoiceRecordingFileName":

        console.log(data);

        break;

      case "VoiceRecordingFileNameAdditional":

        console.log(data);

        break;

      case "EndRescheduling":

        console.log(data);

        break;

      case "DatosAlerting":

        console.log(data);

        break;


      default:
        break;
    }
  }

  identificacion(alias) {

    tiphonejsapi.inicializar('*', '*', '*', `${alias}`,
      function (e) {
        if (e.error) {
          console.log('se ha producido un error en la conexion con el ACD.');
        }
      });

  }

}
