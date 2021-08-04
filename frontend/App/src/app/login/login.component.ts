import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: any
  constructor(private formBuilder: FormBuilder, private app: AppComponent, private http: ServiceService, private router: Router) {

  }
  invalid_User: boolean = false
  error: string = ""
  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      username: ['', { updateOn: 'blur', validators: [this.validate_email] }],
      password: ['', Validators.required]
    })
  }

  //Reguar Expression for checking the email format
  validate_email(c: FormControl) {

    if (c.value.match(/^[\w._]+@[A-Za-z]+\.(com|co\.in|org)$/)) {

      return c.value

    }
    else {

      return { emailError: { message: "Email is Invalid" } }
    }
  }

  //Function to call when credentials submitted by the user and 
  login() {

    //checking Written for generic user for testing 
    if (this.registerForm.value.username == "pankaj.k.mandawat@gmail.com" && this.registerForm.value.password == "Admin") {
      sessionStorage.setItem("userName", this.registerForm.value.username)
      this.app.ngOnInit()
      this.router.navigate(['/sturl'])

    }
    else {
      this.http.user_auth(this.registerForm.value).subscribe(response => {
        sessionStorage.setItem("userName", this.registerForm.value.username)
        sessionStorage.setItem("JWTToken", response)
        this.router.navigateByUrl("http://localhost:4200/sturl")
      },
        error => {

          this.error = error
          this.invalid_User = true

        }
      )
    }
  }
}




