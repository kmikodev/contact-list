(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/checkbox'), require('@angular/material'), require('@angular/forms'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('contact-list', ['exports', '@angular/core', '@angular/material/checkbox', '@angular/material', '@angular/forms', '@angular/common'], factory) :
	(factory((global['contact-list'] = {}),global.ng.core,global.ng.material.checkbox,global.ng.material,global.ng.forms,global.ng.common));
}(this, (function (exports,core,checkbox,material,forms,common) { 'use strict';

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
    { type: core.Component, args: [{
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    forms.ReactiveFormsModule,
                    material.MatListModule,
                    material.MatIconModule,
                    forms.FormsModule,
                    checkbox.MatCheckboxModule
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

exports.ContactListModule = ContactListModule;
exports.ContactListComponent = ContactListComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=contact-list.umd.js.map
