import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contacts: { name: String, phone: String, email: String, image: String }[];

  constructor() {
  }

  ngOnInit() {
    if (!this.contacts) {
      this.contacts = [
        {
          name: 'Nancy',
          phone: '+34 606 00 00 01',
          email: 'nancy@gmail.com',
          image: 'https://angular.io/generated/images/bios/julie-ralph.jpg'
        },
        {
          name: 'Mary',
          phone: '+1 54 322 23',
          email: 'mary@gmail.com',
          image: 'https://angular.io/generated/images/bios/juleskremer.jpg'
        },
        {
          name: 'Bobby',
          phone: '+1 123 123 123',
          email: 'bobby@gmail.com',
          image: 'https://angular.io/generated/images/bios/jelbourn.jpg'
        }
      ];
    }
  }




}
