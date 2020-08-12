import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contactService/contact.service'
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router) { }

  contacts = null

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.getContacts()
  }


  setFilter(filterBy) {
    this.contactService.loadContacts(filterBy)
  }
  selectedContact(contact) {
    this.router.navigate([`${contact._id}`], { relativeTo: this.route });
  }
  removeContact(contactId) {
    this.contactService.deleteContact(contactId)
  }

  getContacts() {
    this.contactService.contacts$
      .subscribe(contacts => this.contacts = contacts)
  }







}
