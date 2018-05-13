import { OnInit } from '@angular/core';
export declare class ContactListComponent implements OnInit {
    contacts: {
        name: String;
        phone: String;
        email: String;
        image: String;
    }[];
    constructor();
    ngOnInit(): void;
}
