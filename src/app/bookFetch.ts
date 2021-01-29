export class BookFetch{
   id: string;
   title: string;
   author: string;
   description: string;


  constructor(id: string, title: string, author: string, description: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
  }
}

