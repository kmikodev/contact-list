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
    { type: core.Component, args: [{
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
