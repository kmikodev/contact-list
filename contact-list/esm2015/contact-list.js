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
ContactListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-contact-list',
                template: `<mat-list>
  <h3 mat-subheader>Contact list</h3>
  <mat-list-item *ngFor="let contact of contacts; last as last">
    <img mat-list-avatar [src]="contact.image" alt="Image of {{contact.from}}">
    <h4 mat-line>{{contact.name}}</h4>
    <p mat-line>
      <span>{{contact.phone}} -- </span>
      <span class="demo-secondary-text">{{contact.email}}</span>
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
