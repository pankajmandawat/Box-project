import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  error : string =""
  registerForm:any
  message:string =""
   constructor(private formBuilder: FormBuilder,private http : ServiceService,private router :Router){ }


  ngOnInit() {
      this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastName: ['', Validators.required],
      username:['', { updateOn: 'blur', validators: [this.validate_email ] }] ,
      password :['', Validators.required]
  
      })
    
  }

  
 //Reguar Expression for checking the email format
 validate_email(c:FormControl) {
     
  if(c.value.match(/^[\w._]+@[A-Za-z]+\.(com|co\.in|org)$/)){
     
    return c.value
    
  }
  else {
    
    return {emailError :{message:"Email is Invalid"}}
  }
}

//Function for calling service once the form is submitted
register(){

  this.message="we are creating the user on successfull creation you will be directed to login page"
  this.http.user_Register(this.registerForm.value).subscribe(response =>{
    this.router.navigate(['/login'])},
    error => {

      this.error=error
           

    }
)}
}



