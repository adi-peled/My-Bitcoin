import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {


  @Input() contacts;
  @Output() contactSelected = new EventEmitter()
  @Output() contactRemoved = new EventEmitter()

  constructor() { }
  selectedContact(contact) {
    this.contactSelected.emit(contact)
  }

  removeContact(contactId) {
    this.contactRemoved.emit(contactId)
  }
  ngOnInit(): void {
  }

}
