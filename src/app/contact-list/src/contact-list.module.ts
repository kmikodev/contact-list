import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
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
    { provide: 'PLUGIN_ENTRY_POINT', useValue: ContactListComponent }
  ]
})
export class ContactListModule { }
