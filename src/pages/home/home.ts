import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { PyEPage } from '../py-e/py-e';
import { ComPage } from '../com/com';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  CS = CsPage; 
  PyE =PyEPage; 
  Com = ComPage;

  constructor(public navCtrl: NavController) {

  }

  clickHistoria(){
    this.navCtrl.push(this.historia);


  }

  clickCiencias(){
    this.navCtrl.push(this.CS);

  }

  clickPyE(){
    this.navCtrl.push(this.PyE);

  }

  clickCom(){
    this.navCtrl.push(this.Com);
  
  }

}




