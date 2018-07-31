import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  // listo = false;
  // nombre:string = "";
  // apellido:string = "";
  //
  // lugares:any = [
  //   {plan: "gratuito", cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia'},
  //   {plan: "pagado", cercania: 1, distancia: 1.8, active: true, nombre:'SushiRoll'},
  //   {plan: "gratuito", cercania: 2, distancia: 5, active: false, nombre:'Conejo Blas'},
  //   {plan: "pagado", cercania: 3, distancia: 10, active: true, nombre:'Subway'},
  //   {plan: "gratuito", cercania: 3, distancia: 45, active: false, nombre:'Castillo'},
  // ];

  // personas:any = [
  //   {nombre: "Javier", edad:25},
  //   {nombre: "Rodrigo", edad:16},
  //   {nombre: "Roxana", edad:31},
  //   {nombre: "María", edad:12},
  //   {nombre: "Natalia", edad:26},
  // ];

  // lat:number = 19.4483272;
  // lng:number = -99.1738324;

  constructor(){
    // setTimeout(()=> {
    //   this.listo=true;
    // },3000)
  }

  // hacerAlgo(){
  //   console.log("Algo hecho!");
  // }
}
