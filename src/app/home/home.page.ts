import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private callNumber: CallNumber,public alertController: AlertController) {}

  async openDial(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: 'Voulez-vous vraiment nous appeler ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.callNumber.callNumber("24670811", true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
          }
        }
      ]
    });
    await alert.present();




    
  }
}
