import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {User} from "../shared/models/user.model";

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

  name: string = '';
  startDate: "1/1/2018";
  contactName: string = "batman";
  contactDate: Date = new Date();
  user: User;

  date = new FormControl(new Date());
  highway = new FormControl(new Date());

  constructor() { }

  ngOnInit(): void {
    this.user  = new User();
    this.user.contactDate = new Date();
  }


  onClick() {
    this.contactName = "superman";
   // this.contactDate = new Date("2019-12-15");
    this.user.contactDate =  new Date("2019-12-15")
    alert("You Clicked Me!");
  }

  doSomething() {
    this.contactName = "superman";
    this.contactDate = new Date("2019-12-15");
    alert("You Clicked Me!");
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    this.contactDate = event.value;
    console.log(event.value)
  }
}
