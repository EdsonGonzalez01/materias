import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // usuario = "";
  // password = "";
     salida = "";
     salida2 = "";
     A="";
     B="";
     C="";
     resultado1 ="";
     resultado2="";

  constructor(public navCtrl: NavController) {

  }

  clickButton(){
    // console.log( this. usuario, this.password);
    // this.salida = this.usuario + this.password; 
    
    // let propina = Number(this.usuario)*0.1;
    // this.salida = propina.toString() + '$';

    console.log( this. A);
    let A = Number(this.A);
    console.log(this.B)
    let B = Number(this.B);
    console.log(this.B)
    let C = Number(this.C);
  
    let resultado1 =  (((B*(-1))+Math.sqrt((B*B)-4*(A*C)))/2*A);
    this.salida = resultado1.toString() + " y";
    let resultado2 = (((B*(-1))-Math.sqrt((B*B)-4*(A*C)))/2*A);
    this.salida2 = resultado2.toString();
  }


}
