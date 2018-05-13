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
    };
    return ContactListComponent;
}());
ContactListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-contact-list',
                template: "<mat-list>\n  <h3 mat-subheader>Contact list</h3>\n  <mat-list-item *ngFor=\"let contact of contacts; last as last\">\n    <img mat-list-avatar [src]=\"contact.image\" alt=\"Image of {{contact.from}}\">\n    <h4 mat-line>{{contact.name}}</h4>\n    <p mat-line>\n      <span>{{contact.phone}} -- </span>\n      <span class=\"demo-secondary-text\">{{contact.email}}</span>\n    </p>\n    <mat-divider inset *ngIf=\"!last\"></mat-divider>\n  </mat-list-item>\n</mat-list>",
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
