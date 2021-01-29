import { Component, OnInit } from '@angular/core';
import {Book} from '../../book';
import {RestService} from '../../rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  books: any = [];
  id : any;

  constructor(public rs : RestService, private router: Router) { }

  ngOnInit(): void {
    this.rs.getBooks().subscribe((response) => {
      this.books = response;
      console.log(this.books);
    });
  }


  update(id: any) {
    this.router.navigate(['/layout/update/', id]);
    this.rs.getBooks().subscribe((response) => {
      this.books = response;
    });
  }

  delete(id: any) {
    this.rs.deleteBook(id).subscribe(data =>{
    });
    this.rs.getBooks().subscribe((response) => {
      this.books = response;
    });
  }
}
