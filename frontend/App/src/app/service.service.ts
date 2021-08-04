import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import  { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
token : any 
  constructor(private http : HttpClient) { }
  
  //Method to call backend for verification of the credentials
user_auth(user_Obj:object):Observable<any>{
    
    return this.http.post("http://localhost:3000/user/login",user_Obj)


  }

//Method of backend call for creating new user
user_Register(user_Obj:object):Observable<any>{
    console.log(user_Obj)
    return this.http.post("http://localhost:3000/user/signup",user_Obj)
  }


//Method to get the Box
getBox(User: any):Observable<any>{
  return this.http.get(`http://localhost:3000/data/${User}`)
}

//Method to get historical user record 

getUserRecord():Observable<any>{

  return this.http.get("http://localhost:3000/data",{headers : {BeareToken : this.token}})

}

//Method to update the box color when correctly inserted 
updateUser(Obj :object ) : Observable<any>{
  return this.http.put("http://localhost:3000/user/data",Obj)
}

}



