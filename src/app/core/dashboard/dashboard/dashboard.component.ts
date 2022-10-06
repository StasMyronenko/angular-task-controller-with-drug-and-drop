import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {debounce, timer} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  sortBy = new FormControl('2')
  search = new FormControl('')
  validateDataForm = new FormGroup({sortBy: this.sortBy, search: this.search})

  ngOnInit() {
    this.sortBy.valueChanges
      .pipe(debounce(() => timer(1000)))
      .subscribe((value) => {
        console.log(value)
      })

    this.search.valueChanges
      .pipe(debounce(() => timer(1000)))
      .subscribe((value) => {
         console.log(value)
      })
  }

  constructor() { }

  submitForm() {
    console.log(this.validateDataForm)
  }


}
