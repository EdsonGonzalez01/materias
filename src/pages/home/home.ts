import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { PyEPage } from '../py-e/py-e';
import { ComPage } from '../com/com';
import { RoboPage } from '../robo/robo';
import { PappsPage } from '../papps/papps';
import { MiPage } from '../mi/mi';
import { DibPage } from '../dib/dib';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  CS = CsPage; 
  PyE =PyEPage; 
  Com = ComPage;
  Robo = RoboPage;
  Papps = PappsPage;
  Mi = MiPage; 
  Dib = DibPage;

  constructor(public navCtrl: NavController) {

  }

    clickHistoria(){
      this.navCtrl.push(this.historia);


    }

    clickCiencias(){
      this.navCtrl.push(this.CS);

    }

    clickPyE(){
      this.navCtrl.push(this.PyE)
      

    }

    clickPapps(){
      this.navCtrl.push(this.Papps)  


  }
    clickMi(){
    this.navCtrl.push(this.Mi)  


  }
    clickRobo(){
    this.navCtrl.push(this.Robo)  


  }

   clickDib(){
    this.navCtrl.push(this.Dib)  


  }


}
