import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  keysArr: any[] = [];
  keys = [];
  // users details array
  users: { firstName: string, lastName: string, email: string }[] = [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com'
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@example.com'
  },
  {
    firstName: 'Mary',
    lastName: 'Doe',
    email: 'marydoe@example.com'
  },
  {
    firstName: 'Bob',
    lastName: 'Doe',
    email: 'bobdoe@example.com'
  }
  ];
  // pushes keys of object to an array, over which ngFor loops and displays the keys in column headings
  ngOnInit() {
    this.users.forEach(element => {
      this.keysArr.push(Object.keys(element));
    });
    this.keys = this.keysArr[0];
  }
}
