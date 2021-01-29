import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {RestService} from '../../rest.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private  fb: FormBuilder, public route: ActivatedRoute, public router: Router, public rs: RestService) {
    this.bookForm = this.fb.group({

      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],

    });
  }

  get f() {
    return this.bookForm.controls;
  }

  ngOnInit(): void {
  }


  createUser() {
    const data = this.bookForm.value;
    console.log(this.bookForm.value);
    this.rs.add(data).subscribe(res=>{});
    this.router.navigateByUrl('/layout/list');
  }
}
