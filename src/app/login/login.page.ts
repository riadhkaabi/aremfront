import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/Services/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:any;
  error: any ;
  @Input() currentUser:any
  constructor(
              private router: Router,
              private userService: UserService,
              private loadingController: LoadingController,
              private alertController: AlertController,
              private formBuilder: FormBuilder,
              public toastController: ToastController,

              ) { }
  
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
     

    });
  }
  
  async onSubmit(){
    if(this.form.valid){
      this.userService.details(this.form.controls.username.value,this.form.controls.password.value).subscribe(async data=>{
       
        console.log(data)
        
       if(data['0'] == undefined){
         
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: '',
          message: 'Username ou password invalides',
          buttons: [
             {
              text: 'Ok',
              handler: () => {
                
              }
            }
          ]
        });
        await alert.present();
         
         console.log("user not found")
       }else {console.log("the user is : ",data['0'])
       this.router.navigate(['/demandes']) ;

        localStorage.setItem('user', JSON.stringify(data)) ;
      
      }

      })
    }else{
      const toast = await this.toastController.create({
        message: 'Connexion invalide',
        duration: 2000,
        color: 'primary !',
        position: 'bottom',

      });
      toast.present();    }

  }
  



  
}
