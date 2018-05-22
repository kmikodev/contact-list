import { OnInit } from '@angular/core';
export declare class ContactListComponent implements OnInit {
    contacts: {
        user: string;
        name: string;
        lastname: string;
        sex: string;
        status: string;
        specie: string;
        age: number;
        pic: string;
        job: string;
    }[];
    constructor();
    ngOnInit(): void;
}
