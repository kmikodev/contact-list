import { Component, NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

var ContactListComponent = /** @class */ (function () {
    function ContactListComponent() {
    }
    ContactListComponent.prototype.ngOnInit = function () {
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
    };
    return ContactListComponent;
}());
ContactListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-contact-list',
                template: "<mat-list>\n  <h3 mat-subheader>Contact list</h3>\n  <mat-list-item *ngFor=\"let contact of contacts; last as last\">\n    <img mat-list-avatar [src]=\"'assets/'+contact.pic\" alt=\"Image of {{contact.name}}\">\n    <h4 mat-line>{{contact.name + ' ' + contact.lastname}}</h4>\n    <p mat-line>\n      <span>Especie: {{contact.specie}} -- </span>\n      <span class=\"demo-secondary-text\">Trabajo: {{contact.job}}</span>\n    </p>\n    <p mat-line>\n      <span>G\u00E9nero: {{contact.sex}} -- </span>\n      <span class=\"demo-secondary-text\">Edad: {{contact.age}}  -- </span>\n      <span class=\"demo-secondary-text\">Est\u00E1 {{contact.status}}</span>\n    </p>\n    <mat-divider inset *ngIf=\"!last\"></mat-divider>\n  </mat-list-item>\n</mat-list>",
                styles: [""]
            },] },
];
ContactListComponent.ctorParameters = function () { return []; };
var ɵ0 = ContactListComponent;
var ContactListModule = /** @class */ (function () {
    function ContactListModule() {
    }
    return ContactListModule;
}());
ContactListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    MatListModule,
                    MatIconModule,
                    FormsModule,
                    MatCheckboxModule
                ],
                declarations: [
                    ContactListComponent
                ],
                exports: [
                    ContactListComponent
                ],
                entryComponents: [
                    ContactListComponent
                ],
                providers: [
                    { provide: 'COMPONENT_ENTRY_POINT', useValue: ɵ0 }
                ]
            },] },
];

export { ContactListModule, ContactListComponent };
//# sourceMappingURL=contact-list.js.map
