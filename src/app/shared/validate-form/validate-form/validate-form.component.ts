import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {sortOption} from "./validate-form.model";
import {sortOptionsEnumerate} from "../../../core/dashboard/dashboard/dashboard.model";

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.scss']
})
export class ValidateFormComponent implements OnInit {
  @Input() sortOptions: Array<sortOption> = [];
  @Input() sortBy = new FormControl(sortOptionsEnumerate.title);
  @Input() reverse = new FormControl(false)
  @Input() search = new FormControl('');
  @Input() placeholderSearch: string = '';
  validateDataForm = new FormGroup({sortBy: this.sortBy, reverse: this.reverse, search: this.search})

  constructor() { }

  ngOnInit(): void {
  }

}
