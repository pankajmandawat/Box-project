import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.css']
})
export class UrlShortnerComponent implements OnInit {
  error: any
  constructor(private http: ServiceService, private formBuilder: FormBuilder) { }
  boxForm: any
  arr_1: any[] = [{ name: "A1", color: "Blue" }, { name: "B1", color: "White" }, { name: "C1", color: "White" },
  { name: "D1", color: "White" }, { name: "E1", color: "White" }]
  valid: any;
  increament: any
  userName: any
  indexOfBlue: any
  obj_update :any
  ngOnInit(): void {
    this.userName = sessionStorage.getItem("userName")
    this.http.getBox(this.userName).subscribe((response) => { 
      this.arr_1=response.progress
    })
    this.boxForm = this.formBuilder.group({
      boxName: ['', Validators.required]
    })
  }

  //Mthod for calling function for getting box
  Submit() {
    for (let array_1 of this.arr_1) {

      if (array_1.color == "Blue") {
        this.indexOfBlue = this.arr_1.indexOf(array_1)
      }
    }
    if (this.arr_1[this.indexOfBlue].name == this.boxForm.value.boxName) {

       this.obj_update ={ "username" : sessionStorage.getItem("userName"),
        "progress" : this.arr_1[this.indexOfBlue].name,
        "next_progress" : this.arr_1[this.indexOfBlue+1].name
    }
      this.http.updateUser(this.obj_update).subscribe((response) => {
        if (response) {
          this.ngOnInit()
        }
      })

    }

  }
}
