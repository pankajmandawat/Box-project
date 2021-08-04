import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router :Router){}
  title = 'App';

  Username:String =""
  userLoggedIn:boolean=false
  username:any 
  
  ngOnInit(){
    if(sessionStorage.getItem("userName") != null){
      this.userLoggedIn=true
    }
  }

  //Method to be called when logout to be done by user 
  logout(){
    this.userLoggedIn=false
    sessionStorage.clear()
    this.router.navigate(['/login'])
    
  }
}
