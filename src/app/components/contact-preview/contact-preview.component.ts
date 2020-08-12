import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {


  @Input() contact;
  @Output() contactSelected = new EventEmitter()
  @Output() contactRemoved = new EventEmitter()

  selectedContact(contact) {
    this.contactSelected.emit(contact)
  }

  removeContact(contact, ev) {
    ev.stopPropagation()
    this.contactRemoved.emit(contact._id)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
