import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReactiveFormComponent implements OnInit {

  nameForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.nameForm = new FormGroup({
      firstName: new FormControl('', {
        validators: Validators.required,
        // updateOn: 'change'
      }),
      lastName: new FormControl('', {
        validators: Validators.required,
        // updateOn: 'change'
      })
    }, {
      updateOn: 'blur'
    });
  }

}
