import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contacts: {
    user: string,
    name: string,
    lastname: string,
    sex: string,
    status: string,
    specie: string,
    age: number,
    pic: string,
    job: string
  }[];

  constructor() {
  }

  ngOnInit() {
    if (!this.contacts) {
      this.contacts = [
        {
          user: "morty137",
          name: "Morty",
          lastname: "Smith",
          specie: "humano",
          sex: "masculino",
          status: "vivo",
          pic: "Morty_Smith.png",
          age: 14,
          job: "Estudiante"
        },
        {
          "user": "beth",
          "name": "Beth",
          "lastname": "Smith",
          "specie": "humano",
          "sex": "femenino",
          "status": "vivo",
          "pic": "Beth_Smith.png",
          "age": 34,
          "job": "Cirujana de caballos"
        },
        {
          "user": "sumer",
          "name": "Sumer",
          "lastname": "Smith",
          "specie": "humano",
          "sex": "femenino",
          "status": "vivo",
          "pic": "Summer.png",
          "age": 17,
          "job": "Estudiante"
        },
      ];
    }
  }




}
