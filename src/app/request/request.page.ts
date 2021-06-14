import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { RequestService } from 'src/Services/request.service';
import { Request } from '../Entities/Request';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  requestForm: FormGroup;
  datetime:any
    constructor(private formBuilder: FormBuilder,private requestService:RequestService,public toastController: ToastController) {
      var currentdate = new Date(); 
      this.datetime = currentdate.getDate() + "/"
                      + (currentdate.getMonth()+1)  + "/" 
                      + currentdate.getFullYear() + " - "  
                      + currentdate.getHours() + ":"  
                      + currentdate.getMinutes() + ":" 
                      + currentdate.getSeconds();
         }

  ngOnInit() {

    this.requestForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      location: ['', [Validators.required]],
      carType: ['', [Validators.required]],
      batteryType: ['', [Validators.required]]

    });
  }

  async onSubmit(){
    if(this.requestForm.valid){
    const req = new Request()
    req.firstName = this.requestForm.value.firstName
    req.lastName = this.requestForm.value.lastName
    req.vehicule = this.requestForm.value.carType
    req.email = this.requestForm.value.email
    req.tel = this.requestForm.value.phone
    req.location = this.requestForm.value.location
    req.battery = this.requestForm.value.batteryType
    req.date = this.datetime
    console.log(req);
    this.requestService.addRequest(req).subscribe(async data=>{
      console.log("added data",data)
      const toast = await this.toastController.create({
        message: 'Demande de remorquage envoyée..Un de nos employés vous appelera dans quelques minutes',
        duration: 4000,
        color: 'primary !',
        position: 'bottom',

      });
      toast.present();
    })
  }else{
    const toast = await this.toastController.create({
      message: 'Formulaire incomplet !',
      duration: 1000,
      color: 'primary !',
      position: 'bottom',

    });
    toast.present();

  }
}
}
