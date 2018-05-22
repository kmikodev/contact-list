import { Component, NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ContactListComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
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
ContactListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-contact-list',
                template: `<mat-list>
  <h3 mat-subheader>Contact list</h3>
  <mat-list-item *ngFor="let contact of contacts; last as last">
    <img mat-list-avatar [src]="'assets/'+contact.pic" alt="Image of {{contact.name}}">
    <h4 mat-line>{{contact.name + ' ' + contact.lastname}}</h4>
    <p mat-line>
      <span>Especie: {{contact.specie}} -- </span>
      <span class="demo-secondary-text">Trabajo: {{contact.job}}</span>
    </p>
    <p mat-line>
      <span>Género: {{contact.sex}} -- </span>
      <span class="demo-secondary-text">Edad: {{contact.age}}  -- </span>
      <span class="demo-secondary-text">Está {{contact.status}}</span>
    </p>
    <mat-divider inset *ngIf="!last"></mat-divider>
  </mat-list-item>
</mat-list>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ContactListComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0 = ContactListComponent;
class ContactListModule {
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { ContactListModule, ContactListComponent };
//# sourceMappingURL=contact-list.js.map
