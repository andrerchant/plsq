import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})

export class LugaresComponent {
  title = 'Platzisquare';

  lat:number = 19.4483272;
  lng:number = -99.1738324;
  lugares : Observable<LugaresService>;

  constructor(afDB: AngularFireDatabase){

    // this.lugares = afDB.list('lugares/').valueChanges();
  // constructor(private lugaresService: LugaresService){
      // lugaresService.getLugares()
      //   .suscribe( lugares => {
      //     this.lugares = lugares;

      // this.lugares = lugaresService.getLugares().valueChanges();
      console.log(this.lugares);


  }

}
