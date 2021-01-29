import {Component, OnInit} from '@angular/core';
import {BookFetch} from '../../bookFetch';
import {Book} from '../../book';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../../rest.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  book: any;
  val: any;
  books: Book[] = [];

  constructor(public route: ActivatedRoute, public router: Router, public rs: RestService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.val = params['id'];
    });
    console.log('id: ' + this.val);
    this.rs.getUpdateBook(this.val).subscribe(data=>{
      this.book=data;
    });
  }

  update() {
    this.rs.updateBook(this.book).subscribe(data => {
    });
    alert('Update Book ' + this.book.title + ' Successfull');
    this.getAll();
    this.router.navigate(['/layout/list/']);
  }

  getAll() {
    this.rs.getBooks().subscribe((response) => {
      this.books = response;
    });
  }

  getTitle() {
    return this.book.title;
  }

}
