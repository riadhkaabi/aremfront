import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController, ModalController } from '@ionic/angular';
import { RequestService } from 'src/Services/request.service';
import { UserService } from 'src/Services/user.service';
import { AjouteruserPage } from '../ajouteruser/ajouteruser.page';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.page.html',
  styleUrls: ['./demandes.page.scss'],
})
export class DemandesPage implements OnInit {
requests:any=[];
 currentUser = JSON.parse(localStorage.getItem('user')) ;
 admin:boolean
  constructor(public requestService:RequestService,private callNumber: CallNumber,public alertController: AlertController,private modalController:ModalController,private userService:UserService,private router: Router) {
   }

  ngOnInit() {
    console.log("userrr",this.currentUser['0'].id)
    this.userService.getRoleById(this.currentUser['0'].id).subscribe(data=>{
      console.log("heeere")
      console.log("data",data['0'].role)
      if(data['0'].role == 1)
      {
        this.admin = true
      }else this.admin = false
    })
    this.getRequests();
  }
  doRefresh(event){
    console.log('Begin async operation');
    this.getRequests();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    

  }

  getRequests(){
    this.requestService.getRequests().subscribe(data=>{
      this.requests = data
      console.log("Requests",this.requests)
    })
  }

  async openDial(request){
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
            this.requestService.getTelById(request.id).subscribe(data=>{
              console.log(data['0'].tel)
              this.callNumber.callNumber(data['0'].tel, true)
              .then(res => console.log('Launched dialer!', res))
              .catch(err => console.log('Error launching dialer', err));
            })
            
            this.requestService.updateState(request.id).subscribe(data=>{
              console.log(data)
            })
          }
        }
      ]
    });
    await alert.present();

  }

   logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }


  async openModal() {
    const myModal = await this.modalController.create({
      component: AjouteruserPage,
      cssClass: 'my-custom-modal-css'
    });
    return await myModal.present();
  }

}
