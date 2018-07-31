import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()

export class LugaresService{

  lugares:any = [
    {id: 1, plan: "gratuito", cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia', descripcion:'Vale por una descripcion'},
    {id: 2, plan: "pagado", cercania: 1, distancia: 1.8, active: true, nombre:'SushiRoll', descripcion:'Vale por una descripcion'},
    {id: 3, plan: "gratuito", cercania: 2, distancia: 5, active: false, nombre:'Conejo Blas', descripcion:'Vale por una descripcion'},
    {id: 4, plan: "pagado", cercania: 3, distancia: 10, active: true, nombre:'Subway', descripcion:'Vale por una descripcion'},
    {id: 5, plan: "gratuito", cercania: 3, distancia: 45, active: false, nombre:'Castillo', descripcion:'Vale por una descripcion'},
  ];
  constructor(private afDB:AngularFireDatabase){}
  public getLugares(){
    return this.afDB.list('lugares/');
  }
  public buscarLugar(id){
    return this.lugares.filter((lugar)=>{ return lugar.id == id })[0] || null;
  }
  public guardarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }
}
