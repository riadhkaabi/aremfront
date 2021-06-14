import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/Services/user.service';
import { User } from '../Entities/User';

@Component({
  selector: 'app-ajouteruser',
  templateUrl: './ajouteruser.page.html',
  styleUrls: ['./ajouteruser.page.scss'],
})
export class AjouteruserPage implements OnInit {

  constructor(private formBuilder: FormBuilder,private userService:UserService) { 
    
  }

  
  credentialForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {

    this.credentialForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
     

    });
  }


  addUser(){
    const user = new User()
    user.username = this.credentialForm.value.username
    user.password = this.credentialForm.value.password
    this.userService.addUser(user).subscribe(data=>{
      console.log("userrr",data)
    })

  }
}
