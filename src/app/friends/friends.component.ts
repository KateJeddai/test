import { Component, OnInit } from '@angular/core';
import { Friend } from './friend';

const friends = [{
    name: 'Peppa',
    type: 'pig',
    age: 4
  }, {
    name: 'George',
    type: 'pig',
    age: 2
  }, {
    name: 'Rebecca',
    type: 'rabbit',
    age: 4.5
  }, {
    name: 'Chloe',
    type: 'pig',
    age: 6
  }];

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Friend[] = friends;

  constructor() { }

  ngOnInit(): void {
  }

  sort(str: string): void {     
    friends.sort((a, b) => {
      if(a[str] > b[str]) {
          return 1;
        } else if(a[str] < b[str]) {
          return -1;
        } return 0;
    })
  }

}
